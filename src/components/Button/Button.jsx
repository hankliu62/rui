import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { throttle } from 'lodash';

import { Icon } from '../Icon';
import ButtonGroup from './ButtonGroup';
import GetSizeName from '../../decorators/GetSizeName';

import './Button.less';

@GetSizeName
class Button extends PureComponent {
  static ButtonGroup = ButtonGroup;

  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    shape: PropTypes.oneOf(['circle', 'default']),
    throttle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ghost: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    htmlType: 'button',
    size: 'default',
    theme: 'default',
    shape: 'default',
    throttle: 0,
    ghost: false,
    disabled: false,
    onClick: () => {}
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: props.loading,
      clicked: false
    };

    this.handleThrottleClick = throttle(this.handleClick, +props.throttle);
    this.getSizeName = this.getSizeName.bind(this);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  handleClick = (e) => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.setState({ clicked: true });
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }

    this.timeout = window.setTimeout(() => this.setState({ clicked: false }), 500);

    this.props.onClick(e);
  }

  render() {
    const { className, htmlType, size, theme, icon, shape, onClick, children, disabled, ghost, ...others } = this.props;
    const { checked } = this.state;

    const ElemenetName = others.href ? 'a' : 'button';
    const sizeName = this.getSizeName();

    if (!others.href) {
      others.type = htmlType;
    }

    let iconNode = null;
    if (icon) {
      if (typeof icon === 'string') {
        iconNode = <Icon type={icon} />;
      } else {
        iconNode = icon;
      }
    }

    delete (others.throttle);
    delete (others.size);

    return (
      <ElemenetName
        {...others}
        className={classNames('hlrui-btn', `hlrui-btn-${theme}`, {
          [`hlrui-btn-size-${sizeName}`]: sizeName,
          [`hlrui-btn-shape-${shape}`]: shape !== 'default',
          'hlrui-btn-status-checked': checked,
          'hlrui-btn-background-ghost': ghost,
          'hlrui-btn-only-icon': iconNode && !children,
          [className]: className,
          disabled
        })}
        onClick={this.handleThrottleClick}
      >
        {iconNode}{children && <span>{children}</span>}
      </ElemenetName>
    );
  }
}

export default Button;
