import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Avatar } from '../Avatar';

import './Card.less';

class Meta extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  }

  render() {
    const { className, avatar, title, description, ...others } = this.props;

    return (
      <div
        {...others}
        className={classNames('hlrui-card-meta', {
          'hlrui-card-meta-with-avatar': !!avatar,
          [className]: className
        })}
      >
        {avatar && <Avatar src={avatar} shape="circle" className="hlrui-card-meta-avatar" />}
        <div className="hlrui-card-meta-content">
          {title && <div className="hlrui-card-meta-content-title">{title}</div> }
          {description && <div className="hlrui-card-meta-content-description">{description}</div>}
        </div>
      </div>
    );
  }
}

export default Meta;
