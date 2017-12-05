import React, { Component } from 'react';

import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';

import './Button.less';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 1
    };
  }

  handleClick = (e) => {
    console.log('click', e);
  }

  render() {
    return (
      <div className="common-main button-main">
        <header className="main-page-header">
          <h1>Button 按钮</h1>
        </header>

        <div className="main-page-body">
          <div className="btns-group btns-group-theme">
            <Button onClick={this.handleClick}>按钮</Button>
            <Button theme="primary" onClick={this.handleClick}>按钮</Button>
            <Button theme="tblue" onClick={this.handleClick}>按钮</Button>
            <Button theme="tred" onClick={this.handleClick}>按钮</Button>
            <Button theme="tyellow" onClick={this.handleClick}>按钮</Button>
            <Button theme="tgreen" onClick={this.handleClick}>按钮</Button>
            <Button theme="cancel" onClick={this.handleClick}>按钮</Button>
          </div>

          <div className="btns-group btns-group-ghost">
            <Button ghost onClick={this.handleClick}>按钮</Button>
            <Button theme="primary" ghost onClick={this.handleClick}>按钮</Button>
            <Button theme="tblue" ghost onClick={this.handleClick}>按钮</Button>
            <Button theme="tred" ghost onClick={this.handleClick}>按钮</Button>
            <Button theme="tyellow" ghost onClick={this.handleClick}>按钮</Button>
            <Button theme="tgreen" ghost onClick={this.handleClick}>按钮</Button>
            <Button theme="cancel" ghost onClick={this.handleClick}>按钮</Button>
          </div>

          <div className="btns-group btns-group-size">
            <Button size="large" onClick={this.handleClick}>按钮</Button>
            <Button theme="primary" size="default" onClick={this.handleClick}>按钮</Button>
            <Button theme="tblue" size="small" onClick={this.handleClick}>按钮</Button>
            <Button theme="tred" size="large" onClick={this.handleClick}>按钮</Button>
            <Button theme="tyellow" size="default" onClick={this.handleClick}>按钮</Button>
            <Button theme="tgreen" size="small" onClick={this.handleClick}>按钮</Button>
            <Button theme="cancel" size="large" onClick={this.handleClick}>按钮</Button>

            <Button ghost size="default" onClick={this.handleClick}>按钮</Button>
            <Button theme="primary" ghost size="small" onClick={this.handleClick}>按钮</Button>
            <Button theme="tblue" ghost size="large" onClick={this.handleClick}>按钮</Button>
            <Button theme="tred" ghost size="default" onClick={this.handleClick}>按钮</Button>
            <Button theme="tyellow" ghost size="small" onClick={this.handleClick}>按钮</Button>
            <Button theme="tgreen" ghost size="large" onClick={this.handleClick}>按钮</Button>
            <Button theme="cancel" ghost size="small" onClick={this.handleClick}>按钮</Button>
          </div>

          <div className="btns-group btns-group-icon">
            <Button ghost size="default" icon="spinner" onClick={this.handleClick}>按钮</Button>
            <Button theme="primary" ghost size="small" icon={<Icon type="spinner" className="spinning" />} onClick={this.handleClick}>按钮</Button>
            <Button theme="tblue" ghost size="large" icon="thumbs-up" onClick={this.handleClick}>按钮</Button>
            <Button theme="tred" ghost size="default" icon={<Icon type="home" />} onClick={this.handleClick}>按钮</Button>
            <Button theme="tyellow" ghost size="small" icon="heart" onClick={this.handleClick}>按钮</Button>
            <Button theme="tgreen" ghost size="large" icon="hand-right" onClick={this.handleClick}>按钮</Button>
            <Button theme="cancel" ghost size="small" icon={<Icon type="github" />} onClick={this.handleClick}>按钮</Button>

            <Button theme="primary" ghost size="large" icon={<Icon type="phone" />} />
            <Button theme="tblue" ghost size="default" icon={<Icon type="phone" />} />
            <Button theme="tred" ghost size="small" icon={<Icon type="phone" />} />
          </div>

          <div className="btns-group btns-group-disabled">
            <Button disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="primary" disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="tblue" disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="tred" disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="tyellow" disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="tgreen" disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="cancel" disabled onClick={this.handleClick}>按钮</Button>

            <Button ghost disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="primary" ghost disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="tblue" ghost disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="tred" ghost disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="tyellow" ghost disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="tgreen" ghost disabled onClick={this.handleClick}>按钮</Button>
            <Button theme="cancel" ghost disabled onClick={this.handleClick}>按钮</Button>
          </div>

          <div className="btns-group btns-group-icon">
            <Button theme="primary" ghost size="large" shape="circle" icon={<Icon type="phone" />} onClick={this.handleClick} />
            <Button theme="tblue" ghost size="default" shape="circle" icon={<Icon type="phone" />} onClick={this.handleClick} />
            <Button theme="tred" ghost size="small" shape="circle" icon={<Icon type="phone" />} onClick={this.handleClick} />

            <Button theme="tyellow" size="large" shape="circle" icon={<Icon type="download-alt" />} onClick={this.handleClick} />
            <Button theme="tgreen" size="default" shape="circle" icon={<Icon type="download-alt" />} onClick={this.handleClick} />
            <Button theme="cancel" size="small" shape="circle" icon={<Icon type="download-alt" />} onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonContainer;
