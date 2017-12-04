import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Rate } from '../../components/Rate';

class RateContainer extends Component {
  static propTypes = {
    content: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      rate: 0,
      halfRate: 1.5
    };
  }

  handleChangeRate = key => (rate) => {
    this.setState({ [key]: rate });
  }

  render() {
    return (
      <div className="common-main rate-main">
        <header className="main-page-header">
          <h1>Rate 评分</h1>
        </header>

        <div className="main-page-body">
          <Rate value={this.state.rate} onChange={this.handleChangeRate('rate')} />

          <Rate value={this.state.halfRate} onChange={this.handleChangeRate('halfRate')} allowHalf />
        </div>
      </div>
    );
  }
}

export default RateContainer;
