import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from '../Icon';

import './Rate.less';

class Rate extends Component {
  static propTypes = {
    allowHalf: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    onHoverChange: PropTypes.func
  }

  static defaultProps = {
    allowHalf: false,
    disabled: false,
    count: 5,
    defaultValue: 0,
    onChange: () => {},
    onHoverChange: () => {}
  }

  constructor(props) {
    super(props);

    this.state = {
      stars: new Array(props.count).fill(''),
      hoverValue: 0
    };
  }

  handleMouseOverStar = index => (e) => {
    if (e) {
      e.stopPropagation();
    }

    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.setState({ hoverValue: index + 1 });
    this.props.onHoverChange(index + 1);
  }

  handleMouseOutStar = (e) => {
    if (e) {
      e.stopPropagation();
    }

    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.setState({ hoverValue: 0 });
    this.props.onHoverChange(0);
  }

  handleSelectStar = index => (e) => {
    if (e) {
      e.stopPropagation();
    }

    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.props.onChange(index + 1);
  }

  renderStar = (index) => {
    const { allowHalf, value, defaultValue } = this.props;
    const { hoverValue } = this.state;

    const checkedValue = value || defaultValue;

    if (!allowHalf) {
      return (
        <Icon
          className={classNames('hlrui-rate-star', {
            hover: hoverValue > index, checked: hoverValue <= 0 && checkedValue > index
          })}
          type="star"
          onClick={this.handleSelectStar(index)}
          onMouseOver={this.handleMouseOverStar(index)}
          onMouseOut={this.handleMouseOutStar}
        />
      );
    }

    return [
      <Icon
        className={classNames('hlrui-rate-star', 'hlrui-rate-star-first', {
          hover: Math.ceil(hoverValue) > index, checked: hoverValue <= 0 && Math.ceil(checkedValue) > index
        })}
        type="star"
        onClick={this.handleSelectStar(index - 0.5)}
        onMouseOver={this.handleMouseOverStar(index - 0.5)}
        onMouseOut={this.handleMouseOutStar}
      />,
      <Icon
        className={classNames('hlrui-rate-star', 'hlrui-rate-star-secord', {
          hover: Math.floor(hoverValue) > index, checked: hoverValue <= 0 && Math.floor(checkedValue) > index
        })}
        type="star"
        onClick={this.handleSelectStar(index)}
        onMouseOver={this.handleMouseOverStar(index)}
        onMouseOut={this.handleMouseOutStar}
      />
    ];
  }

  render() {
    const { className, disabled } = this.props;
    const { stars } = this.state;

    return (
      <div className={classNames('hlrui-rate', { [className]: className, disabled })}>
        {
          stars.map((_, index) => {
            return (
              <div
                key={index}
                className="hlrui-rate-star-wrap"
                onMouseOver={this.handleMouseOverStar(index)}
                onMouseOut={this.handleMouseOutStar}
              >
                {this.renderStar(index)}
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Rate;
