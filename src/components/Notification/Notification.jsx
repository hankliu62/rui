import React from 'react';
import ReactNotification from 'rc-notification';
import classNames from 'classnames';

import { Icon } from '../Icon';

import './Notification.less';

const cacheNotificationInstance = {};

const defaultConfig = {
  duration: 4.5,
  top: 24,
  bottom: 24,
  placement: 'topRight',
  getContainer: null
};

const getPlacementStyle = (placement) => {
  const defaultStyle = {
    right: 0,
    top: defaultConfig.top,
    bottom: 'auto'
  };
  switch (placement) {
    case 'topLeft': {
      return {
        left: 0,
        top: defaultConfig.top,
        bottom: 'auto'
      };
    }
    case 'topRight': {
      return defaultStyle;
    }
    case 'bottomLeft': {
      return {
        left: 0,
        top: 'auto',
        bottom: defaultConfig.bottom,
      };
    }
    case 'bottomRight': {
      return {
        right: 0,
        top: 'auto',
        bottom: defaultConfig.bottom,
      };
    }
    default: {
      return defaultStyle;
    }
  }
};

const getNotificationInstance = (placement = 'topRight', callback) => {
  if (cacheNotificationInstance[placement]) {
    callback(cacheNotificationInstance[placement]);
    return;
  }

  ReactNotification.newInstance({
    prefixCls: 'hlrui-notification',
    className: `hlrui-notification-${placement}`,
    style: getPlacementStyle(placement),
    getContainer: defaultConfig.getContainer
  }, (notification) => {
    cacheNotificationInstance[placement] = notification;
    callback(notification);
  });
};

class Notification {
  static setConfig(config = {}) {
    for (const key in config) {
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        defaultConfig[key] = config[key];
      }
    }
  }

  static open(options = {}) {
    const duration = 'duration' in options ? options.duration : defaultConfig.duration;
    const placement = options.placement || defaultConfig.placement;
    let icon;

    if (options.icon) {
      icon = (<span className="hlrui-notification-notice-icon">{options.icon}</span>);
    } else if (options.type) {
      let iconType = 'info-sign';
      switch (options.type) {
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

      icon = (<Icon className={classNames('hlrui-notification-notice-icon', [`hlrui-notification-notice-icon-${options.type}`])} type={iconType} />);
    }

    getNotificationInstance(placement, (notification) => {
      notification.notice({
        content: (
          <div className={classNames({ 'hlrui-notification-notice-with-icon': icon })}>
            {icon}
            <div className="hlrui-notification-notice-message">{options.message}</div>
            <div className="hlrui-notification-notice-description">{options.description}</div>
            {options.btn ? <span className="hlrui-notification-notice-btn">{options.btn}</span> : null}
          </div>
        ),
        duration,
        closable: true,
        onClose: options.onClose,
        key: options.key,
        style: options.style || {},
        className: classNames({ [options.className]: options.className, [`hlrui-notification-notice-type-${options.type}`]: options.type })
      });
    });
  }

  static close(key) {
    for (const cacheKey in cacheNotificationInstance) {
      if (Object.prototype.hasOwnProperty.call(cacheNotificationInstance, cacheKey)) {
        cacheNotificationInstance[cacheKey].removeNotice(key);
      }
    }
  }

  static destroyed() {
    for (const cacheKey in cacheNotificationInstance) {
      if (Object.prototype.hasOwnProperty.call(cacheNotificationInstance, cacheKey)) {
        cacheNotificationInstance[cacheKey].destroy();
        delete (cacheNotificationInstance[cacheKey]);
      }
    }
  }

  static success(options = {}) {
    Notification.open({ ...options, type: 'success' });
  }

  static info(options = {}) {
    Notification.open({ ...options, type: 'info' });
  }

  static warning(options = {}) {
    Notification.open({ ...options, type: 'warning' });
  }

  static warn(options = {}) {
    Notification.warning(options);
  }

  static error(options = {}) {
    Notification.open({ ...options, type: 'error' });
  }
}

export default Notification;

