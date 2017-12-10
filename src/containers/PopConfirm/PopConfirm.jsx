import React, { Component } from 'react';

import { PopConfirm } from '../../components/PopConfirm';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';

import './PopConfirm.less';

class PopConfirmContainer extends Component {
  handleCancel = () => {
    console.log('click cancel');
  }

  handleConfirm = () => {
    console.log('click confirm');
  }

  render() {
    const text = (<span>是否确认删除该项任务?</span>);
    const buttonWidth = 70;

    return (
      <div className="common-main popconfirm-main">
        <header className="main-page-header">
          <h1>PopConfirm 气泡确认框</h1>
        </header>

        <div className="main-page-body">
          <div className="popconfirms-row-group">
            <PopConfirm placement="top" title="是否确认删除该项任务?" onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
              <Link>Delete</Link>
            </PopConfirm>
          </div>

          <div className="popconfirms-row-group">
            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
              <PopConfirm placement="topLeft" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>TL</Button>
              </PopConfirm>
              <PopConfirm placement="top" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Top</Button>
              </PopConfirm>
              <PopConfirm placement="topRight" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>TR</Button>
              </PopConfirm>
            </div>

            <div style={{ width: buttonWidth, float: 'left' }}>
              <PopConfirm placement="leftTop" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>LT</Button>
              </PopConfirm>
              <PopConfirm placement="left" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Left</Button>
              </PopConfirm>
              <PopConfirm placement="leftBottom" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>LB</Button>
              </PopConfirm>
            </div>

            <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
              <PopConfirm placement="rightTop" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>RT</Button>
              </PopConfirm>
              <PopConfirm placement="right" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Right</Button>
              </PopConfirm>
              <PopConfirm placement="rightBottom" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>RB</Button>
              </PopConfirm>
            </div>

            <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
              <PopConfirm placement="bottomLeft" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>BL</Button>
              </PopConfirm>
              <PopConfirm placement="bottom" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Bottom</Button>
              </PopConfirm>
              <PopConfirm placement="bottomRight" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>BR</Button>
              </PopConfirm>
            </div>
          </div>

          <div className="popconfirms-row-group">
            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
              <PopConfirm theme="primary" placement="topLeft" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="primary" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>TL</Button>
              </PopConfirm>
              <PopConfirm theme="primary" placement="top" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="primary" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Top</Button>
              </PopConfirm>
              <PopConfirm theme="primary" placement="topRight" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="primary" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>TR</Button>
              </PopConfirm>
            </div>

            <div style={{ width: buttonWidth, float: 'left' }}>
              <PopConfirm theme="tred" placement="leftTop" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="tred" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>LT</Button>
              </PopConfirm>
              <PopConfirm theme="tred" placement="left" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="tred" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Left</Button>
              </PopConfirm>
              <PopConfirm theme="tred" placement="leftBottom" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="tred" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>LB</Button>
              </PopConfirm>
            </div>

            <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
              <PopConfirm theme="tyellow" placement="rightTop" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="tyellow" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>RT</Button>
              </PopConfirm>
              <PopConfirm theme="tyellow" placement="right" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="tyellow" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Right</Button>
              </PopConfirm>
              <PopConfirm theme="tyellow" placement="rightBottom" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="tyellow" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>RB</Button>
              </PopConfirm>
            </div>

            <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
              <PopConfirm theme="tgreen" placement="bottomLeft" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="tgreen" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>BL</Button>
              </PopConfirm>
              <PopConfirm theme="tgreen" placement="bottom" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="tgreen" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Bottom</Button>
              </PopConfirm>
              <PopConfirm theme="tgreen" placement="bottomRight" title={text} onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
                <Button theme="tgreen" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>BR</Button>
              </PopConfirm>
            </div>
          </div>

          <div className="popconfirms-row-group">
            <PopConfirm placement="topLeft" title="是否确认删除该项任务?" onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
              <Button>Align edge / 边缘对齐</Button>
            </PopConfirm>
            <PopConfirm placement="topLeft" title="是否确认删除该项任务?" arrowPointAtCenter onCancel={this.handleCancel} onConfirm={this.handleConfirm}>
              <Button>Arrow points to center / 箭头指向中心</Button>
            </PopConfirm>
          </div>
        </div>
      </div>
    );
  }
}

export default PopConfirmContainer;
