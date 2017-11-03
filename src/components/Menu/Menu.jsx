import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Menu.less';

class Menu extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onSelect: PropTypes.func
  }

  render() {
    const { className, children } = this.props;

    return (
      <div
        className={classNames('hlrui-menus', {
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
