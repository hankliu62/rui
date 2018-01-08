import React, { Component } from 'react';

import { Collapse } from '../../components/Collapse';

class CollapseContainer extends Component {
  render() {
    return (
      <div className="common-main collapse-main">
        <header className="main-page-header">
          <h1>Collapse 折叠面板</h1>
        </header>

        <div className="main-page-body">
          <div className="collapse-row-group block-row-group">
            <Collapse />
          </div>

          <div className="collapse-row-group block-row-group">
            <Collapse />
          </div>
        </div>
      </div>
    );
  }
}

export default CollapseContainer;
