import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Meta from './Meta';

import './List.less';

class ListItem extends PureComponent {
  static propTypes = {
    actions: PropTypes.arrayOf(PropTypes.node),
    extra: PropTypes.node,
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
  }

  static defaultProps = {
    direction: 'horizontal'
  }

  renderItemMainContent = () => {
    const { children, actions } = this.props;

    const metaContents = [];
    const otherContents = [];
    React.Children.forEach(children, (element) => {
      if (element && element.type && element.type === Meta) {
        metaContents.push(element);
      } else {
        otherContents.push(element);
      }
    });

    const metas = metaContents.length ? (
      <div className="hlrui-list-item-metas">
        {metaContents}
      </div>
    ) : null;

    const content = otherContents.length ? (
      <div className={classNames('hlrui-list-item-contents')}>
        {otherContents}
      </div>
    ) : null;

    const actionContent = actions && actions.length ? (
      <ul className="hlrui-list-item-actions">
        { actions.map((action, index) => (<li className="hlrui-list-item-actions-item" key={`hlrui-list-item-actions-${index}`}>{action}</li>)) }
      </ul>
    ) : null;

    return [
      metas,
      content,
      actionContent
    ];
  }

  renderExtraContent = () => {
    const { extra } = this.props;

    return (
      <div className="hlrui-list-item-extra-wrap">
        <div className="hlrui-list-item-main">
          {this.renderItemMainContent()}
        </div>
        <div className="hlrui-list-item-extra">{extra}</div>
      </div>
    );
  }

  render() {
    const { className, children, actions, direction, extra, ...others } = this.props;

    return (
      <div
        className={classNames('hlrui-list-item', `hlrui-list-${direction}`, { [className]: className })}
        {...others}
      >
        {extra ? this.renderExtraContent() : this.renderItemMainContent()}
      </div>
    );
  }
}

export default ListItem;
