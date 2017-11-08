import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ImageUploadDefault from './images/img-upload-default-multiple.png';

import './Dropzone.less';

class Dropzone extends Component {
    static propTypes = {
      imgWidth: PropTypes.number,
      imgHeight: PropTypes.number,
      limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 上传图片大小限制（kb）
      totalLimit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 上传图片大小限制（kb）
      className: PropTypes.string,
      disabled: PropTypes.bool,
      accept: PropTypes.arrayOf(PropTypes.string), // 允许上传图片类型
      onDrop: PropTypes.func
    }

    static defaultProps = {
      imgWidth: 160,
      imgHeight: 100,
      limit: 1024,
      totalLimit: Infinity,
      accept: ['jpeg', 'png', 'jpg', 'bmp'],
      disabled: false
    }

    constructor(props) {
      super(props);

      this.state = {
        accepted: [],
        acceptedTotalSize: 0,
        selectedFiles: [], // { name: '', size: '', lastModified: '', dataUrl: '', direction: '', progress: '' }
      };

      this.directions = [1, 2, 3, 4];
    }

    handleDropFiles = (acceptedFiles, rejectedFiles) => {
      const { limit, totalLimit } = this.props;
      const { accepted, acceptedTotalSize, selectedFiles } = this.state;

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
        console.log(existFiles, '等文件已存在');
      }

      if (rejectedFilesIncrement.length) {
        console.log(rejectedFilesIncrement, '等文件不符合上传条件');
      }

      if (acceptedFilesIncrement.length) {
        const nextAccepted = [...accepted, ...acceptedFilesIncrement];
        const totalFileSizeIncrement = nextAccepted.reduce((previousSize, nextFile) => previousSize + nextFile.size, 0);
        if (totalFileSizeIncrement > totalLimit * 1024) {
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
            nextSelectedFiles.push({ name: file.name, size: file.size, lastModified: file.lastModified, dataUrl, direction: this.directions[0], progress: 0 });
          }

          this.setState({ selectedFiles: nextSelectedFiles });
        });

        this.setState({ accepted: nextAccepted, acceptedTotalSize: totalFileSizeIncrement + acceptedTotalSize });
      }

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

    renderFilePreview = (file) => {
      const { imgWidth, imgHeight } = this.props;

      return (
        <div className="selected-image-wrap" key={file.name + file.size + file.lastModified}>
          <div className="selected-image-operate-bar">
            <span className="remove" />
            <span className="rotate-right" />
            <span className="rotate-left" />
          </div>
          <img className="selected-image" width={imgWidth} height={imgHeight} src={file.dataUrl} />
        </div>
      );
    }

    render() {
      const { accepted, acceptedTotalSize, selectedFiles } = this.state;
      const { className, disabled, accept } = this.props;

      return (
        <div className={classNames('hlrui-dropzone', { [className]: className })}>
          {
            (!accepted || !accepted.length) &&
            <DropZone
              ref={node => this.dropzoneRef = node}
              className="hlrui-dropzone-wrap"
              accept={accept.map(item => `image/${item}`).join(', ')}
              onDrop={this.handleDropFiles}
              disabled={disabled}
              disableClick
            >
              <div className="hlrui-dropzone-form-group dropzone-form-group-default">
                <img className="image-upload-default" src={ImageUploadDefault} />
              </div>
              <div className="hlrui-dropzone-form-group dropzone-form-group-button">
                <div className="hlrui-btn hlrui-btn-primary" onClick={() => this.dropzoneRef.open()}>点击选择图片</div>
              </div>
              <div className="hlrui-dropzone-form-group dropzone-form-group-desc">
                <p className="dropzone-upload-desc">或将图片拖到这里，单次最多可选300张</p>
                <p className="dropzone-upload-desc">单张图片最大350kb，纵横比16：10，推荐尺寸1280px乘800px，最小尺寸800px乘500px（仅支持jpg、jpeg、bmp和png格式）</p>
              </div>
            </DropZone>
          }
          {
            !!(accepted && accepted.length) &&
            <div className="hlrui-dropzone-preview">
              <div className="dropzone-preview-wrap">
                { !!(selectedFiles && selectedFiles.length) && selectedFiles.map(this.renderFilePreview) }
              </div>
              <div className="dropzone-selected-status-bar">
                <div className="selected-info">选中{accepted.length}张图片，共{(acceptedTotalSize / 1024).toFixed(2)}K。</div>
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
                  <div className="hlrui-btn hlrui-btn-primary">开始上传</div>
                </div>
              </div>
            </div>
          }
        </div>
      );
    }
}

export default Dropzone;
