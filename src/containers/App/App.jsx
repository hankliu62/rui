import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {
    children: null
  }

  render() {
    const { children } = this.props;

    return (
      <div className="app-main">
        { children && children }
      </div>
    );
  }
}

export default App;
