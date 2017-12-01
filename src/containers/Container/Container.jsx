import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LogoImage from '@/images/logo.png';
import Language from '../../libs/Language';
import { Menu, SubMenu, MenuItem } from '../../components/Menu';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Dropzone } from '../../components/Dropzone';
import { CascadeSelector } from '../../components/CascadeSelector';
import { Icon } from '../../components/Icon';
import { Rate } from '../../components/Rate';
import * as CONSTANTS from '../../constants/Constants';

import './Container.less';

class Container extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props);

    this.state = {
      activatedNavKey: '',
      openedNavKeys: [],
      sidebarExpanded: false,
      dishTypes: ['all'],
      rate: 0,

      pageSize: 10,
      currentPage: 1
    };

    this.navs = CONSTANTS.MENUS;

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

  componentWillMount() {
    Language.loadLanguage();
  }

  handleClickNav = (key) => {
    const { activatedNavKey } = this.state;
    if (activatedNavKey !== key) {
      this.setState({ activatedNavKey: key });
    }
  }

  handleToggleSubNav = (key) => {
    const { openedNavKeys } = this.state;
    if (openedNavKeys.includes(key)) {
      this.setState({ openedNavKeys: [] });
    } else {
      this.setState({ openedNavKeys: [key] });
    }
  }

  handleToggleSidebar = () => {
    const { sidebarExpanded } = this.state;
    this.setState({ sidebarExpanded: !sidebarExpanded });
  }

  renderMenuItem = (nav) => {
    const { key, title, outsite = false } = nav;
    const linkOptions = { className: 'menu-link', href: key };

    if (outsite) {
      linkOptions.target = '_blank';
    }

    return (
      <MenuItem key={key} ukey={key} onSelect={this.handleClickNav}>
        <a {...linkOptions}>{ title }</a>
      </MenuItem>
    );
  }

  render() {
    const { children } = this.props;
    const { activatedNavKey, openedNavKeys, sidebarExpanded, dishTypes } = this.state;

    return (
      <div className="main-container">
        <Header className={classNames({ 'shrink-header': sidebarExpanded })} logoImage={LogoImage} logoContent="HankLiu React UI">
          <div className="header-right">
            <i
              className={classNames('btn-sidebar-toggle', {
                'w-icon-menu-fold': sidebarExpanded, 'w-icon-menu-unfold': !sidebarExpanded
              })}
              onClick={this.handleToggleSidebar}
            />
            <a className="hlrui-link link-lang">English</a>
          </div>
        </Header>
        <div className="sidebar">
          <Menu mode="vertical" theme="dark" actived={activatedNavKey} openeds={openedNavKeys}>
            {
              this.navs.map((nav) => {
                if ('subMenus' in nav) {
                  const { subMenus, key, title } = nav;
                  return (<SubMenu key={key} ukey={key} title={title} onToggle={this.handleToggleSubNav}>{subMenus.map(this.renderMenuItem)}</SubMenu>);
                }

                return this.renderMenuItem(nav);
              })
            }
          </Menu>
        </div>
        <div className="page-container">
          { children && children }

          <Breadcrumb menus={['首页', '基本', 'Color 颜色']} />

          <Dropzone limit="350" />

          <CascadeSelector
            className="mw-form-control dish-server-control"
            value={dishTypes}
            options={this.dishTypes}
            onChange={value => this.setState({ dishTypes: value })}
          />

          <Pagination
            totalRows={111}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onChangePage={currentPage => this.setState({ currentPage })}
            onChangeSize={pageSize => this.setState({ currentPage: 1, pageSize })}
          />

          <Icon type="star" size="2x" />

          <Rate value={this.state.rate || 3} onChange={rate => this.setState({ rate })} />
        </div>
      </div>
    );
  }
}

export default Container;
