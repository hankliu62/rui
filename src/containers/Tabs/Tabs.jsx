import React, { Component } from 'react';

import { Tabs, TabPane } from '../../components/Tabs';
import { Selector } from '../../components/Selector';
import { RadioGroup } from '../../components/Radio';
import { Icon } from '../../components/Icon';
import { Button } from '../../components/Button';

class TabsContainer extends Component {
  constructor(props) {
    super(props);

    const customCloseTabs = this.getPoemData(5).map((item, index) => (index === 1 ? { ...item, closable: false } : item));

    this.state = {
      position: 'top',
      size: 'default',
      customCloseTabs,
      customCloseTabsActiveKey: customCloseTabs[0].key
    };

    this.positions = [
      { text: 'top', value: 'top' },
      { text: 'bottom', value: 'bottom' },
      { text: 'left', value: 'left' },
      { text: 'right', value: 'right' }
    ];

    this.sizes = [
      { text: 'small', value: 'small' },
      { text: 'default', value: 'default' },
      { text: 'large', value: 'large' }
    ];
  }

  handleChangeTab = (key) => {
    console.log(key, 'handleChangeTab-------------------------------------------');
  }

  handleChangeValue = stateKey => (value) => {
    this.setState({ [stateKey]: value });
  }

  handleEditTab = stateKey => (key, action) => {
    const stateValue = this.state[stateKey];
    if (action === 'remove') {
      this.setState({ [stateKey]: stateValue.filter(item => item.key !== key) });
    } else if (action === 'add') {
      const newTab = this.getPoemData(stateValue.length + 1).pop();
      this.setState({ [stateKey]: [...stateValue, this.getPoemData(stateValue.length + 1).pop()], [`${stateKey}ActiveKey`]: newTab.key });
    }
  }

  getTabData = (count = 3, withIcon) => {
    const contents = [
      '所谓耐心，就是甘于把时间投入到简单、枯燥但是最终会意义非凡的重复当中去。',
      '素材积累固然非常重要，然而，如果提前确定一个方向或者目标，那么就甚至可以积累很多原本不可能想象的素材——惊喜连连。',
      '一个人有多大的耐心，他的成功几率就有多高。反过来，没有耐心的人终将一事无成。',
      '懒惰，是缺乏耐心而不愿投入时间精力去做任何事情。短视，是缺乏耐心而不能运用心智去展望未来。草率，是缺乏耐心而不愿投入时间精力去认真地调查研究。肤浅，是缺乏耐心而不能运用心智深入思考。夜郎自大，是因为缺乏耐心而拒绝观察外面的世界。',
      '所有的成见与偏见，都是因为缺乏耐心而不愿投入更多的时间和精力去认真分辨每个个体的特征，而宁愿用粗暴简单的分类方法替代思考。',
      '我的想法写，你用你的智力读，千万别认为我有误导你的兴趣。非要认为自己被误导了的智力半残者，对不住您了。'
    ];

    const icons = [
      'facebook',
      'twitter',
      'linkedin',
      'github',
      'pinterest',
      'google-plus'
    ];

    const tabData = [];
    for (let i = 0; i < count; i++) {
      const item = {
        title: `tab ${i + 1}`,
        content: contents[i % contents.length],
        key: `${i + 1}`
      };

      if (withIcon) {
        item.icon = icons[i % icons.length];
      }

      tabData.push(item);
    }

    return tabData;
  }

