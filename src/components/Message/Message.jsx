import React from 'react';
import ReactNotification from 'rc-notification';
import classNames from 'classnames';

import { Icon } from '../Icon';

import './Message.less';

let cacheMessageInstance;

const defaultConfig = {
  duration: 4.5,
  top: 24,
  getContainer: null
};

const getMessageInstance = (callback) => {
  if (cacheMessageInstance) {
    callback(cacheMessageInstance);
    return;
  }

  ReactNotification.newInstance({
    prefixCls: 'hlrui-message',
    style: { top: defaultConfig.top },
    getContainer: defaultConfig.getContainer
  }, (message) => {
    cacheMessageInstance = message;
    callback(message);
  });
};

class Message {
  static setConfig(config = {}) {
    for (const key in config) {
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        defaultConfig[key] = config[key];
      }
    }
  }

  static open(options = {}) {
    const duration = 'duration' in options ? options.duration : defaultConfig.duration;
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

      icon = (<Icon className={classNames('hlrui-message-notice-icon', [`hlrui-message-notice-icon-${options.type}`])} type={iconType} />);
    }

    getMessageInstance((message) => {
      message.notice({
        content: (
          <div className={classNames({ 'hlrui-message-notice-with-icon': icon })}>
            {icon}
            <div className="hlrui-message-notice-message">{options.description}</div>
          </div>
        ),
        duration,
        closable: false,
        onClose: options.onClose,
        key: options.key,
        style: options.style || {},
        className: classNames({ [options.className]: options.className, [`hlrui-message-notice-type-${options.type}`]: options.type })
      });
    });
  }

  static close(key) {
    for (const cacheKey in cacheMessageInstance) {
      if (Object.prototype.hasOwnProperty.call(cacheMessageInstance, cacheKey)) {
        cacheMessageInstance[cacheKey].removeNotice(key);
      }
    }
  }

  static destroyed() {
    for (const cacheKey in cacheMessageInstance) {
      if (Object.prototype.hasOwnProperty.call(cacheMessageInstance, cacheKey)) {
        cacheMessageInstance[cacheKey].destroy();
        delete (cacheMessageInstance[cacheKey]);
      }
    }
  }

  static success(options = {}) {
    Message.open({ ...options, type: 'success' });
  }

  static info(options = {}) {
    Message.open({ ...options, type: 'info' });
  }

  static warning(options = {}) {
    Message.open({ ...options, type: 'warning' });
  }

  static warn(options = {}) {
    Message.warning(options);
  }

  static error(options = {}) {
    Message.open({ ...options, type: 'error' });
  }
}

export default Message;

