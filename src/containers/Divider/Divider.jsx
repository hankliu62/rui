import React, { Component } from 'react';

import { Divider } from '../../components/Divider';

class DividerContainer extends Component {
  render() {
    return (
      <div className="common-main divider-main">
        <header className="main-page-header">
          <h1>Divider 分割线</h1>
        </header>

        <div className="main-page-body" style={{ fontSize: 14 }}>
          <div style={{ marginBottom: 15 }}>
            123213
            <Divider />
            123213
          </div>

          <div style={{ marginBottom: 15 }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
            <Divider />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
            <Divider>With Text</Divider>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
            <Divider dashed />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          </div>

          <div style={{ marginBottom: 15 }}>
            Text
            <Divider direction="vertical" />
            <a href="#">Link</a>
            <Divider direction="vertical" />
            <a href="#">Link</a>
          </div>
        </div>
      </div>
    );
  }
}

export default DividerContainer;
