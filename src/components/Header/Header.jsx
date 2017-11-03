import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Header.less';

class Header extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    logoImage: PropTypes.string,
    logoContent: PropTypes.any
  }

  render() {
    const { className, logoImage, logoContent, children } = this.props;

    return (
      <header className={classNames('hlrui-header', { [className]: className })}>
        <a className="logo" href="/">
          <img className="logo-image" src={logoImage} />
          <div className={classNames('logo-content', { hidden: !logoContent })}>
            { logoContent && logoContent }
          </div>
        </a>

        { children && children }
      </header>
    );
  }
}

export default Header;
