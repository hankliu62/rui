import React, { Component } from 'react';

import { CheckboxGroup } from '../../components/CheckboxGroup';

class CheckboxContainer extends Component {
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
      heros: []
    };
  }

  handleChangeCheckbox = key => (value) => {
    this.setState({ [key]: value });
  }

  render() {
    const { heros } = this.state;

    return (
      <div className="common-main checkbox-main">
        <header className="main-page-header">
          <h1>Checkbox 单选框</h1>
        </header>

        <div className="main-page-body">
          <CheckboxGroup
            options={this.heros}
            value={heros}
            onChange={this.handleChangeCheckbox('heros')}
          />
        </div>
      </div>
    );
  }
}

export default CheckboxContainer;
