import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'particles.js';

import './Particles.less';

class ParticlesWrap extends PureComponent {
  static propTypes = {
    className: PropTypes.string
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
    const { className, children } = this.props;

    return (
      <div className={classNames('hlrui-particles', { [className]: className })} id="particles-js">
        { children && children }
      </div>
    );
  }
}

export default ParticlesWrap;
