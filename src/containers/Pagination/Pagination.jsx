import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Pagination } from '../../components/Pagination';

class PaginationContainer extends Component {
  static propTypes = {
    content: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.state = {
      pageSize: 10,
      currentPage: 1
    };
  }

  handleChangePage = (currentPage) => {
    this.setState({ currentPage });
  }

  handleChangeSize = (pageSize) => {
    this.setState({ currentPage: 1, pageSize });
  }

  render() {
    return (
      <div className="common-main pagination-main">
        <header className="main-page-header">
          <h1>Pagination 分页</h1>
        </header>

        <div className="main-page-body">
          <Pagination
            totalRows={111}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onChangePage={this.handleChangePage}
            onChangeSize={this.handleChangeSize}
          />
        </div>
      </div>
    );
  }
}

export default PaginationContainer;
