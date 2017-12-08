import React, { Component } from 'react';

import { Card } from '../../components/Card';

class CardContainer extends Component {
  render() {
    return (
      <div className="common-main card-main">
        <header className="main-page-header">
          <h1>Card 卡片</h1>
        </header>

        <div className="main-page-body">
          <div className="cards-row-group">
            <Card>Card</Card>
          </div>
        </div>
      </div>
    );
  }
}

export default CardContainer;
