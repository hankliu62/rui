import React, { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TimelineItem from './TimelineItem';

import './Timeline.less';

class Timeline extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    pending: PropTypes.any
  }

  render() {
    const { className, pending, theme, children, ...others } = this.props;

    const noEmptyNodes = Children.toArray(children).filter(item => !!item);
    const items = Children.map(noEmptyNodes, (el, index) => React.cloneElement(el, { theme: el.props.theme || theme || null, last: Children.count(noEmptyNodes) === (index + 1) }));

    return (
      <ul
        className={classNames('hlrui-timeline', {
          [className]: className,
          'hlrui-timeline-has-pending': !!pending
        })}
        {...others}
      >
        { items }
        {
          !!pending &&
            <TimelineItem pending theme={theme}>
              {typeof (pending) === 'boolean' ? null : pending}
            </TimelineItem>
        }
      </ul>
    );
  }
}

export default Timeline;
