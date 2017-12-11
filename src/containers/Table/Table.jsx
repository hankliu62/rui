import React, { Component } from 'react';

import { Table } from '../../components/Table';
import { Icon } from '../../components/Icon';
import { Divider } from '../../components/Divider';
import { Link } from '../../components/Link';

class TableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }]
    };
  }

  handleSortTable = key => (value) => {
    this.setState({ [key]: value });
  }

  render() {
    const { data } = this.state;

    const tableOptions = {
      columns: [
        {
          label: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: '30%',
          align: 'center',
          tbodyRender: text => <Link href="#">{text}</Link>,
        },
        {
          label: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: '20%',
          align: 'center'
        },
        {
          label: 'Address',
          dataIndex: 'address',
          key: 'address',
          width: '20%',
          align: 'center'
        },
        {
          label: 'Action',
          key: 'action',
          width: '20%',
          align: 'center',
          tbodyRender: (_, row) => (
            <span>
              <Link href="#">Action 一 {row.name}</Link>
              <Divider direction="vertical" />
              <Link href="#">Delete</Link>
              <Divider direction="vertical" />
              <Link href="#" className="hlrui-dropdown-link">
              More actions <Icon type="angle-down" />
              </Link>
            </span>
          ),
        }
      ]
    };

    return (
      <div className="common-main table-main">
        <header className="main-page-header">
          <h1>Table 表格</h1>
        </header>

        <div className="main-page-body">
          <div className="tables-row-group">
            <Table {...tableOptions} rowDatas={data} />
          </div>

          <div className="tables-row-group">
            <Table {...tableOptions} className="hlrui-table-bordered hlrui-table-color" rowDatas={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default TableContainer;
