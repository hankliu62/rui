import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash/throttle';

import { Button } from '../Button';
import GetSizeName from '../../decorators/GetSizeName';

import './AuthCode.less';

@GetSizeName
class AuthCode extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    size: PropTypes.string,
    seconds: PropTypes.number, // 倒计时秒数
    fetchAuthCode: PropTypes.func.isRequired, // 已发送API获取到验证码
    onBeforeFetch: PropTypes.func, // 点击发送按钮还未发送API获取验证码
    onFetching: PropTypes.func, // 已发送API还未获取到验证码
    onFetched: PropTypes.func, // 已获取到验证码
    onError: PropTypes.func // 错误处理函数，接收{status: 'error', message: 'xxx'}对象
  }

  static defaultProps = {
    theme: 'tred',
    size: 'default',
    seconds: 120,
    onBeforeFetch: () => { return true; },
    onFetchAuthCode: () => {},
    onFetched: () => {},
    onError: () => { alert('获取短信验证码失败'); }
  }

  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      remainingSeconds: 0
    };

    this.countdownTimer = null;

    this.getSizeName = this.getSizeName.bind(this);
  }

  componentWillUnmount() {
    this.clearCountdownTimer();
  }

  handleClickFetchButton = () => {
    if (this.props.onBeforeFetch()) {
      this.props.fetchAuthCode().then((data) => {
        this.setState({ isFetching: false });
        this.props.onFetched(data);
      }, (err) => {
        this.setState({ isFetching: false });
        this.props.onError(err);
      });

      this.clearCountdownTimer();
      this.genCountdownTimer();
      this.props.onFetching();
      this.setState({ isFetching: true });
    }
  }

  clearCountdownTimer = () => {
    this.setState({ remainingSeconds: 0 });
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  genCountdownTimer = () => {
    const countdownTimer = () => {
      if (this.state.remainingSeconds) {
        const remainingSeconds = this.state.remainingSeconds - 1;
        this.setState({ remainingSeconds });
        this.timer = window.setTimeout(countdownTimer, 1000);
      }
    };

    this.setState({ remainingSeconds: this.props.seconds }, () => window.setTimeout(countdownTimer, 1000));
  }

  render() {
    const { isFetching } = this.state;
    const { className, theme, size } = this.props;

    const sizeName = this.getSizeName();

    return (
      <div className={classNames('hlrui-authcode', { fetching: isFetching, [className]: className, [`hlrui-authcode-size-${sizeName}`]: sizeName, })}>
        {
          !this.state.remainingSeconds &&
            <Button theme={theme} size={size} onClick={throttle(this.handleClickFetchButton, 800)}>获取验证码</Button>
        }
        { !!this.state.remainingSeconds && <div className="hlrui-countdown">{ this.state.remainingSeconds }s</div> }
      </div>
    );
  }
}

export default AuthCode;
