import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Avatar } from '../Avatar';

import './List.less';

class Meta extends PureComponent {
  static type = 'ListMeta';

  static propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  }

  render() {
    const { className, avatar, title, description, ...others } = this.props;

    return (
      <div
        {...others}
        className={classNames('hlrui-list-meta', {
          'hlrui-list-meta-with-avatar': !!avatar,
          [className]: className
        })}
      >
        {
          avatar && (React.isValidElement(avatar) ?
            React.cloneElement(avatar, { className: classNames('hlrui-list-meta-avatar', { [avatar.className]: avatar.className }) }) :
            <Avatar src={avatar} shape="circle" className="hlrui-list-meta-avatar" />)
        }
        <div className="hlrui-list-meta-content">
          {title && <div className="hlrui-list-meta-content-title">{title}</div> }
          {description && <div className="hlrui-list-meta-content-description">{description}</div>}
        </div>
      </div>
    );
  }
}

export default Meta;
