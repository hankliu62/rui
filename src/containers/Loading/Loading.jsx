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
          <SkeletonScreenLoading height={this.state.loading} />

          <Icon type="spinner" className="spinning" size="3x" />
        </div>
      </div>
    );
  }
}

export default LoadingContainer;
