import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Divider.less';

class Divider extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    dashed: PropTypes.bool
  }

  static defaultProps = {
    direction: 'horizontal',
    dashed: false,
  }

  render() {
    const { className, direction, dashed, children, ...others } = this.props;
    return (
      <div
        {...others}
        className={classNames('hlrui-divider', `hlrui-divider-${direction}`, {
          'hlrui-divider-with-text': children,
          'hlrui-divider-dashed': !!dashed,
        })}
      >
        {children && <span className="hlrui-divider-inner-text">{children}</span>}
      </div>
    );
  }
}

export default Divider;
