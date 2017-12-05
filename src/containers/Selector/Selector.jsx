import React, { Component } from 'react';

import { Selector } from '../../components/Selector';

class SelectorContainer extends Component {
  constructor(props) {
    super(props);

    this.heros = [
      { text: '全部英雄', value: 'all' },
      { text: '敌法师', value: 'AM' },
      { text: '龙骑士', value: 'DK' },
      { text: '复仇之魂', value: 'VS' },
      { text: '水晶室女', value: 'CM' },
      { text: '撼地神牛', value: 'ES' },
      { text: '隐形刺客', value: 'SA' },
      { text: '流浪剑客', value: 'Sven' },
      { text: '山岭巨人', value: 'Tiny' },
      { text: '精灵守卫', value: 'IO' }
    ];

    this.state = {
      hero: this.heros[0].value
    };
  }

  handleChangeSelector = key => (value) => {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div className="common-main selector-main">
        <header className="main-page-header">
          <h1>Selector 选择器</h1>
        </header>

        <div className="main-page-body">
          <Selector value={this.state.hero} options={this.heros} onChange={this.handleChangeSelector('hero')} />
        </div>
      </div>
    );
  }
}

export default SelectorContainer;
