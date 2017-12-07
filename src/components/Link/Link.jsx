import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import GetSizeName from '../../decorators/GetSizeName';

import './Link.less';

@GetSizeName
class Link extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'default', 'small']),
    theme: PropTypes.string,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    disabled: false,
    theme: 'default'
  }

  constructor(props) {
    super(props);

    this.getSizeName = this.getSizeName.bind(this);
  }

  render() {
    const { className, children, theme, disabled, ...others } = this.props;

    const sizeName = this.getSizeName();

    delete (others.size);

    return (
      <a
        {...others}
        className={classNames('hlrui-link', {
          [`hlrui-link-size-${sizeName}`]: sizeName,
          [`hlrui-link-theme-${theme}`]: theme,
          [className]: className,
          disabled
        })}
      >
        { children }
      </a>
    );
  }
}

export default Link;
