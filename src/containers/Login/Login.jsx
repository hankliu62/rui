import React, { Component } from 'react';
import LogoImage from '@/images/logo.png';
import 'particles.js';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Icon } from '../../components/Icon';
import { Link } from '../../components/Link';
import { Particles } from '../../components/Particles';

import './Login.less';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remeber: false
    };
  }

  render() {
    return (
      <div className="login-main">
        <Header className="login-main-header" logoImage={LogoImage} />

        <Particles />

        <div className="login-main-body">
          <div className="login-main-body-wrap">
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
              <form className="hlrui-form login-form">
                <div className="hlrui-form-item">
                  <div className="hlrui-form-item-control-wrap">
                    <div className="hlrui-form-item-control">
                      <Input placeholder="用户名" prefix={<Icon type="user" />} size="large" />
                    </div>
                  </div>
                </div>

                <div className="hlrui-form-item">
                  <div className="hlrui-form-item-control-wrap">
                    <div className="hlrui-form-item-control">
                      <Input type="password" placeholder="密码" prefix={<Icon type="lock" />} size="large" />
                    </div>
                  </div>
                </div>

                <div className="hlrui-form-item">
                  <div className="hlrui-form-item-control-wrap">
                    <div className="hlrui-form-item-control">
                      <Checkbox value={this.state.remeber} onChange={(remeber) => { console.log(remeber); this.setState({ remeber }); }} className="remeber-checkbox">记住我，两周内免登录！</Checkbox>

                      <Link className="forgot-link" href="/">忘记密码</Link>
                    </div>
                  </div>
                </div>

                <div className="hlrui-form-item">
                  <div className="hlrui-form-item-control-wrap">
                    <div className="hlrui-form-item-control">
                      <Button className="btn-login" theme="primary" size="large">登 录</Button>
                    </div>
                  </div>
                </div>

                <div className="hlrui-form-item">
                  <div className="hlrui-form-item-control-wrap">
                    <div className="hlrui-form-item-control">
                      <Link className="register-link" href="/account/register">注册账号</Link>
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

        <Footer className="login-main-footer" companyName="上海云汐信息科技有限公司" icp="沪ICP备XXXXXXXX号-X" style={{ backgroundColor: 'rgba(0, 0, 0, .32)', color: '#333' }} />
      </div>
    );
  }
}

export default LoginContainer;
