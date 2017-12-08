import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Card.less';

class Grid extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children, ...others } = this.props;

    return (
      <div
        {...others}
        className={classNames('hlrui-card-grid', {
          [className]: className
        })}
      >
        {children}
      </div>
    );
  }
}

export default Grid;
