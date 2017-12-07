import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Checkbox.less';

class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    type: 'default',
    onChange: () => {}
  }

  render() {
    const { className, type, disabled, value, children, ...restProps } = this.props;

    return (
      <label
        className={classNames('hlrui-checkbox', `hlrui-checkbox-${type}`, {
          [className]: className, checked: value, disabled
        })}
        onClick={() => this.props.onChange(!value)}
        {...restProps}
      >
        <i className="hlrui-checkbox-icon" />
        {
          children && <span className="hlrui-checkbox-content" >{ children }</span>
        }
      </label>
    );
  }
}

export default Checkbox;
