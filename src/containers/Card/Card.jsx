import React, { Component } from 'react';

import { Card, Grid, Meta } from '../../components/Card';
import { Link } from '../../components/Link';
import { Icon } from '../../components/Icon';

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
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
            </Card>
          </div>

          <div className="cards-row-group block-row-group" style={{ background: '#ECECEC', padding: '30px' }}>
            <Card title="骤然临之而不惊，无故加之而不怒。" borderable={false} style={{ width: 500 }}>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
            </Card>
          </div>

          <div className="cards-row-group block-row-group">
            <Card style={{ width: 500 }}>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
              <p>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</p>
            </Card>
          </div>

          <div className="cards-row-group block-row-group">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="http://oi8brjpnx.bkt.clouddn.com/5919bc41541a636bc98d0351" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>


          <div className="cards-row-group block-row-group">
            <Card title="骤然临之而不惊">
              <Grid style={{ width: '25%', textAlign: 'center' }}>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</Grid>
              <Grid style={{ width: '25%', textAlign: 'center' }}>遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。</Grid>
            </Card>
          </div>

          <div className="cards-row-group block-row-group">
            <Card title="骤然临之而不惊" style={{ width: 500 }} loading hasHeader={false} />
          </div>

          <div className="cards-row-group block-row-group">
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src="http://oi8brjpnx.bkt.clouddn.com/5927bc285919cb0d5e31c4de" />}
              actions={[<Icon type="cog" />, <Icon type="edit" />, <Icon type="repeat" />]}
            >
              <Meta avatar={require('./images/WechatIMG16.jpeg')} title="骤然临之而不惊，无故加之而不怒。" description="遇到突发的情形毫不惊慌, 无缘无故侵犯他也不动怒。" />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default CardContainer;
