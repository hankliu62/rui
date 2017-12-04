import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import GetRootMenu from './decorators/GetRootMenu';

@GetRootMenu
class MenuItem extends PureComponent {
  static contextTypes = {
    component: PropTypes.any
  }

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    ukey: PropTypes.string,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    onSelect: () => {}
  }

  constructor(props) {
    super(props);

    this.getRootMenu = this.getRootMenu.bind(this);
  }

  handleItemClick = (event) => {
    if (event) {
      event.stopPropagation();
    }

    const { ukey, disabled } = this.props;

    if (disabled) {
      return;
    }

    this.props.onSelect(ukey);
  }

  isActived = () => {
    const { ukey } = this.props;
    const rootMenu = this.getRootMenu() || { state: { activedKey: '' } };
    return rootMenu.state.activedKey === ukey;
  }

  render() {
    const { className, disabled, children, ukey } = this.props;

    return (
      <div
        key={ukey}
        className={classNames('hlrui-menu-item', {
          [className]: className,
          activated: this.isActived(),
          disabled
        })}
        onClick={this.handleItemClick}
      >
        { children && children }
      </div>
    );
  }
}

export default MenuItem;
