import React, { PureComponent } from 'react';
import classNames from 'classnames';

import './Progress.less';

class Progress extends PureComponent {
  render() {
    const { percent, height, className } = this.props;

    return (
      <div className={classNames('hlrui-progress', { [className]: className })} style={{ height: `${height || 20}px` }}>
        <div className="hlrui-progress-bar">
          <div className="hlrui-progress-percent" style={{ width: `${percent}%` }} />
        </div>
      </div>
    );
  }
}

export default Progress;
