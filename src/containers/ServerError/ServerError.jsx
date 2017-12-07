import React, { PureComponent } from 'react';

import { Exception } from '../../components/Exception';

import './ServerError.less';

class ServerError extends PureComponent {
  render() {
    return (
      <div className="server-error-main">
        <Exception no="500" desc="抱歉，服务器出错了" />
      </div>
    );
  }
}

export default ServerError;
