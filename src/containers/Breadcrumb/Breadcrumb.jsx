import React, { Component } from 'react';

import { Breadcrumb } from '../../components/Breadcrumb';

class BreadcrumbContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 1
    };
  }

  render() {
    return (
      <div className="common-main breadcrumb-main">
        <header className="main-page-header">
          <h1>Breadcrumb 面包屑</h1>
        </header>

        <div className="main-page-body">
          <Breadcrumb menus={['首页', '导航', 'Breadcrumb 面包屑']} />
        </div>
      </div>
    );
  }
}

export default BreadcrumbContainer;
