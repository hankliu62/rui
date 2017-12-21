import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { SkeletonScreenLoading } from '../SkeletonScreenLoading';

import './Card.less';

class Card extends PureComponent {
  static propTypes = {
    cover: PropTypes.node,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    extra: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    actions: PropTypes.arrayOf(PropTypes.node),
    borderable: PropTypes.bool,
    hoverable: PropTypes.bool,
    loading: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    borderable: true
  }

  renderLoading = () => {
    return (<SkeletonScreenLoading height="200" row={6} hasHeader={false} />);
  }

  render() {
    const { cover, className, title, extra, actions = [], borderable, hoverable, loading, children, ...others } = this.props;

    return (
      <div
        {...others}
        className={classNames('hlrui-card', {
          [className]: className,
          'hlrui-card-border': borderable,
          'hlrui-card-hover': hoverable,
          'hlrui-card-with-cover': !!cover,
          'hlrui-card-loading': loading
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
          {loading ? this.renderLoading() : children}
        </div>
        {
          !!(actions && actions.length) &&
            <ul className="hlrui-card-actions">
              {actions.map((action, index) => (
                <li key={index} className="hlrui-card-actions-item" style={{ width: `${100 / actions.length}%` }}>
                  <span className="hlrui-card-actions-item-wrap">{action}</span>
                </li>
              ))}
            </ul>
        }
      </div>
    );
  }
}

export default Card;
