import React, { Component } from 'react';

import { Card, Grid, Meta } from '../../components/Card';
import { Link } from '../../components/Link';

class CardContainer extends Component {
  render() {
    return (
      <div className="common-main card-main">
        <header className="main-page-header">
          <h1>Card 卡片</h1>
        </header>

        <div className="main-page-body">
          <div className="cards-row-group block-row-group">
            <Card title="骤然临之而不惊，无故加之而不怒。" extra={<Link>More</Link>} style={{ width: 500 }}>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
            </Card>
          </div>

          <div className="cards-row-group block-row-group">
            <Card>
              <Grid style={{ width: '25%', textAlign: 'center' }}>骤然临之而不惊</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>骤然临之而不惊</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>骤然临之而不惊</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>骤然临之而不惊</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>骤然临之而不惊</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>骤然临之而不惊</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>骤然临之而不惊</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>骤然临之而不惊</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>骤然临之而不惊</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>骤然临之而不惊</Grid>
            </Card>
          </div>

          <div className="cards-row-group block-row-group">
            <Card>
              <Meta avatar={require('./images/WechatIMG16.jpeg')} title="骤然临之而不惊，无故加之而不怒。" description="遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。" />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default CardContainer;
