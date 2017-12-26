import React, { PureComponent } from 'react';
import classNames from 'classnames';

class Tabs extends PureComponent {
  render() {
    const { className, ...others } = this.props;

    return (
      <div
        className={classNames('hlrui-tabs', {
          [className]: className
        })}
        {...others}
      >
        1
      </div>
    );
  }
}

export default Tabs;
