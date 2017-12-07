import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from '../Button';

import './Exception.less';

class Exception extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    no: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    desc: PropTypes.string,
    showBackBtn: PropTypes.bool,
    showHomepageBtn: PropTypes.bool
  }

  static defaultProps = {
    showBackBtn: false,
    showHomepageBtn: true
  }

  render() {
    const { className, no, desc, showHomepageBtn, showBackBtn } = this.props;

    let icon = this.props.icon;
    if (!icon) {
      switch (+no) {
        case 403: {
          icon = 'http://p0l99ckfs.bkt.clouddn.com/403.svg';
          break;
        }
        case 404: {
          icon = 'http://p0l99ckfs.bkt.clouddn.com/404.svg';
          break;
        }
        case 500: {
          icon = 'http://p0l99ckfs.bkt.clouddn.com/500.svg';
          break;
        }
      }
    }

    return (
      <div className={classNames('hlrui-exception', { [className]: className })}>
        <div className="hlrui-exception-image-wrap">
          <div className="hlrui-exception-image" style={{ backgroundImage: `url(${icon})` }} />
        </div>

        <div className="hlrui-exception-content-wrap">
          <h1 className="hlrui-exception-content-header">{no}</h1>
          { desc && <div className="hlrui-exception-content-desc">{desc}</div> }
          <div className="hlrui-exception-content-action">
            {showHomepageBtn && <Button className="btn-homepage" theme="primary" href="/">返回首页</Button>}
            {showBackBtn && <Button className="btn-back" theme="primary" onClick={() => history.go(-1)}>返回</Button>}
          </div>
        </div>
      </div>
    );
  }
}

export default Exception;