  getPoemData = (count = 3, withIcon) => {
    const titles = [
      '出塞',
      '春晓',
      '寻隐者不遇',
      '早发白帝城',
      '九月九日忆山东兄弟',
      '登鹳雀楼',
      '凉州词',
      '赤壁',
      '八阵图',
      '红豆'
    ];

    const contents = [
      '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
      '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
      '松下问童子，言师采药去。只在此山中，云深不知处。',
      '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。',
      '独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。',
      '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
      '葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？',
      '折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。',
      '功盖三分国，名高八阵图。江流石不转，遗恨失吞吴。',
      '红豆生南国，春来发几枝。愿君多采撷，此物最相思。'
    ];

    const icons = [
      'facebook',
      'twitter',
      'linkedin',
      'github',
      'pinteresticon',
      'google-plus'
    ];

    const tabData = [];
    for (let i = 0; i < count; i++) {
      const item = {
        title: count > titles.length ? `${titles[i % titles.length]} ${i + 1}` : titles[i % titles.length],
        content: contents[i % contents.length],
        key: `${i + 1}`
      };

      if (withIcon) {
        item.icon = icons[i % icons.length];
      }

      tabData.push(item);
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
            <Tabs defaultActiveKey="1" onChange={this.handleChangeTab}>
              {
                this.getTabData().map(item => (<TabPane tab={item.title} key={item.key}>{item.content}</TabPane>))
              }
            </Tabs>
          </div>

          <div className="tabs-row-group block-row-group">
            <Tabs defaultActiveKey="1" onChange={this.handleChangeTab}>
              {
                this.getTabData(5, true).map(item => (
                  <TabPane tab={item.icon ? (<span><Icon type={item.icon} />{item.title}</span>) : item.title} key={item.key}>{item.content}</TabPane>
                ))
              }
            </Tabs>
          </div>

          <div className="tabs-row-group block-row-group">
            <Tabs defaultActiveKey="1" onChange={this.handleChangeTab}>
              {
                this.getTabData().map((item, index) => (<TabPane tab={item.title} disabled={index === 1} key={item.key}>{item.content}</TabPane>))
              }
            </Tabs>
          </div>

          <div className="tabs-row-group block-row-group">
            <Tabs
              defaultActiveKey="1"
              onChange={this.handleChangeTab}
              tabBarExtraContent={<Button theme="primary" onClick={() => { console.log('朗诵诗篇'); }}>朗诵诗篇</Button>}
            >
              {
                this.getPoemData().map(item => (<TabPane tab={item.title} key={item.key}>{item.content}</TabPane>))
              }
            </Tabs>
          </div>

          <div className="tabs-row-group block-row-group">
            <div className="tabs-radio-wrap" style={{ marginBottom: '15px', lineHeight: '32px' }}>
              Tab size: <RadioGroup style={{ display: 'inline-block', verticalAlign: 'middle' }} value={this.state.size} options={this.sizes} onChange={this.handleChangeValue('size')} />
            </div>
            <Tabs defaultActiveKey="1" onChange={this.handleChangeTab} size={this.state.size} style={{ height: '220px' }}>
              {
                this.getPoemData().map(item => (<TabPane tab={item.title} key={item.key}>{item.content}</TabPane>))
              }
            </Tabs>
          </div>

          <div className="tabs-row-group block-row-group">
            <div className="tabs-selector-wrap" style={{ marginBottom: '15px' }}>Tab position: <Selector value={this.state.position} options={this.positions} onChange={this.handleChangeValue('position')} /></div>
            <Tabs defaultActiveKey="1" onChange={this.handleChangeTab} tabPosition={this.state.position}>
              {
                this.getPoemData().map(item => (<TabPane tab={item.title} key={item.key}>{item.content}</TabPane>))
              }
            </Tabs>
          </div>

          <div className="tabs-row-group block-row-group">
            <div className="tabs-selector-wrap" style={{ marginBottom: '15px' }}>Tab position：<Selector value={this.state.position} options={this.positions} onChange={this.handleChangeValue('position')} /></div>
            <Tabs defaultActiveKey="1" onChange={this.handleChangeTab} tabPosition={this.state.position} style={{ height: '220px' }}>
              {
                this.getPoemData(18).map(item => (<TabPane tab={item.title} key={item.key}>{item.content}</TabPane>))
              }
            </Tabs>
          </div>

          <div className="tabs-row-group block-row-group">
            <Tabs
              defaultActiveKey="2"
              onChange={this.handleChangeTab}
              type="card"
            >
              {
                this.getPoemData().map(item => (<TabPane tab={item.title} key={item.key}>{item.content}</TabPane>))
              }
            </Tabs>
          </div>

          <div className="tabs-row-group block-row-group">
            <Tabs
              activeKey={this.state.customCloseTabsActiveKey}
              onChange={this.handleChangeValue('customCloseTabsActiveKey')}
              type="editable-card"
              onEdit={this.handleEditTab('customCloseTabs')}
              showAdd
            >
              {
                this.state.customCloseTabs.map(item => (<TabPane tab={item.title} key={item.key} closable={item.closable}>{item.content}</TabPane>))
              }
            </Tabs>
          </div>

        </div>
      </div>
    );
  }
}

export default TabsContainer;
