import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Table.less';

class Table extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    columns: PropTypes.array,
    rowDatas: PropTypes.array,
    onSort: PropTypes.func
  }

  static defaultProps = {
    columns: [],
    rowDatas: [],
    onSort: () => {}
  }

  render() {
    const { columns = [], rowDatas = [], onSort = () => {}, className } = this.props;

    return (
      <table className={classNames('hlrui-table', { [className]: className })}>
        <thead className="hlrui-table-thead">
          <tr className="hlrui-table-thead-row">
            {
              columns.map((column, index) => {
                const thOptions = {
                  key: `thead-${column.prop ? column.prop : index}`,
                  className: classNames('hlrui-table-thead-column', `hlrui-table-align-${column.align || 'center'}`, { [column.className]: column.className }),
                  colSpan: column.cols || 1
                };

                if ('width' in column) {
                  thOptions.style = { width: typeof (column.width) === 'number' ? `${column.width}px` : column.width };
                }

                return (
                  <th {...thOptions}>
                    <div className="hlrui-table-cell hlrui-thead-cell">
                      { column.theadRender ? column.theadRender() : column.label }
                      { 'sorted' in column &&
                      <span className="hlrui-caret-wrapper" onClick={() => onSort(column, column.sorted)}>
                        {/* sorted: ['', 'ascending', 'descending'] */}
                        <i className={classNames('hlrui-sort-caret', column.sorted)} />
                      </span>
                      }
                    </div>
                  </th>
                );
              })
            }
          </tr>
        </thead>
        <tbody className="hlrui-table-tbody">
          {
            rowDatas.map((data, rowIndex) => {
              return (
                <tr key={`tbody-${rowIndex}`} className={classNames('hlrui-table-tbody-row', { 'tbody-custom-row': data.type === 'customRow' })}>
                  {
                    data.type === 'customRow' && 'columns' in data ?
                      data.columns.map((column, columnIndex) => {
                        return (
                          <td
                            key={`tbody-${rowIndex}-${columnIndex}`}
                            className={classNames('hlrui-table-tbody-column', {
                              [`hlrui-table-align-${column.align}`]: column.align,
                              [column.className]: column.className
                            })}
                            colSpan={column.cols || 1}
                          >
                            <div className="hlrui-table-cell hlrui-tbody-cell">
                              { column.render ? column.render(column, rowIndex, columnIndex) : column.label }
                            </div>
                          </td>
                        );
                      }) :
                      columns.map((column, columnIndex) => {
                        return (
                          <td
                            key={`tbody-${rowIndex}-${columnIndex}`}
                            className={classNames('hlrui-table-tbody-column', {
                              [`hlrui-table-align-${column.align}`]: column.align,
                              [column.bodyClassName]: column.bodyClassName
                            })}
                          >
                            <div className="hlrui-table-cell hlrui-tbody-cell">
                              { column.tbodyRender ? column.tbodyRender(data[column.key], data, column, rowIndex, columnIndex) : data[column.key] }
                            </div>
                          </td>
                        );
                      })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

export default Table;
