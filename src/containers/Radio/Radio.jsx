import React, { Component } from 'react';

import { RadioGroup } from '../../components/Radio';

class RadioContainer extends Component {
  constructor(props) {
    super(props);

    this.heros = [
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

  handleChangeRadio = key => (value) => {
    this.setState({ [key]: value });
  }

  render() {
    const { hero } = this.state;

    return (
      <div className="common-main radio-main">
        <header className="main-page-header">
          <h1>Radio 单选框</h1>
        </header>

        <div className="main-page-body">
          <RadioGroup
            options={this.heros}
            value={hero}
            onChange={this.handleChangeRadio('hero')}
          />
        </div>
      </div>
    );
  }
}

export default RadioContainer;
