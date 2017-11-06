import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LogoImage from '@/images/logo.png';
import Language from '../../libs/Language';
import { Menu, SubMenu, MenuItem } from '../../components/Menu';
import { Header } from '../../components/Header';
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
      sidebarExpanded: false
    };

    this.navs = CONSTANTS.MENUS;
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
    const { activatedNavKey, openedNavKeys, sidebarExpanded } = this.state;

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
        </div>
      </div>
    );
  }
}

export default Container;
