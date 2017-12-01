import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.less';

class Icon extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['2x', '3x', '4x'])
  }

  render() {
    const { className, size, type, ...extraProps } = this.props;

    return <i {...extraProps} className={classNames('hlrui-icon', 'icon', `icon-${type}`, { [`icon-${size}`]: size, [className]: className })} />;
  }
}

export default Icon;
