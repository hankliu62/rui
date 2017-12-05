import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Switch.less';

class Switch extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    checkedChildren: PropTypes.any,
    unCheckedChildren: PropTypes.any,
    size: PropTypes.oneOf(['large', 'default', 'small']),
    onChange: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    onChange: () => {}
  }

  constructor(props) {
    super(props);

    this.state = {
      checked: !!props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ checked: !!nextProps.value });
    }
  }

  handleTriggleSwitch = () => {
    const { disabled } = this.props;
    const { checked } = this.state;

    if (disabled) {
      return;
    }

    this.setState({ checked: !checked });
    this.props.onChange(!checked);
  }

  render() {
    const { className, value, disabled, theme, size, onChange, checkedChildren, unCheckedChildren, ...others } = this.props;
    const { checked } = this.state;

    let sizeName = '';
    switch (size) {
      case 'large': {
        sizeName = 'lg';
        break;
      }
      case 'small': {
        sizeName = 'sm';
        break;
      }
    }

    return (
      <span
        {...others}
        className={classNames('hlrui-switch', {
          [className]: className,
          [`hlrui-switch-theme-${theme}`]: theme,
          [`hlrui-switch-size-${sizeName}`]: sizeName,
          'hlrui-switch-checked': checked,
          disabled
        })}
        onClick={this.handleTriggleSwitch}
      >
        <span className="hlrui-switch-content">
          { checked ? checkedChildren : unCheckedChildren }
        </span>
      </span>
    );
  }
}

export default Switch;
