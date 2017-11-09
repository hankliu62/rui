import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Progress } from '../Progress';
import ImageUploadDefault from './images/img-upload-default-multiple.png';

import './Dropzone.less';

class Dropzone extends Component {
    static propTypes = {
      imgWidth: PropTypes.number,
      imgHeight: PropTypes.number,
      batchUploadCount: PropTypes.number, // 同时异步并发上传的个数
      limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 上传图片大小限制（kb）
      totalLimit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 上传图片大小限制（kb）
      className: PropTypes.string,
      disabled: PropTypes.bool,
      accept: PropTypes.arrayOf(PropTypes.string), // 允许上传图片类型
      onDrop: PropTypes.func,
      onUpload: PropTypes.func // ** attention **: should return a promise to control uploading progress bar
    }

    static defaultProps = {
      imgWidth: 160,
      imgHeight: 100,
      batchUploadCount: 3,
      limit: 1024,
      totalLimit: Infinity,
      accept: ['jpeg', 'png', 'jpg', 'bmp'],
      disabled: false
    }

    constructor(props) {
      super(props);

      this.state = {
        selectedFilesTotalSize: 0,
        selectedFiles: [],
        uploadedImages: [],
        status: 'beforeUpload' // oneOf(['beforeUpload', 'uploading', 'uploaded'])
      };

      // ** note **: selectedFiles struct is {
      //     file: file,
      //     name: '',
      //     size: '',
      //     lastModified: '',
      //     dataUrl: '',
      //     direction: '',
      //     progress: '',
      //     uploadStatus: oneOf(['beforeUpload', 'uploading', 'succeed', 'failed'])
      // }

      this.directions = [0, 1, 2, 3];

      this.uploadingProgressTimers = {};
    }

    componentWillUnmount() {
      this.clearUploadingProgressTimers();
    }

    handleDropFiles = (acceptedFiles, rejectedFiles) => {
      const { limit, totalLimit } = this.props;
      const { selectedFilesTotalSize, selectedFiles } = this.state;
      const accepted = selectedFiles.map(item => item.file);

      const acceptedFilesIncrement = [];
      const rejectedFilesIncrement = [...(rejectedFiles || [])];
      const existFiles = [];
      if (acceptedFiles && acceptedFiles.length) {
        for (const file of acceptedFiles) {
          if (limit * 1024 < file.size) {
            rejectedFilesIncrement.push(file);
          } else {
            const index = accepted.findIndex(acceptedFile => this.isSameFile(file, acceptedFile));
            if (index >= 0) {
              existFiles.push(file);
            } else {
              acceptedFilesIncrement.push(file);
            }
          }
        }
      }

      if (existFiles.length) {
        // TODO: toast
        console.log(existFiles, '等文件已存在');
      }

      if (rejectedFilesIncrement.length) {
        // TODO: toast
        console.log(rejectedFilesIncrement, '等文件不符合上传条件');
      }

      if (acceptedFilesIncrement.length) {
        const nextAccepted = [...accepted, ...acceptedFilesIncrement];
        const totalFileSizeIncrement = nextAccepted.reduce((previousSize, nextFile) => previousSize + nextFile.size, 0);
        if (totalFileSizeIncrement > totalLimit * 1024) {
          // TODO: toast
          console.log('超出总量限制');

          if (this.props.onDrop) {
            this.props.onDrop([], [...(acceptedFiles || []), ...(rejectedFiles || [])]);
          }

          return;
        }

        const nextSelectedFiles = [...selectedFiles];
        const readFilePromises = acceptedFilesIncrement.map(this.readFileAsDataURL);
        Promise.all(readFilePromises).then((dataUrls) => {
          for (const [index, dataUrl] of dataUrls.entries()) {
            const file = acceptedFilesIncrement[index];
            nextSelectedFiles.push({
              file,
              name: file.name,
              size: file.size,
              lastModified: file.lastModified,
              dataUrl,
              direction: this.directions[0],
              progress: 0,
              uploadStatus: 'beforeUpload'
            });
          }

          this.setState({ selectedFiles: nextSelectedFiles });
        });

        this.setState({ selectedFilesTotalSize: totalFileSizeIncrement + selectedFilesTotalSize });
      }

      this.setState({ status: 'beforeUpload' });

      if (this.props.onDrop) {
        this.props.onDrop(acceptedFilesIncrement, rejectedFilesIncrement);
      }
    }

    handleFileAppend = () => {
      this.appendFileRef.value = null;
      this.appendFileRef.click();
    }

    handleFileInputChange = (e) => {
      const files = e.target.files;
      if (!files || files.length === 0) {
        return false;
      }

      this.handleDropFiles(files, []);
    }

    handleRemoveSelectedFile = (index) => {
      const { selectedFilesTotalSize, selectedFiles } = this.state;
      const removeFile = selectedFiles[index];
      const nextSelectedFiles = selectedFiles.filter((_, innerIndex) => index !== innerIndex);
      const nextAcceptedTotalSize = selectedFilesTotalSize - removeFile.size >= 0 ? (selectedFilesTotalSize - removeFile.size) : 0;
      this.setState({ selectedFiles: nextSelectedFiles, selectedFilesTotalSize: nextAcceptedTotalSize });
    }

