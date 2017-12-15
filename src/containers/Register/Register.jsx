import React, { Component } from 'react';
import LogoImage from '@/images/logo.png';
import 'particles.js';

import { Footer } from '../../components/Footer';
// import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Selector } from '../../components/Selector';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { Particles } from '../../components/Particles';
import { AuthCode } from '../../components/AuthCode';

import './Register.less';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    this.phoneNumbers = [
      { text: '+86', value: '+86' },
      { text: '+87', value: '+87' }
    ];

    this.state = {
      remeber: false,
      phoneNumber: this.phoneNumbers[0].value
    };
  }

  fetchAuthCode = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('success');
      }, 1000);
    });
  }

  handleChangeSelector = key => (value) => {
    this.setState({ [key]: value });
  }

  handleBeforeFetchAuthCode = () => {
    return true;
  }

  handleFetchedAuthCode = () => {

  }

  handleFetchAuthCodeError = () => {

  }

  renderPhoneNumber = () => {
    const { phoneNumber } = this.state;

    return (
      <Selector value={phoneNumber} options={this.phoneNumbers} onChange={this.handleChangeSelector('phoneNumber')} size="large" />
    );
  }

  render() {
    return (
      <div className="register-main">
        {/* <Header className="register-main-header" logoImage={LogoImage} /> */}

        <Particles />

        <div className="register-main-body">
          <div className="register-main-body-wrap">
            <div className="body-wrap-top">
              <div className="body-wrap-top-header">
                <a className="top-header-logo" href="/">
                  <img className="logo-image" src={LogoImage} />
                </a>
                <span className="top-header-content">HLRUI Design</span>
              </div>
              <div className="body-wrap-top-desc">HLRUI Design 是&quot;加里敦&quot;大学最具影响力的 Web 设计规范</div>
            </div>
            <div className="body-wrap-mian">
              <h3 className="register-form-title">注册</h3>
              <form className="hlrui-form register-form">
                <div className="hlrui-form-item">
                  <div className="hlrui-form-item-control-wrap">
                    <div className="hlrui-form-item-control">
                      <Input placeholder="邮箱" size="large" />
                    </div>
                  </div>
                </div>

                <div className="hlrui-form-item">
                  <div className="hlrui-form-item-control-wrap">
                    <div className="hlrui-form-item-control">
                      <Input type="password" placeholder="至少6位密码，区分大小写" size="large" />
                    </div>
                  </div>
                </div>

                <div className="hlrui-form-item">
                  <div className="hlrui-form-item-control-wrap">
                    <div className="hlrui-form-item-control">
                      <Input type="password" placeholder="确认密码" size="large" />
                    </div>
                  </div>
                </div>

                <div className="hlrui-form-item">
                  <div className="hlrui-form-item-control-wrap">
                    <div className="hlrui-form-item-control">
                      <Input addonBefore={this.renderPhoneNumber()} placeholder="11位手机号" size="large" />
                    </div>
                  </div>
                </div>

                <div className="hlrui-form-item phone-auth-form-item">
                  <div className="hlrui-form-item-control-wrap">
                    <div className="hlrui-form-item-control">
                      <Input placeholder="验证码" size="large" />

                      <AuthCode
                        theme="default"
                        size="large"
                        seconds={60}
                        fetchAuthCode={this.fetchAuthCode}
                        onBeforeFetch={this.handleBeforeFetchAuthCode}
                        onFetched={this.handleFetchedAuthCode}
                        onError={this.handleFetchAuthCodeError}
                      />
                    </div>
                  </div>
                </div>

                <div className="hlrui-form-item">
                  <div className="hlrui-form-item-control-wrap">
                    <div className="hlrui-form-item-control">
                      <Button className="btn-register" theme="primary" size="large">注 册</Button>

                      <Link className="exist-link" href="/account/login">使用已有账户登录</Link>
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

        <Footer className="register-main-footer" companyName="上海云汐信息科技有限公司" icp="沪ICP备XXXXXXXX号-X" style={{ backgroundColor: 'rgba(0, 0, 0, .32)', color: '#333' }} />
      </div>
    );
  }
}

export default RegisterContainer;
