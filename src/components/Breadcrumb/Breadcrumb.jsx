import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Breadcrumb.less';

const BreadcrumbTitle = (props) => {
  return (<span className="hlrui-breadcrumb-item-title">{ props.title }</span>);
};

const LinkWrapperTitle = (props) => {
  return (
    <a className="hlrui-breadcrumb-item-link" href={props.link}>
      <BreadcrumbTitle title={props.title} />
    </a>
  );
};

class Breadcrumb extends PureComponent {
  static PropTypes = {
    menus: PropTypes.arrayOf([PropTypes.object, PropTypes.string])
  }

  isObject = (obj) => {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Object';
  }

  render() {
    const { menus } = this.props;

    return (
      <ol className="hlrui-breadcrumb">
        {
          menus && menus.map((menu, index) => {
            const title = this.isObject(menu) ? menu.title : menu;

            return (
              <li className="hlrui-breadcrumb-item" key={title}>
                {
                  (this.isObject(menu) && !!menu.link) ? <LinkWrapperTitle {...menu} /> : <BreadcrumbTitle title={menu} />
                }
                <span className={classNames('hlrui-breadcrumb-item-separator', { hidden: index === menus.length - 1 })}>&gt;</span>
              </li>
            );
          })
        }
      </ol>
    );
  }
}

export default Breadcrumb;
