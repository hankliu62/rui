import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MenuItem extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    key: PropTypes.string,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    onSelect: () => {}
  }

  handleItemClick = () => {
    const { key, disabled } = this.props;

    if (disabled) {
      return;
    }

    this.props.onSelect(key);
  }

  render() {
    const { className, disabled, children, key } = this.props;

    return (
      <div
        key={key}
        className={classNames('hlrui-menu-item', {
          [className]: className, disabled
        })}
        onClick={this.handleItemClick}
      >
        { children && children }
      </div>
    );
  }
}

export default MenuItem;
