import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  render() {
    const { content } = this.props;

    return (
      <div className="homepage-main">{ content || 'Hello World!' }</div>
    );
  }
}

export default Homepage;
