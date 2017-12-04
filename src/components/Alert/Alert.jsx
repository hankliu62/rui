import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from '../Icon';

import './Alert.less';

class Alert extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
    message: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    banner: PropTypes.bool,
    showIcon: PropTypes.bool,
    closable: PropTypes.bool,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    type: 'info',
    banner: false,
    closable: false,
    showIcon: false
  }

  render() {
    const { type, message, description, banner, showIcon, closable, onClose } = this.props;

    let iconType = 'info-sign';
    if (showIcon) {
      switch (type) {
        case 'success': {
          iconType = 'ok-sign';
          break;
        }
        case 'warning': {
          iconType = 'exclamation-sign';
          break;
        }
        case 'error': {
          iconType = 'remove-sign';
          break;
        }
      }
    }

    return (
      <div
        className={classNames('hlrui-alert', `hlrui-alert-${type}`, {
          'hlrui-alert-banner': banner,
          'hlrui-alert-width-description': description,
          'hlrui-alert-width-icon': showIcon
        })}
      >
        { showIcon && <Icon type={iconType} /> }
        <div className="hlrui-alert-message">{ message }</div>
        { description && <div className="hlrui-alert-description">{ description }</div> }
        { closable && <span className="hlrui-alert-close" onClick={onClose}>&times;</span> }
      </div>
    );
  }
}

export default Alert;
