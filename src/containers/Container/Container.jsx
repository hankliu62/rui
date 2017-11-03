import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LogoImage from '@/images/logo.png';
import Language from '../../libs/Language';
import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';


import './Container.less';

class Container extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  componentWillMount() {
    Language.loadLanguage();
  }

  render() {
    const { children } = this.props;

    return (
      <div className="main-container">
        <Header logoImage={LogoImage} logoContent="HankLiu React UI">
          <div className="header-right">
            <a className="hlrui-link link-lang" >English</a>
            <a className="hlrui-link link-github" href="https://github.com/hankliu62/rui">github</a>
          </div>
        </Header>
        <div className="sidebar"><Menu /></div>
        <div className="page-container">
          { children && children }
        </div>
      </div>
    );
  }
}

export default Container;
