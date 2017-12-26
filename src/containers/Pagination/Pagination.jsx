import React, { Component } from 'react';

import { Pagination } from '../../components/Pagination';

class PaginationContainer extends Component {
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
          <div className="pagination-row-group block-row-group">
            <Pagination
              totalRows={111}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onChangePage={this.handleChangePage}
              onChangeSize={this.handleChangeSize}
              showPageSize
            />
          </div>

          <div className="pagination-row-group block-row-group">
            <Pagination
              totalRows={111}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              theme="primary"
              onChangePage={this.handleChangePage}
              onChangeSize={this.handleChangeSize}
              showPageSize
            />
          </div>

          <div className="pagination-row-group block-row-group">
            <Pagination
              totalRows={111}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              theme="tblue"
              onChangePage={this.handleChangePage}
              onChangeSize={this.handleChangeSize}
              showPageSize
            />
          </div>

          <div className="pagination-row-group block-row-group">
            <Pagination
              totalRows={111}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              theme="tyellow"
              onChangePage={this.handleChangePage}
              onChangeSize={this.handleChangeSize}
              showPageSize
            />
          </div>

          <div className="pagination-row-group block-row-group">
            <Pagination
              totalRows={111}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              theme="tgreen"
              onChangePage={this.handleChangePage}
              onChangeSize={this.handleChangeSize}
              showPageSize
            />
          </div>

          <div className="pagination-row-group block-row-group">
            <Pagination
              totalRows={111}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onChangePage={this.handleChangePage}
              onChangeSize={this.handleChangeSize}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PaginationContainer;
