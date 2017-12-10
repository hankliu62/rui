import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Tooltip } from '../Tooltip';
import { Button } from '../Button';
import { Icon } from '../Icon';

import './PopConfirm.less';

class PopConfirm extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    cancelText: PropTypes.string,
    okText: PropTypes.string,
    cancelTheme: PropTypes.string,
    okTheme: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    showInfoIcon: PropTypes.bool,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
  }

  static defaultProps = {
    cancelText: '取消',
    okText: '确认',
    cancelTheme: 'default',
    okTheme: 'primary',
    showInfoIcon: true
  }

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  handleCancel = (e) => {
    if (e) {
      e.stopPropagation();
    }

    if (this.props.onCancel) {
      this.props.onCancel();
    }

    this.setState({ visible: false });
  }

  handleOk = (e) => {
    if (e) {
      e.stopPropagation();
    }

    if (this.props.onConfirm) {
      this.props.onConfirm();
    }

    this.setState({ visible: false });
  }

  renderOverlay = () => {
    const { title, showInfoIcon, cancelText, cancelTheme, okText, okTheme } = this.props;

    return (
      <div className="hlrui-popover-inner-content">
        <div className="hlrui-popover-header">
          {showInfoIcon && <Icon className="hlrui-popover-header-icon" type="info-sign" />}
          <div className="hlrui-popover-header-title">{title}</div>
        </div>
        <div className="hlrui-popover-btns">
          <Button theme={cancelTheme} size="small" onClick={this.handleCancel}>{cancelText}</Button>
          <Button theme={okTheme} size="small" onClick={this.handleOk}>{okText}</Button>
        </div>
      </div>
    );
  }

  render() {
    const { className, children, ...others } = this.props;

    return (
      <Tooltip
        {...others}
        prefixCls={classNames('hlrui-popconfirm', {
          [className]: className
        })}
        openClassName="hlrui-popconfirm-open"
        overlay={this.renderOverlay()}
        trigger={['click']}
        theme="twhite"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        { children }
      </Tooltip>
    );
  }
}

export default PopConfirm;
