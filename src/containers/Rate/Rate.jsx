import React, { Component } from 'react';

import { Rate } from '../../components/Rate';

class RateContainer extends Component {
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
          <div className="rates-row-group">
            <Rate value={this.state.rate} onChange={this.handleChangeRate('rate')} />
          </div>

          <div className="rates-row-group">
            <Rate value={this.state.halfRate} onChange={this.handleChangeRate('halfRate')} allowHalf />
          </div>
        </div>
      </div>
    );
  }
}

export default RateContainer;
