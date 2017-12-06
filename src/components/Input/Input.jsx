import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import GetSizeName from '../../decorators/GetSizeName';

import './Input.less';

@GetSizeName
class Input extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default', 'large']),
    addonBefore: PropTypes.node,
    addonAfter: PropTypes.node
  }

  constructor(props) {
    super(props);

    this.getSizeName = this.getSizeName.bind(this);
  }

  renderWrapInput = (children) => {
    return children;
  }

  renderInput = () => {
    const { className, size, ...others } = this.props;

    const sizeName = this.getSizeName();

    delete (others.size);
    delete (others.addonBefore);
    delete (others.addonAfter);

    return (
      <input
        {...others}
        className={classNames('hlrui-input', {
          [className]: className,
          [`hlrui-input-size-${sizeName}`]: sizeName
        })}
      />
    );
  }

  render() {
    const { addonBefore, addonAfter } = this.props;
    const children = this.renderInput();

    if (addonBefore || addonAfter) {
      return this.renderWrapInput(children);
    }

    return children;
  }
}

export default Input;
