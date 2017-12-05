import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RadioGroup from './RadioGroup';

import './Radio.less';

class Radio extends Component {
  static Group = RadioGroup;

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    onClick: () => {}
  }

  render() {
    const { className, disabled, checked, children, ...restProps } = this.props;

    return (
      <label
        className={classNames('hlrui-radio', {
          [className]: className, checked, disabled
        })}
        onClick={this.props.onClick}
        {...restProps}
      >
        <i className="hlrui-radio-icon" />
        {
          children && <span className="hlrui-radio-content" >{ children }</span>
        }
      </label>
    );
  }
}

export default Radio;
