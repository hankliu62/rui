
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactSteps from 'rc-steps';

import './Steps.less';

class Steps extends PureComponent {
  static Step = ReactSteps.Step;

  static propTypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    iconPrefix: PropTypes.string,
    current: PropTypes.number,
    status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),
    size: PropTypes.oneOf(['default', 'small']),
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    progressDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
  }

  static defaultProps = {
    prefixCls: 'hlrui-steps',
    iconPrefix: '',
    current: 0,
  }

  render() {
    return <ReactSteps {...this.props} />;
  }
}

export default Steps;
