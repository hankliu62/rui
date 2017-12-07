import React, { PureComponent } from 'react';

import { Exception } from '../../components/Exception';

import './NotFound.less';

class NotFound extends PureComponent {
  render() {
    return (
      <div className="not-found-main">
        <Exception no="404" desc="抱歉，你访问的页面不存在" showBackBtn />
      </div>
    );
  }
}

export default NotFound;
