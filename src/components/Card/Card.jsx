import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Card.less';

class Card extends PureComponent {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    extra: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    borderable: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    borderable: true
  }

  render() {
    const { className, title, extra, borderable, children, ...others } = this.props;

    return (
      <div
        {...others}
        className={classNames('hlrui-card', {
          [className]: className,
          'hlrui-card-border': borderable
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
        <div className="hlrui-card-body">
          {children}
        </div>
      </div>
    );
  }
}

export default Card;
