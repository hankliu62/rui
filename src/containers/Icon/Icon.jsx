import React, { Component } from 'react';

import { Icon } from '../../components/Icon';

class IconContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 1
    };
  }

  render() {
    return (
      <div className="common-main icon-main">
        <header className="main-page-header">
          <h1>Icon 图标</h1>
        </header>

        <div className="main-page-body">
          <Icon type="star" size="2x" />
        </div>
      </div>
    );
  }
}

export default IconContainer;
