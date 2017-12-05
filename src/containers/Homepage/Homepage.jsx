import React, { Component } from 'react';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 1
    };
  }

  render() {
    return (
      <div className="common-main homepage-main">
        <header className="main-page-header">
          <h1>首页</h1>
        </header>

        <div className="main-page-body">
          Homepage
        </div>
      </div>
    );
  }
}

export default Homepage;
