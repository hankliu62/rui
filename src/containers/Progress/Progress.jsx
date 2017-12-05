import React, { Component } from 'react';

import { Progress } from '../../components/Progress';

class ProgressContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 85
    };
  }

  render() {
    return (
      <div className="common-main progress-main">
        <header className="main-page-header">
          <h1>Progress 进度条</h1>
        </header>

        <div className="main-page-body">
          <Progress className="hlrui-progress-tred" percent={this.state.progress} />
        </div>
      </div>
    );
  }
}

export default ProgressContainer;
