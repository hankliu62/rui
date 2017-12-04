import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Alert } from '../../components/Alert';

class Homepage extends Component {
  static propTypes = {
    content: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      show: 1
    };
  }

  handleClose = () => {

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
