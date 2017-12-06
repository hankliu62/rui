import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Badge.less';

const CONSTANTS_STATUSES = ['default', 'success', 'error', 'processing', 'warning'];

class Badge extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    overflowCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dot: PropTypes.bool,
    showZero: PropTypes.bool,
    status: PropTypes.oneOf(CONSTANTS_STATUSES),
    statusText: PropTypes.string
  }

  static defaultProps = {
    overflowCount: 99,
    dot: false,
    showZero: false
  }

  render() {
    const { className, count, overflowCount, dot, showZero, status, statusText, children, ...others } = this.props;

    let badgeChildren;
    if (dot) {
      badgeChildren = (<span {...others} className="hlrui-badge-dot" />);
    } else if (+count > 0) {
      if (+overflowCount < +count) {
        badgeChildren = (<span {...others} className="hlrui-badge-count">{overflowCount}+</span>);
      } else {
        badgeChildren = (<span {...others} className="hlrui-badge-count">{count}</span>);
      }
    } else if ((count === '0' || count === 0) && showZero) {
      badgeChildren = (<span {...others} className="hlrui-badge-count">0</span>);
    } else if (CONSTANTS_STATUSES.includes(status)) {
      badgeChildren = (<span {...others} className={classNames('hlrui-badge-dot', { [`hlrui-badge-dot-status-${status}`]: status })} />);
    }

    return (
      <div
        className={classNames('hlrui-badge', {
          [className]: className,
          'hlrui-badge-with-children': children
        })}
      >
        { children && children }
        { badgeChildren }
        {
          status && <span className="hlrui-badge-status-content">{statusText}</span>
        }
      </div>
    );
  }
}

export default Badge;
