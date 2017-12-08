import React, { Component } from 'react';

import { Tooltip } from '../../components/Tooltip';
import { Button } from '../../components/Button';

import './Tooltip.less';

class TooltipContainer extends Component {
  render() {
    const text = (<span>prompt text</span>);
    const buttonWidth = 70;

    return (
      <div className="common-main tooltip-main">
        <header className="main-page-header">
          <h1>Tooltip 文字提示</h1>
        </header>

        <div className="main-page-body">
          <div className="tooltips-row-group">
            <Tooltip title="prompt text">
              <span>Tooltip will show when mouse enter.</span>
            </Tooltip>
          </div>

          <div className="tooltips-row-group">
            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
              <Tooltip placement="topLeft" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>TL</Button>
              </Tooltip>
              <Tooltip placement="top" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Top</Button>
              </Tooltip>
              <Tooltip placement="topRight" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>TR</Button>
              </Tooltip>
            </div>

            <div style={{ width: buttonWidth, float: 'left' }}>
              <Tooltip placement="leftTop" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>LT</Button>
              </Tooltip>
              <Tooltip placement="left" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Left</Button>
              </Tooltip>
              <Tooltip placement="leftBottom" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>LB</Button>
              </Tooltip>
            </div>

            <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
              <Tooltip placement="rightTop" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>RT</Button>
              </Tooltip>
              <Tooltip placement="right" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Right</Button>
              </Tooltip>
              <Tooltip placement="rightBottom" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>RB</Button>
              </Tooltip>
            </div>

            <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
              <Tooltip placement="bottomLeft" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>BL</Button>
              </Tooltip>
              <Tooltip placement="bottom" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Bottom</Button>
              </Tooltip>
              <Tooltip placement="bottomRight" title={text}>
                <Button style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>BR</Button>
              </Tooltip>
            </div>
          </div>

          <div className="tooltips-row-group">
            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
              <Tooltip theme="primary" placement="topLeft" title={text}>
                <Button theme="primary" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>TL</Button>
              </Tooltip>
              <Tooltip theme="primary" placement="top" title={text}>
                <Button theme="primary" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Top</Button>
              </Tooltip>
              <Tooltip theme="primary" placement="topRight" title={text}>
                <Button theme="primary" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>TR</Button>
              </Tooltip>
            </div>

            <div style={{ width: buttonWidth, float: 'left' }}>
              <Tooltip theme="tred" placement="leftTop" title={text}>
                <Button theme="tred" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>LT</Button>
              </Tooltip>
              <Tooltip theme="tred" placement="left" title={text}>
                <Button theme="tred" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Left</Button>
              </Tooltip>
              <Tooltip theme="tred" placement="leftBottom" title={text}>
                <Button theme="tred" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>LB</Button>
              </Tooltip>
            </div>

            <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
              <Tooltip theme="tyellow" placement="rightTop" title={text}>
                <Button theme="tyellow" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>RT</Button>
              </Tooltip>
              <Tooltip theme="tyellow" placement="right" title={text}>
                <Button theme="tyellow" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Right</Button>
              </Tooltip>
              <Tooltip theme="tyellow" placement="rightBottom" title={text}>
                <Button theme="tyellow" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>RB</Button>
              </Tooltip>
            </div>

            <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
              <Tooltip theme="tgreen" placement="bottomLeft" title={text}>
                <Button theme="tgreen" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>BL</Button>
              </Tooltip>
              <Tooltip theme="tgreen" placement="bottom" title={text}>
                <Button theme="tgreen" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>Bottom</Button>
              </Tooltip>
              <Tooltip theme="tgreen" placement="bottomRight" title={text}>
                <Button theme="tgreen" style={{ width: buttonWidth, padding: '7px', margin: '0 8px 8px 0' }}>BR</Button>
              </Tooltip>
            </div>
          </div>

          <div className="tooltips-row-group">
            <Tooltip placement="topLeft" title="Prompt Text">
              <Button>Align edge / 边缘对齐</Button>
            </Tooltip>
            <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
              <Button>Arrow points to center / 箭头指向中心</Button>
            </Tooltip>
          </div>

          <div className="tooltips-row-group">
            <Tooltip placement="topLeft" title="Prompt Text" trigger={['click']}>
              <Button>click button</Button>
            </Tooltip>

            <Tooltip placement="topLeft" title="Prompt Text" trigger={['focus']}>
              <Button>focus button</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}

export default TooltipContainer;
