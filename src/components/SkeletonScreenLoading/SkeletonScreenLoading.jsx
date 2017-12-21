import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './SkeletonScreenLoading.less';

class SkeletonScreenLoading extends PureComponent {
  static propTypes = {
    randomable: PropTypes.bool,
    hasHeader: PropTypes.bool,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    row: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }

  static defaultProps = {
    randomable: true,
    hasHeader: true,
    height: 40,
    row: 2
  }

  render() {
    const { height, row, hasHeader, randomable } = this.props;

    if (randomable) {
      const unit = typeof (height) === 'number' ? 'px' : (height.toString().match(/(px)|(r?em)$/) || ['px'])[0];
      const totalHeight = height.toString().replace(/(px)|(r?em)$/, '');
      const maskerHeight = totalHeight / ((row * 2) + 1);

      const maskerStyle = {
        height: maskerHeight + unit
      };

      if (hasHeader) {
        maskerStyle.marginLeft = height + unit;
      }

      const placeholderStyle = {
        height: maskerHeight + unit
      };

      const loadingItems = new Array((row * 2) + 1).fill(1).map((_, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className="hlrui-background-masker" style={maskerStyle} />
          );
        }

        const placeholderCount = Math.floor(Math.random() * 3);
        let left = hasHeader ? (totalHeight * 1.25) : 0;
        const placeholderItems = new Array(placeholderCount).fill(1).map((__, innerIndex) => {
          left += ((Math.random() * 20) + 120);
          const randomWidth = parseInt((Math.random() * 20) + 10, 10) + unit;
          const style = { width: randomWidth };
          if (placeholderCount === 1 || innerIndex !== placeholderCount - 1) {
            style.left = left + unit;
          } else {
            style.right = 0;
          }

          return (<div key={innerIndex} className="hlrui-background-placeholder-masker" style={style} />);
        });
        return (<div key={index} className="hlrui-background-placeholder" style={placeholderStyle}>{placeholderItems}</div>);
      });

      return (
        <div className="hlrui-skeleton-loading" style={{ height: totalHeight + unit }}>
          {loadingItems.map(item => item)}
          { hasHeader && <div className="hlrui-background-header-masker" style={{ left: totalHeight + unit, width: (totalHeight / 4) + unit }} /> }
        </div>
      );
    }

    return (
      <div className="hlrui-skeleton-loading hlrui-skeleton-loading-no-random" style={{ height }}>
        <div className="hlrui-background-masker header-top" style={{ left: height }} />
        <div className="hlrui-background-masker header-left" style={{ left: height, width: height / 4 }} />
        <div className="hlrui-background-masker header-right" style={{ left: height * 7.5 }} />
        <div className="hlrui-background-masker header-bottom" style={{ left: height }} />
        <div className="hlrui-background-masker subheader-left" style={{ left: height, width: height / 4 }} />
        <div className="hlrui-background-masker subheader-right" style={{ left: height * 5.75 }} />
        <div className="hlrui-background-masker subheader-bottom" style={{ left: height }} />
      </div>
    );
  }
}


export default SkeletonScreenLoading;
