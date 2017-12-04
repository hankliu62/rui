import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './SkeletonScreenLoading.less';

class SkeletonScreenLoading extends PureComponent {
  static propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }

  static defaultProps = {
    height: 40
  }

  render() {
    const { height } = this.props;

    return (
      <div className="hlrui-skeleton-loading" style={{ height }}>
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
