import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Meta from './Meta';
import { Divider } from '../Divider';

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
    let hasAvatarMeta = false;
    React.Children.forEach(children, (element) => {
      if (element && element.type && element.type === Meta) {
        metaContents.push(element);
        if (element.props && !!element.props.avatar) {
          hasAvatarMeta = true;
        }
      } else {
        otherContents.push(element);
      }
    });

    const metas = metaContents.length ? (
      <div className={classNames('hlrui-list-item-metas', { 'hlrui-list-item-metas-with-avatar': hasAvatarMeta })} key="hlrui-list-item-main-1">
        {metaContents}
      </div>
    ) : null;

    const content = otherContents.length ? (
      <div className={classNames('hlrui-list-item-contents')} key="hlrui-list-item-main-2">
        {otherContents}
      </div>
    ) : null;

    const actionContent = actions && actions.length ? (
      <ul className="hlrui-list-item-actions" key="hlrui-list-item-main-3">
        { actions.map((action, index) => (
          <li className="hlrui-list-item-actions-item" key={`hlrui-list-item-actions-${index}`}>
            {action}
            { index !== actions.length - 1 && <Divider direction="vertical" /> }
          </li>
        )) }
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
