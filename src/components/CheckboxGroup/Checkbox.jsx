import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    type: 'default',
    onChange: () => {}
  }

  render() {
    const { className, type, disabled, checked, children, ...restProps } = this.props;

    return (
      <label
        className={classNames('hlrui-checkbox', `hlrui-checkbox-${type}`, {
          [className]: className, checked, disabled
        })}
        onClick={() => this.props.onChange(!checked)}
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
