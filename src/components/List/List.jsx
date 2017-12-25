import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ListItem from './ListItem';
import GetSizeName from '../../decorators/GetSizeName';

import './List.less';

@GetSizeName
class List extends PureComponent {
  static propTypes = {
    bordered: PropTypes.bool,
    header: PropTypes.node,
    footer: PropTypes.node,
    dataSource: PropTypes.array,
    pagination: PropTypes.object,
    itemKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    renderItem: PropTypes.func
  }

  static defaultProps = {
    itemKey: 'key'
  }

  constructor(props) {
    super(props);

    this.getSizeName = this.getSizeName.bind(this);
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
      <ListItem key={key}>
        { Object.prototype.toString.call(data).slice(8, -1) === 'Object' ? data.text : data }
      </ListItem>
    );
  }

  render() {
    const { className, bordered, header, footer, dataSource, direction, renderItem, ...others } = this.props;

    const sizeName = this.getSizeName();

    delete (others.size);
    delete (others.itemKey);

    return (
      <div
        {...others}
        className={classNames('hlrui-list', {
          [className]: className,
          [`hlrui-list-size-${sizeName}`]: sizeName,
          'hlrui-list-size-border': bordered
        })}
      >
        { header && <div className="hlrui-list-item hlrui-list-item-header">{header}</div> }
        {
          dataSource && dataSource.map(this.renderItem)
        }
        { footer && <div className="hlrui-list-item hlrui-list-item-footer">{footer}</div> }
      </div>
    );
  }
}

export default List;