    handleRotateSelectedFile = (index, step) => {
      const { selectedFiles } = this.state;
      const rotateFile = selectedFiles[index];
      this.setSelectedFileState(index, { direction: ((rotateFile.direction + step) + this.directions.length) % this.directions.length });
    }

    handleUploadFiles = async () => {
      this.setState({ status: 'uploading', uploadedImages: [] });
      // TODO: upload files
      const { selectedFiles } = this.state;
      const { batchUploadCount } = this.props;
      const uploadHandler = this.props.onUpload || this.uploadFile;
      const uploadedImages = [];
      // 获得所有还未上传或者上传失败的图片
      const willUploadFiles = selectedFiles.map((file, index) => ({ ...file, index })).filter(file => ['beforeUpload', 'failed'].includes(file.uploadStatus));

      const uploadFilesChunks = this.chunk(willUploadFiles, batchUploadCount);
      console.log(willUploadFiles, uploadFilesChunks);

      for (const uploadFilesChunk of uploadFilesChunks) {
        const uploadChunckPromise = uploadFilesChunk.map(file => uploadHandler(file.file, file.index));
        await Promise.all(uploadChunckPromise).then((data) => {
          for (const [index, item] of data.entries()) {
            const file = uploadFilesChunk[index];
            if ('error' in item) {
              this.setSelectedFileState(file.index, { uploadStatus: 'failed' });
              this.clearUploadingProgressTimer(file);
              uploadedImages[file.index] = '';
              console.log(file, '上传失败');
            } else {
              this.setSelectedFileState(file.index, { uploadStatus: 'succeed', progress: 100 });
              this.clearUploadingProgressTimer(file);
              uploadedImages[file.index] = item.url;
            }
          }
        });
      }

      this.setState({ status: 'uploaded', uploadedImages });

      // for (const [index, file] of willUploadFiles.entries()) {
      //     await uploadHandler(file.file, index).then((url) => {
      //         this.setSelectedFileState(index, { uploadStatus: 'succeed', progress: 100 });
      //         this.clearUploadingProgressTimer(file);
      //         uploadImages[index] = url;
      //     }, () => {
      //         this.setSelectedFileState(index, { uploadStatus: 'failed' });
      //         this.clearUploadingProgressTimer(file);
      //         uploadImages[index] = '';
      //         console.log(file, '上传失败');
      //     });
      // }
    }

    setSelectedFileState = (index, payload) => {
      const { selectedFiles } = this.state;

      if (selectedFiles[index]) {
        Object.assign(selectedFiles[index], payload);
        this.setState({ selectedFiles });
      }
    }

    uploadFile = (file, index) => {
      this.setSelectedFileState(index, { uploadStatus: 'uploading', progress: 0 });
      this.genUploadingProgressTimer(file, index);
      return this.uploadToLocal(file, index);
    }

