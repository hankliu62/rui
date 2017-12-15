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

import './Login.less';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remeber: false
    };
  }

  componentDidMount() {
    // https://github.com/VincentGarreau/particles.js
    window.particlesJS('particles-js', {
      particles: {
        number: { // 点数量
          value: 20,
          density: { // 密度
            enable: true,
            value_area: 1000
          }
        },
        color: { // 点颜色
          value: ['#aaa', '#57c8f1', '#f36b5f', '#ffb40d', '#7ed320'] // 'random'
        },
        shape: { // 点形状
          type: ['circle'],
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: { // 多边形
            nb_sides: 5
          }
        },
        opacity: { // 点透明度
          value: 0.5,
          random: true,
          anim: { // 运动时透明度
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: { // shape大小
          value: 16,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: { // 连线
          enable: true,
          distance: 300,
          color: '#bbb',
          opacity: 0.4,
          width: 1
        },
        move: { // 点移动
          enable: true,
          speed: 2, // 速度
          direction: 'none', // 方向
          random: false,
          straight: false, // 直线
          out_mode: 'out', // 运动出去的模式
          bounce: false, // 反弹
          attract: { // 吸引
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: { // 交互性
        detect_on: 'canvas', // 检测
        events: {
          onhover: {
            enable: false,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: { // 抓住
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          bubble: { // 气泡
            distance: 400, // 距离
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: { // 击退
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }

  render() {
    return (
      <div className="login-main">
        <Header className="login-main-header" logoImage={LogoImage} />

        <div className="login-main-bg" id="particles-js" />

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
