import React, { Component } from 'react';

import { Tabs, TabPane } from '../../components/Tabs';
import { Selector } from '../../components/Selector';

class TabsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'top',
    };

    this.positions = [

    ];
  }

  handleLogChange = (key) => {
    console.log(key);
  }

  getTabData = (count = 3) => {
    const contents = [
      '所谓耐心，就是甘于把时间投入到简单、枯燥但是最终会意义非凡的重复当中去。',
      '素材积累固然非常重要，然而，如果提前确定一个方向或者目标，那么就甚至可以积累很多原本不可能想象的素材——惊喜连连。',
      '一个人有多大的耐心，他的成功几率就有多高。反过来，没有耐心的人终将一事无成。',
      '懒惰，是缺乏耐心而不愿投入时间精力去做任何事情。短视，是缺乏耐心而不能运用心智去展望未来。草率，是缺乏耐心而不愿投入时间精力去认真地调查研究。肤浅，是缺乏耐心而不能运用心智深入思考。夜郎自大，是因为缺乏耐心而拒绝观察外面的世界。',
      '所有的成见与偏见，都是因为缺乏耐心而不愿投入更多的时间和精力去认真分辨每个个体的特征，而宁愿用粗暴简单的分类方法替代思考。',
      '我的想法写，你用你的智力读，千万别认为我有误导你的兴趣。非要认为自己被误导了的智力半残者，对不住您了。'
    ];

    const tabData = [];
    for (let i = 0; i < count; i++) {
      tabData.push({
        title: `tab ${i + 1}`,
        content: contents[i % contents.length],
        key: `${i + 1}`
      });
    }

    return tabData;
  }

  render() {
    return (
      <div className="common-main tabs-main">
        <header className="main-page-header">
          <h1>Tabs 标签页</h1>
        </header>

        <div className="main-page-body">
          <div className="tabs-row-group block-row-group">
            <Tabs defaultActiveKey="1" onChange={this.handleLogChange}>
              {
                this.getTabData().map(item => (<TabPane tab={item.title} key={item.key}>{item.content}</TabPane>))
              }
            </Tabs>
          </div>

          <div className="tabs-row-group block-row-group">
            <Tabs defaultActiveKey="1" onChange={this.handleLogChange}>
              {
                this.getTabData().map((item, index) => (<TabPane tab={item.title} disabled={index === 1} key={item.key}>{item.content}</TabPane>))
              }
            </Tabs>
          </div>

          <div className="tabs-row-group block-row-group">
            <div>Tab position：<Selector value={this.state.mode} options={this.heros} onChange={this.handleChangeSelector('hero')} /></div>
            <Tabs defaultActiveKey="1" onChange={this.handleLogChange}>
              {
                this.getTabData().map(item => (<TabPane tab={item.title} key={item.key}>{item.content}</TabPane>))
              }
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default TabsContainer;
