import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Modal.less';

class Modal extends Component {
  static propTypes = {
    show: PropTypes.bool,
    className: PropTypes.string,
    title: PropTypes.any,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func.isRequired
  }

  static defaultProps = {
    onClose: () => {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.props.show) {
      this.addBodyOverflowHidden();
    }

    if (!nextProps.show && this.props.show) {
      this.removeBodyOverflowHidden();
    }
  }

  handleCloseModal = (e) => {
    e.stopPropagation();
    this.props.onClose();
  }

  handleConfirmModal = (e) => {
    e.stopPropagation();
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  }

  handleCancelModal = (e) => {
    e.stopPropagation();
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  addBodyOverflowHidden = () => {
    const body = document.body;
    if (!body.className.includes('overflowy-hidden')) {
      body.className = `${body.className} overflowy-hidden`.trim();
    }
  }

  removeBodyOverflowHidden = () => {
    const modals = document.getElementsByClassName('hlrui-modal');
    const body = document.body;
    if (body.className.includes('overflowy-hidden')) {
      let hasShowModal = false;
      if (modals.length) {
        for (const item of modals) {
          if (item !== this.modal && item.className.includes('show')) {
            hasShowModal = true;
          }
        }

        if (!hasShowModal) {
          body.className = body.className.replace('overflowy-hidden', '').trim();
        }
      } else {
        body.className = body.className.replace('overflowy-hidden', '').trim();
      }
    }
  }

  render() {
    const { show, title, className, extraRender, children } = this.props;

    return (
      <div ref={el => this.modal = el} className={classNames('hlrui-modal', { show, [className]: className })}>
        <div className="hlrui-modal-container">
          {
            (title || extraRender) &&
            <div className="hlrui-modal-header">
              <span className="hlrui-modal-title">{title}</span>
              { extraRender && <div className="hlrui-modal-extra">{ extraRender() }</div>}
              <span className="hlrui-modal-close" onClick={this.handleCloseModal}>&times;</span>
            </div>
          }
          {
            children &&
            <div className="hlrui-modal-body">
              { children }
            </div>
          }
          <div className="hlrui-modal-footer">
            {
              this.props.onConfirm &&
              <span className="hlrui-btn hlrui-btn-primary" onClick={this.handleConfirmModal}>确定</span>
            }

            {
              this.props.onCancel &&
              <span className="hlrui-btn hlrui-btn-default" onClick={this.handleCancelModal}>取消</span>
            }
          </div>
        </div>
        <div className="hlrui-mask" onClick={this.handleCloseModal} />
      </div>
    );
  }
}

export default Modal;
