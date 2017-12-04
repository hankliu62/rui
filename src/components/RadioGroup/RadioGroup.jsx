import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Radio from './Radio';

import './RadioGroup.less';

class RadioGroup extends Component {
  static Radio = Radio;

  static propTypes = {
    block: PropTypes.bool,
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.node,
      value: PropTypes.any,
      disabled: PropTypes.bool,
      render: PropTypes.func
    })).isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    onChange: () => {}
  }

  handleCheckItem = (val) => {
    if (this.props.value === val) {
      return;
    }

    this.props.onChange(val);
  }

  render() {
    const { className, block, disabled, options, value } = this.props;

    if (!options || !options.length) {
      return null;
    }

    return (
      <div className={classNames('hlrui-radio-group', { [className]: !!className, 'hlrui-radio-group-block': block })}>
        {
          options.map(option => (
            <Radio
              key={option.value}
              onClick={() => this.handleCheckItem(option.value)}
              checked={option.value === value}
              disabled={disabled || option.disabled}
            >
              { option.render ? option.render(option, value) : option.text }
            </Radio>
          ))
        }
      </div>
    );
  }
}

export default RadioGroup;
