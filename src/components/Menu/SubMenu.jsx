import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import GetRootMenu from './decorators/GetRootMenu';

@GetRootMenu
class SubMenu extends PureComponent {
  static contextTypes = {
    component: PropTypes.any
  }

  static propTypes = {
    className: PropTypes.string,
    ukey: PropTypes.string,
    title: PropTypes.any,
    onToggle: PropTypes.func
  }

  static defaultProps = {
    onToggle: () => {}
  }

  constructor(props) {
    super(props);

    this.getRootMenu = this.getRootMenu.bind(this);
  }

  handleItemClick = () => {
    const { ukey } = this.props;
    this.props.onToggle(ukey);
  }

  isOpen = () => {
    const { ukey } = this.props;
    const rootMenu = this.getRootMenu() || { state: { openedKeys: [] } };
    return (rootMenu.state.openedKeys || []).includes(ukey);
  }

  render() {
    const { className, children, ukey, title } = this.props;

    return (
      <div
        key={ukey}
        className={classNames('hlrui-menu-subs', {
          [className]: className,
          'hlrui-menu-subs-expand': this.isOpen()
        })}
        onClick={this.handleItemClick}
      >
        <div className={classNames('hlrui-sub-menu-header', { hidden: !title })}>{ title }</div>
        <div className={classNames('hlrui-sub-menu-body', `sub-menu-childrens-${(children || []).length}`)}>
          { children && children }
        </div>
      </div>
    );
  }
}

export default SubMenu;
