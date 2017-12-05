import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

import './Menu.less';

class Menu extends PureComponent {
  static MenuItem = MenuItem;

  static SubMenu = SubMenu;

  static childContextTypes = {
    component: PropTypes.any
  }

  static propTypes = {
    mode: PropTypes.oneOf(['horizontal', 'vertical']),
    theme: PropTypes.oneOf(['default', 'dark']),
    openeds: PropTypes.arrayOf(PropTypes.string),
    actived: PropTypes.string,
    className: PropTypes.string,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    mode: 'horizontal',
    theme: 'default',
    actived: '',
    openeds: []
  }

  constructor(props) {
    super(props);

    this.state = {
      activedKey: props.actived,
      openedKeys: props.openeds
    };

    this.instanceType = 'menu';
  }

  getChildContext() {
    return { component: this };
  }

  componentWillReceiveProps(nextProps) {
    const nextState = {};
    const { actived, openeds } = nextProps;

    if (actived !== this.props.actived) {
      nextState.activedKey = actived;
    }

    if (JSON.stringify(openeds) !== JSON.stringify(this.props.openeds)) {
      nextState.openedKeys = JSON.parse(JSON.stringify(openeds));
    }

    if (Object.keys(nextState).length) {
      this.setState(nextState);
    }
  }

  render() {
    const { className, children, mode, theme } = this.props;

    return (
      <div
        className={classNames('hlrui-menus', mode, theme, {
          [className]: className
        })}
        onClick={this.props.onSelect}
      >
        { children }
      </div>
    );
  }
}

export default Menu;
