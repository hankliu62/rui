import React, { Component } from 'react';

import { SkeletonScreenLoading } from '../../components/SkeletonScreenLoading';
import { Icon } from '../../components/Icon';

class LoadingContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: 80
    };
  }

  render() {
    return (
      <div className="common-main loading-main">
        <header className="main-page-header">
          <h1>Loading 加载中</h1>
        </header>

        <div className="main-page-body">

          <div className="loadings-row-group" style={{ width: 620 }}>
            <SkeletonScreenLoading height={this.state.loading} />
          </div>

          <div className="loadings-row-group" style={{ width: 620 }}>
            <SkeletonScreenLoading height="40" randomable={false} />
          </div>

          <div className="loadings-row-group" style={{ width: 620 }}>
            <SkeletonScreenLoading height="100" row={3} />
          </div>

          <div className="loadings-row-group">
            <Icon type="spinner" className="spinning" size="3x" />
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingContainer;
