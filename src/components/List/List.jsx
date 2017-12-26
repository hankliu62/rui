import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Item from './Item';
import { Icon } from '../Icon';
import GetSizeName from '../../decorators/GetSizeName';

import './List.less';

@GetSizeName
class List extends Component {
  static propTypes = {
    size: PropTypes.string,
    bordered: PropTypes.bool,
    loading: PropTypes.bool,
    header: PropTypes.node,
    footer: PropTypes.node,
    loadMore: PropTypes.node,
    dataSource: PropTypes.array,
    itemKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    renderItem: PropTypes.func
  }

  static defaultProps = {
    size: 'default',
    itemKey: 'key'
  }

  constructor(props) {
    super(props);

    this.getSizeName = this.getSizeName.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { size, bordered, dataSource, itemKey, loading } = nextProps;
    if (size !== this.props.size || bordered !== this.props.bordered || itemKey !== this.props.itemKey || loading !== this.props.loading ||
        JSON.stringify(dataSource) !== JSON.stringify(this.props.dataSource)) {
      return true;
    }

    return false;
  }

  renderItem = (data, index) => {
    const { itemKey, renderItem } = this.props;
    let key;

    if (typeof (itemKey) === 'function') {
      key = itemKey(data, index);
    } else if (typeof (itemKey) === 'string' && Object.prototype.toString.call(data).slice(8, -1) === 'Object' && data[key]) {
      key = data[key];
    } else {
      key = `hlrui-list-item-${index}`;
    }

    if (renderItem) {
      return renderItem(data, index, key);
    }

    return (
      <Item key={key}>
        { Object.prototype.toString.call(data).slice(8, -1) === 'Object' ? data.text : data }
      </Item>
    );
  }

  render() {
    const { className, bordered, header, footer, dataSource, direction, renderItem, loadMore, loading, ...others } = this.props;

    const sizeName = this.getSizeName();

    const content = loadMore && dataSource && !!dataSource.length ? (
      <div className="hlrui-list-load-wrap">
        {loading && <Icon type="spinner" className="spinning" size="3x" />}
        {!loading && loadMore}
      </div>
    ) : null;

    delete (others.size);
    delete (others.itemKey);

    return (
      <div
        {...others}
        className={classNames('hlrui-list', {
          [className]: className,
          [`hlrui-list-size-${sizeName}`]: sizeName,
          'hlrui-list-size-border': bordered,
          'hlrui-list-size-with-load-more': loadMore,
          'hlrui-list-size-loading': loading,
        })}
      >
        { header && <div className="hlrui-list-item-header">{header}</div> }
        {
          dataSource && dataSource.map(this.renderItem)
        }
        {content}
        { footer && <div className="hlrui-list-item-footer">{footer}</div> }
      </div>
    );
  }
}

export default List;
