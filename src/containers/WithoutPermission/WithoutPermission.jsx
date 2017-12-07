import React, { PureComponent } from 'react';

import { Exception } from '../../components/Exception';

import './WithoutPermission.less';

class WithoutPermission extends PureComponent {
  render() {
    return (
      <div className="without-permission-main">
        <Exception no="403" desc="抱歉，你无权访问该页面" />
      </div>
    );
  }
}

export default WithoutPermission;
