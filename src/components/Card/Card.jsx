import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Card.less';

class Card extends PureComponent {
  static propTypes = {
    cover: PropTypes.node,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    extra: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    actions: PropTypes.arrayOf(PropTypes.node),
    borderable: PropTypes.bool,
    hoverable: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    borderable: true
  }

  render() {
    const { cover, className, title, extra, actions = [], borderable, hoverable, children, ...others } = this.props;

    return (
      <div
        {...others}
        className={classNames('hlrui-card', {
          [className]: className,
          'hlrui-card-border': borderable,
          'hlrui-card-hover': hoverable,
          'hlrui-card-with-cover': !!cover
        })}
      >
        {
          (title || extra) &&
            <div className="hlrui-card-header">
              <div className="hlrui-card-header-wrap">
                { title && <div className="hlrui-card-header-title">{title}</div> }
                { extra && <div className="hlrui-card-header-extra">{extra}</div> }
              </div>
            </div>
        }
        {
          cover && <div className="hlrui-card-cover">{cover}</div>
        }
        <div className="hlrui-card-body">
          {children}
        </div>
        {
          !!(actions && actions.length) &&
            <ul className="hlrui-card-actions">
              {actions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
        }
      </div>
    );
  }
}

export default Card;
