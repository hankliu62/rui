import React, { Component } from 'react';

import { Input } from '../../components/Input';
import { Icon } from '../../components/Icon';

class InputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroName: '',
      heroUrl: ''
    };
  }

  handleChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="common-main badge-main">
        <header className="main-page-header">
          <h1>Input 输入框</h1>
        </header>

        <div className="main-page-body">
          <div className="inputs-row-group">
            <Input className="my-input" placeholder="请输入英雄的姓名" name="heroName" value={this.state.heroName} onChange={this.handleChangeInput} />
          </div>

          <div className="inputs-row-group">
            <Input size="large" placeholder="请输入英雄的简称" />

            <Input placeholder="请输入英雄的简称" />

            <Input size="small" placeholder="请输入英雄的简称" />
          </div>

          <div className="inputs-row-group">
            <Input className="my-input" addonBefore="Http://" addonAfter=".com" placeholder="请输入英雄简介地址" name="heroUrl" value={this.state.heroUrl} onChange={this.handleChangeInput} />

            <Input addonBefore={<Icon type="globe" />} />

            <Input addonAfter={<Icon type="cog" />} />
          </div>

          <div className="inputs-row-group">
            <Input addonBefore="Http://" addonAfter=".com" size="large" placeholder="请输入英雄简介地址" />

            <Input addonBefore="Http://" addonAfter=".com" placeholder="请输入英雄简介地址" />

            <Input addonBefore="Http://" addonAfter=".com" size="small" placeholder="请输入英雄简介地址" />
          </div>

          <div className="inputs-row-group">
            <Input className="my-input" prefix={<Icon type="globe" />} suffix={<Icon type="cog" />} placeholder="请输入英雄简介地址" />

            <Input className="my-input" prefix={<Icon type="user" />} placeholder="请输入英雄简介地址" />

            <Input className="my-input" suffix={<Icon type="search" />} placeholder="请输入搜索名称" />
          </div>

          <div className="inputs-row-group">
            <Input className="my-input" prefix={<Icon type="globe" />} suffix={<Icon type="cog" />} placeholder="请输入英雄简介地址" size="large" />

            <Input className="my-input" prefix={<Icon type="user" />} placeholder="请输入英雄简介地址" />

            <Input className="my-input" suffix={<Icon type="search" />} placeholder="请输入搜索名称" size="small" />
          </div>

          <div className="inputs-row-group">
            <Input className="my-input" addonBefore="Http://" addonAfter=".com" prefix={<Icon type="globe" />} suffix={<Icon type="cog" />} placeholder="请输入英雄简介地址" />

            <Input className="my-input" addonBefore="Http://" prefix={<Icon type="globe" />} suffix={<Icon type="cog" />} placeholder="请输入英雄简介地址" />

            <Input className="my-input" addonAfter=".com" prefix={<Icon type="globe" />} suffix={<Icon type="cog" />} placeholder="请输入英雄简介地址" />
          </div>

          <div className="inputs-row-group">
            <Input className="my-input" addonBefore="Http://" addonAfter=".com" prefix={<Icon type="globe" />} suffix={<Icon type="cog" />} placeholder="请输入英雄简介地址" size="large" />

            <Input className="my-input" addonBefore="Http://" prefix={<Icon type="globe" />} suffix={<Icon type="cog" />} placeholder="请输入英雄简介地址" />

            <Input className="my-input" addonAfter=".com" prefix={<Icon type="globe" />} suffix={<Icon type="cog" />} placeholder="请输入英雄简介地址" size="small" />
          </div>
        </div>
      </div>
    );
  }
}

export default InputContainer;