    uploadToLocal = (file, index) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setTimeout(() => {
            if (Math.random() > 0.5) {
              console.log(file, 'success');
              resolve({ url: reader.result, index });
            } else {
              console.log(file, 'fail');
              resolve({ error: new Error('error'), index });
            }
          }, 5000);
        };

        reader.onerror = (err) => {
          setTimeout(() => {
            // TODO： show fail reason
            resolve({ error: err, index });
          }, 5000);
        };
      });
    }

    clearUploadingProgressTimer = (file) => {
      const key = file.name + file.size + file.lastModified;
      if (this.uploadingProgressTimers[key]) {
        window.clearTimeout(this.uploadingProgressTimers[key]);
        delete (this.uploadingProgressTimers[key]);
      }
    }

    clearUploadingProgressTimers = () => {
      for (const key in this.uploadingProgressTimers) {
        if (Object.prototype.hasOwnProperty.call(this.uploadingProgressTimers, key)) {
          if (this.uploadingProgressTimers[key]) {
            window.clearTimeout(this.uploadingProgressTimers[key]);
            delete (this.uploadingProgressTimers[key]);
          }
        }
      }

      this.uploadingProgressTimers = {};
    }

    genUploadingProgressTimer = (file, index) => {
      const key = file.name + file.size + file.lastModified;

      const uploadingProgressTimer = () => {
        const { selectedFiles } = this.state;
        if (selectedFiles[index] && selectedFiles[index].progress <= 90) {
          const uploadingProgress = selectedFiles[index].progress + 5;
          this.setSelectedFileState(index, { progress: uploadingProgress });
          this.uploadingProgressTimers[key] = window.setTimeout(uploadingProgressTimer, 100);
        }
      };

      window.setTimeout(uploadingProgressTimer, 100);
    }

    readFileAsDataURL = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = err => reject(err);
      });
    }

    isSameFile = (target, compare) => {
      return target.size === compare.size && target.name === compare.name && target.lastModified === compare.lastModified;
    }

    chunk = (arr, count) => {
      if (!count || count < 1) return [];
      const result = [];
      const length = arr.length;
      let i = 0;
      while (i < length) {
        result.push(Array.prototype.slice.call(arr, i, i += count));
      }

      return result;
    };

    renderFilePreview = (file, index) => {
      const { imgWidth, imgHeight } = this.props;
      const minWidth = Math.min(imgWidth, imgHeight);
      const { direction, progress } = file;
      const rotateBase = this.directions.findIndex(item => item === direction);

      return (
        <div className={classNames('selected-image-wrap', { 'unupload-image-wrap': ['beforeUpload', 'failed'].includes(file.uploadStatus) })} key={file.name + file.size + file.lastModified}>
          <div className="selected-image-operate-bar">
            <span className={classNames('operate-item operate-rotate-left', { hidden: file.uploadStatus !== 'beforeUpload' })} onClick={() => this.handleRotateSelectedFile(index, -1)} />
            <span className={classNames('operate-item operate-rotate-right', { hidden: file.uploadStatus !== 'beforeUpload' })} onClick={() => this.handleRotateSelectedFile(index, 1)} />
            <span className="operate-item operate-remove" onClick={() => this.handleRemoveSelectedFile(index)} />
          </div>
          {
            ['beforeUpload', 'uploading'].includes(file.uploadStatus) && <Progress className="hlrui-progress-tred" percent={progress} height="10" />
          }
          {
            file.uploadStatus === 'failed' && <div className="hlrui-upload-fail-bar">上传失败，请重试</div>
          }
          {
            file.uploadStatus === 'succeed' && <div className="hlrui-upload-success-bar" />
          }

          <img
            className="selected-image"
            style={{ width: `${minWidth}px`, height: `${minWidth}px`, transform: `rotate(${90 * rotateBase}deg)` }}
            width={minWidth}
            height={minWidth}
            src={file.dataUrl}
          />
        </div>
      );
    }

    render() {
      const { selectedFilesTotalSize, selectedFiles, status, uploadedImages } = this.state;
      const { className, disabled, accept } = this.props;

      // 本次上传成功或失败的图片数量
      const succeedFilesLength = uploadedImages.filter(item => !!item).length;
      const failedFilesLength = uploadedImages.filter(item => !item).length;

      return (
        <div className={classNames('hlrui-dropzone', { [className]: className })}>
          {
            (!selectedFiles || !selectedFiles.length) &&
            <DropZone
              ref={node => this.dropzoneRef = node}
              className="hlrui-dropzone-wrap"
              accept={accept.map(item => `image/${item}`).join(', ')}
              onDrop={this.handleDropFiles}
              disabled={disabled}
              disableClick
            >
              <div className="hlrui-dropzone-form-group dropzone-form-group-desc">
                <p className="dropzone-upload-desc">图片文件名需同菜品名完全一致</p>
              </div>
              <div className="hlrui-dropzone-form-group dropzone-form-group-default">
                <img className="image-upload-default" src={ImageUploadDefault} />
              </div>
              <div className="hlrui-dropzone-form-group dropzone-form-group-button">
                <div className="hlrui-btn hlrui-btn-tblue" onClick={() => this.dropzoneRef.open()}>点击选择图片</div>
              </div>
              <div className="hlrui-dropzone-form-group dropzone-form-group-desc">
                <p className="dropzone-upload-desc">或将图片拖到这里，单次最多可选300张</p>
                <p className="dropzone-upload-desc">单张图片最大350kb，纵横比16：10，推荐尺寸1280px乘800px，最小尺寸800px乘500px（仅支持jpg、jpeg、bmp和png格式）</p>
              </div>
            </DropZone>
          }
          {
            !!(selectedFiles && selectedFiles.length) &&
            <div className="hlrui-dropzone-preview">
              <div className="dropzone-preview-wrap">
                { !!(selectedFiles && selectedFiles.length) && selectedFiles.map(this.renderFilePreview) }
              </div>
              <div className="dropzone-selected-status-bar">
                {
                  ['beforeUpload', 'uploading'].includes(status) &&
                  <div className="selected-info">选中{selectedFiles.length}张图片，共{(selectedFilesTotalSize / 1024).toFixed(2)}K。</div>
                }
                {
                  status === 'uploaded' &&
                  <div className="selected-info">已成功上传{succeedFilesLength}张照片至服务器，{failedFilesLength}张照片上传失败，重新上传失败图片或忽略</div>
                }
                <div className="selected-btn-group">
                  <div className="hlrui-btn hlrui-btn-default" onClick={this.handleFileAppend}>
                    继续添加
                    <input
                      ref={node => this.appendFileRef = node}
                      type="file"
                      accept={accept.map(item => `image/${item}`).join(', ')}
                      autoComplete="off"
                      style={{ display: 'none' }}
                      onChange={this.handleFileInputChange}
                      multiple
                    />
                  </div>
                  <div className="hlrui-btn hlrui-btn-tred" onClick={() => this.handleUploadFiles()}>开始上传</div>
                </div>
              </div>
            </div>
          }
        </div>
      );
    }
}

export default Dropzone;
