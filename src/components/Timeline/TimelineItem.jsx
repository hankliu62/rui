import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Timeline.less';

class TimelineItem extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    pending: PropTypes.bool,
    last: PropTypes.bool,
    dot: PropTypes.node,
  }

  render() {
    const { className, theme, pending, last, dot, children, ...others } = this.props;
    return (
      <li
        className={classNames('hlrui-timeline-item', {
          [className]: className,
          'hlrui-timeline-item-pending': pending,
          'hlrui-timeline-item-last': last,
          [`hlrui-timeline-item-theme-${theme}`]: theme
        })}
        {...others}
      >
        <div className="hlrui-timeline-item-line" />
        <div className={classNames('hlrui-timeline-item-dot', { 'hlrui-timeline-item-dot-custom': !!dot })}>
          {dot}
        </div>
        <div className="hlrui-timeline-item-content">
          {children}
        </div>
      </li>
    );
  }
}

export default TimelineItem;
