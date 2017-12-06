import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.less';

class ButtonGroup extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'default', 'small'])
  }

  render() {
    const { className, size, children, ...others } = this.props;

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
      <div
        {...others}
        className={classNames('hlrui-btns-group', {
          [`hlrui-btn-group-size-${sizeName}`]: sizeName
        })}
        onClick={this.handleThrottleClick}
      >
        {children && children}
      </div>
    );
  }
}

export default ButtonGroup;
