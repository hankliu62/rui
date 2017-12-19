import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Selector } from '../Selector';
import { Icon } from '../Icon';

import './Pagination.less';

class Pagination extends Component {
    static propTypes = {
      totalRows: PropTypes.number,
      pageSize: PropTypes.number,
      currentPage: PropTypes.number,
      showQuickBtn: PropTypes.bool, // 是否显示跳转快捷按钮和输入框
      showPageSize: PropTypes.bool, // 是否显示跳转快捷按钮和输入框
      onChangePage: PropTypes.func.isRequired, // 页码改变回调，接收新的页码参数goto
      onChangeSize: PropTypes.func.isRequired // 页码改变回调，接收新的页码参数goto
    }

    static defaultProps = {
      pageSize: 10,
      currentPage: 1,
      showQuickBtn: true,
      showPageSize: false
    }

    constructor(props) {
      super(props);

      this.state = {
        cPage: '',
        totalPages: Math.ceil(props.totalRows / props.pageSize)
      };


      this.pageSizes = [
        {
          text: '10',
          value: 10
        },
        {
          text: '20',
          value: 20
        },
        {
          text: '50',
          value: 50
        },
        {
          text: '100',
          value: 100
        },
      ];
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.totalRows !== this.props.totalRows || nextProps.pageSize !== this.props.pageSize) {
        this.setState({ totalPages: Math.ceil(nextProps.totalRows / nextProps.pageSize) });
      }
    }

    handleClickPageIndex = (item) => {
      if (item !== this.props.currentPage && item !== '...') {
        this.props.onChangePage(item);
      }
    }

    handleClickPrevious = () => {
      if (this.props.currentPage <= 1) {
        return;
      }

      this.props.onChangePage(this.props.currentPage - 1);
    }

    handleClickNext = () => {
      if (this.props.currentPage >= this.state.totalPages) {
        return;
      }

      this.props.onChangePage(this.props.currentPage + 1);
    }

    handleClickQuick = () => {
      const pageNo = Number(this.state.cPage);

      if (pageNo > 0 && pageNo <= this.state.totalPages) {
        this.props.onChangePage(pageNo);
      } else {
        this.setState({ cPage: '' });
      }
    }

    handleChangePageSize = (pageSize) => {
      this.props.onChangeSize(pageSize);
    }

    getPageNumbers = () => {
      const pageNumbers = [1];
      const { currentPage } = this.props;
      const { totalPages } = this.state;
      // 最多页码显示数量：最多显示多少个跳转页面按钮的个数（包含两个省略按钮）
      const maxPageBtnCount = 11;
      // 两侧连续页码显示个数：两边存在省略页码时，省略页码到中间页码之间的页码的个数
      const middleSidePageBtnCount = ((maxPageBtnCount - 1) / 2) - 2;

      if (totalPages <= maxPageBtnCount) {
        for (let i = 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }

        return pageNumbers;
      }

      let leftPageNumber = currentPage - middleSidePageBtnCount;
      let rightPageNumber = currentPage + middleSidePageBtnCount;

      if (leftPageNumber < 2) {
        rightPageNumber += 2 - leftPageNumber;
      }

      if (rightPageNumber > totalPages - 1) {
        leftPageNumber -= rightPageNumber - totalPages + 1;
      }

      if (leftPageNumber > 2) {
        pageNumbers.push('...');
      }

      for (let i = Math.max(leftPageNumber, 2); i <= Math.min(rightPageNumber, totalPages - 1); i++) {
        pageNumbers.push(i);
      }

      if (rightPageNumber < totalPages - 1) {
        pageNumbers.push('...');
      }

      pageNumbers.push(totalPages);

      return pageNumbers;
    }

    render() {
      const { totalRows, pageSize, currentPage, showQuickBtn, showPageSize } = this.props;

      if (totalRows <= 0) {
        return null;
      }

      const pageNumbers = this.getPageNumbers();
      const startIndex = (currentPage * pageSize) + 1;
      const endIndex = (currentPage + 1) * pageSize > totalRows ? totalRows : (currentPage + 1) * pageSize;

      return (
        <div className={classNames('hlrui-pagination', { 'no-pagesize-selector': !showPageSize })}>
          <div className="hlrui-pagination-statistics">
            <span className={classNames('statistics-text', { hidden: !showPageSize })}>显示第</span>
            <span className={classNames('statistics-number', { hidden: !showPageSize })}> { startIndex } </span>
            <span className={classNames('statistics-text', { hidden: !showPageSize })}>到第</span>
            <span className={classNames('statistics-number', { hidden: !showPageSize })}> { endIndex } </span>
            <span className={classNames('statistics-text', { hidden: !showPageSize })}>条记录，总</span>
            <span className="statistics-text">共</span>
            <span className="statistics-number"> { totalRows } </span>
            <span className="statistics-text">条记录</span>
            <span className={classNames('statistics-text', { hidden: !showPageSize })}>，每页显示</span>
            <Selector
              className={classNames('hlrui-form-control', 'pagesize-selector', { hidden: !showPageSize })}
              value={pageSize}
              options={this.pageSizes}
              onChange={this.handleChangePageSize}
            />
            <span className={classNames('statistics-text', { hidden: !showPageSize })}>条记录</span>
          </div>
          <div className="hlrui-pagination-content">
            <ul className={classNames('hlrui-pagination-wrap', { hidden: totalRows <= pageSize })}>
              <li
                className={classNames('btn-pagination', 'btn-previous', {
                  disabled: currentPage <= 1
                })}
                onClick={this.handleClickPrevious}
              >
                <Icon type="angle-left" />
              </li>
              {
                pageNumbers.map((item, index) => (
                  <li
                    key={index}
                    className={classNames('btn-pagination btn-index', { active: item === currentPage, 'btn-page-expand': item === '...' })}
                    onClick={() => this.handleClickPageIndex(item)}
                  >
                    { item }
                  </li>
                ))
              }
              <li
                className={classNames('btn-pagination', 'btn-next', {
                  disabled: currentPage >= this.state.totalPages
                })}
                onClick={this.handleClickNext}
              >
                <Icon type="angle-right" />
              </li>
            </ul>
            {
              showQuickBtn &&
              <div className={classNames('hlrui-pagination-quick-wrap', { hidden: totalRows <= pageSize })}>
                <input
                  className="hlrui-form-control page-form-control"
                  type="number"
                  value={this.state.cPage}
                  onChange={e => this.setState({ cPage: e.target.value })}
                />
                <a className="hlrui-btn hlrui-btn-tred hlrui-btn-quick" onClick={this.handleClickQuick}>跳 转</a>
              </div>
            }
          </div>
        </div>
      );
    }
}

export default Pagination;
