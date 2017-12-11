import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Footer.less';

class Footer extends PureComponent {
  static propTypes = {
    beginYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    companyName: PropTypes.string.isRequired,
    icp: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  renderCommonFooter = () => {
    const { beginYear, companyName, icp } = this.props;
    const currentYear = new Date().getFullYear();

    let year = currentYear;
    if (beginYear) {
      year = `${beginYear} - ${year}`;
    }

    return [
      <div key="copyright" className="hlrui-footer-copyright">Copyright &copy; {year} {companyName}</div>,
      <div key="icp" className="hlrui-footer-icp">{icp}</div>
    ];
  }

  render() {
    const { className, children, ...others } = this.props;
    delete (others.beginYear);
    delete (others.companyName);
    delete (others.icp);

    return (
      <footer
        {...others}
        className={classNames('hlrui-footer', {
          [className]: className
        })}
      >
        <div className="hlrui-footer-wrap">
          { children || this.renderCommonFooter() }
        </div>
      </footer>
    );
  }
}

export default Footer;
