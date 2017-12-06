import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import GetSizeName from '../../decorators/GetSizeName';

import './Switch.less';

@GetSizeName
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

    this.getSizeName = this.getSizeName.bind(this);
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
    const { className, value, disabled, theme, onChange, checkedChildren, unCheckedChildren, ...others } = this.props;
    const { checked } = this.state;

    const sizeName = this.getSizeName();
    delete (others.size);

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
