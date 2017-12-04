import React, { Component } from 'react';
import { throttle } from 'lodash';

import { Modal } from '../../components/Modal';

class ModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false,
      saving: false,
      id: '',
      code: '',
      name: ''
    };
  }

  handleOpenModal = () => {
    this.setState({ isShow: true, code: '', name: '', id: '' });
  }

  handleCloseModal = () => {
    this.setState({ isShow: false, code: '', name: '', id: '' });
  }

  handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmitForm = (event) => {
    if (event) {
      event.preventDefault();
    }

    const { saving, code, name } = this.state;
    if (saving) {
      return;
    }

    this.setState({ saving: true });

    console.log(code, name, 'save');

    setTimeout(() => {
      this.setState({ saving: false });
    }, 2000);
  }


  render() {
    const { isShow, id, code, name, saving } = this.state;

    return (
      <div className="common-main loading-main">
        <header className="main-page-header">
          <h1>Modal 对话框</h1>
        </header>

        <div className="main-page-body">
          <button className="hlrui-btn hlrui-btn-tgreen" onClick={this.handleOpenModal}>新建英雄</button>

          <Modal show={isShow} className="create-area-container" onClose={this.handleCloseModal} title={id ? '编辑英雄' : '新增英雄'}>
            <form className="panel-form create-area-form form-body">
              { /* =======================英雄编号======================= */ }
              <div className="hlrui-form-group">
                <label className="hlrui-form-label">英雄编号:</label>
                <div className="hlrui-form-content">
                  <div className="hlrui-form-control-wrapper">
                    <input
                      type="text"
                      name="code"
                      className="hlrui-form-control"
                      ref={el => this.codeInput = el}
                      value={code}
                      onChange={this.handleChangeInput}
                      maxLength="20"
                      placeholder="请输入英雄编号，最多支持20个纯数字"
                    />
                  </div>
                </div>
              </div>

              { /* =======================英雄名称======================= */ }
              <div className="hlrui-form-group">
                <label className="hlrui-form-label">英雄名称:</label>
                <div className="hlrui-form-content">
                  <div className="hlrui-form-control-wrapper">
                    <input
                      type="text"
                      name="name"
                      className="hlrui-form-control"
                      ref={el => this.bameInput = el}
                      value={name}
                      onChange={this.handleChangeInput}
                      maxLength="20"
                      placeholder="请输入英雄名称，最多支持20个字符"
                    />
                  </div>
                </div>
              </div>

              { /* =======================按钮======================= */ }
              <div className="hlrui-form-group form-group-btns">
                <label className="hlrui-form-label" />
                <div className="hlrui-form-content btn-groups">
                  <div className="hlrui-form-control-wrapper">
                    <button className="hlrui-btn hlrui-btn-tred" onClick={throttle(this.handleSubmitForm, 800)}>
                      { saving ? <i className="fa fa-spinner fa-spin fa-fw" /> : '保存' }
                    </button>
                    <span className="hlrui-btn hlrui-btn-default" onClick={this.handleCloseModal}>取消</span>
                  </div>
                </div>

              </div>
            </form>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ModalContainer;
