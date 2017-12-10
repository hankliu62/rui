import React, { Component } from 'react';

import { Divider } from '../../components/Divider';

class DividerContainer extends Component {
  render() {
    return (
      <div className="common-main divider-main">
        <header className="main-page-header">
          <h1>Divider 分割线</h1>
        </header>

        <div className="main-page-body">
          123213
          <Divider />
        </div>
      </div>
    );
  }
}

export default DividerContainer;
