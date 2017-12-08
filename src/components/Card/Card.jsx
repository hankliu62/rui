import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Card.less';

class Card extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children, ...others } = this.props;

    return (
      <div
        {...others}
        className={classNames('hlrui-card', {
          [className]: className
        })}
      >
        {children}
      </div>
    );
  }
}

export default Card;
