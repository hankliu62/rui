import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Checkbox.less';

class CheckboxGroup extends Component {
  static propTypes = {
    block: PropTypes.bool,
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.node,
      value: PropTypes.any,
      disabled: PropTypes.bool,
      render: PropTypes.func
    })).isRequired,
    value: PropTypes.arrayOf(PropTypes.any),
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    value: [],
    onChange: () => {}
  }

  handleCheckItem = index => (checked) => {
    const { options, value = [] } = this.props;
    const option = options[index];

    if (option) {
      let nextValue = [...value];
      if (checked) {
        if (!value.includes(option.value)) {
          nextValue.push(option.value);
        }
      } else {
        nextValue = nextValue.filter(item => item !== option.value);
      }

      this.props.onChange(nextValue);
    }
  }

  render() {
    const { className, block, disabled, options, value = [] } = this.props;

    if (!options || !options.length) {
      return null;
    }

    return (
      <div className={classNames('hlrui-checkbox-group', { [className]: !!className, 'hlrui-checkbox-group-block': block })}>
        {
          options.map((option, index) => (
            <Checkbox
              key={option.value}
              disabled={disabled || option.disabled}
              checked={value.includes(option.value)}
              onChange={this.handleCheckItem(index)}
            >
              { option.render ? option.render(option, value) : option.text }
            </Checkbox>
          ))
        }
      </div>
    );
  }
}

export default CheckboxGroup;
