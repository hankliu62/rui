import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cascader } from '../../components/Cascader';

class CascaderContainer extends Component {
  static propTypes = {
    content: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      dishTypes: ['all']
    };

    this.dishTypes = [
      { text: '全部分类', value: 'all' },
      {
        text: '热菜',
        value: '1',
        subOptions: [
          {
            text: '荤菜',
            value: '4',
            subOptions: [
              { text: '牛肉类', value: '10' },
              { text: '羊肉类', value: '11' },
              { text: '猪肉类', value: '12' },
              { text: '鸡肉类', value: '13' },
            ]
          },
          {
            text: '素菜',
            value: '5',
            subOptions: [
              { text: '叶类', value: '14' },
              { text: '茎类', value: '15' },
              { text: '根类', value: '16' }
            ]
          },
          {
            text: '汤羹',
            value: '6',
            subOptions: [
              { text: '浓汤', value: '17' },
              { text: '清汤', value: '18' }
            ]
          }
        ]
      },
      {
        text: '冷菜',
        value: '2',
        subOptions: [
          {
            text: '卤菜',
            value: '7',
            subOptions: [
              { text: '鱼类', value: '19' },
              { text: '豆类', value: '20' }
            ]
          },
          {
            text: '罐头',
            value: '8',
            subOptions: [
              { text: '清蒸类', value: '21' },
              { text: '调味类', value: '22' },
              { text: '腌制类', value: '23' },
              { text: '烟熏类', value: '24' },
              { text: '香肠类', value: '25' },
              { text: '内脏类', value: '26' },
              { text: '白烧类', value: '27' },
              { text: '去骨类', value: '28' },
              { text: '糖水类', value: '29' },
              { text: '糖浆类', value: '30' },
              { text: '果酱类', value: '31' },
              { text: '果汁类', value: '32' },
              { text: '醋渍类', value: '33' },
              { text: '坚果类', value: '34' }
            ]
          },
          {
            text: '水果',
            value: '9'
          }
        ]
      },
      { text: '甜品', value: '3' },
    ];
  }

  render() {
    const { dishTypes } = this.state;

    return (
      <div className="common-main cascader-main">
        <header className="main-page-header">
          <h1>Cascader 图标</h1>
        </header>

        <div className="main-page-body">
          <Cascader
            className="mw-form-control dish-server-control"
            value={dishTypes}
            options={this.dishTypes}
            onChange={value => this.setState({ dishTypes: value })}
          />
        </div>
      </div>
    );
  }
}

export default CascaderContainer;
