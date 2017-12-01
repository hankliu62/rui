import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import classNames from 'classnames';

import './Affix.less';

class Affix extends Component {
  static propTypes = {
    offsetTop: PropTypes.number,
    className: PropTypes.string,
    container: PropTypes.node,
    target: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    offsetTop: 0,
    target: () => window,
    onChange: () => {}
  }

  constructor(props) {
    super(props);

    this.state = {
      affixed: false,
      top: 0,
      left: 0,
      diffTop: 0,
      diffLeft: 0,
      width: 0,
      height: 0,
      containerWidth: 0,
      containerHeight: 0
    };

    this.changeTargetHandler = throttle(this.handleChangeTarget, 25);
  }

  componentDidMount() {
    this.setInitPosition();

    const target = this.props.target();
    if (target) {
      target.addEventListener('resize', this.handleChangeTarget, false);
      target.addEventListener('scroll', this.handleChangeTarget, false);
    }
  }

  componentWillUnmount() {
    const target = this.props.target();
    if (target) {
      target.removeEventListener('resize', this.handleChangeTarget, false);
      target.removeEventListener('scroll', this.handleChangeTarget, false);
    }
  }

  handleChangeTarget = (event) => {
    const container = this.getAffixContainer();
    const { top: containerTop, left: containerLeft } = container.getBoundingClientRect();

    const nextState = {
      top: containerTop + this.state.diffTop,
      left: containerLeft + this.state.diffLeft
    };

    this.setState(nextState);

    if (nextState.top <= this.props.offsetTop) {
      if (!this.state.affixed) {
        this.props.onChange({ affixed: true, event });
      }
      this.setState({ affixed: true });
    }

    if (nextState.top > this.props.offsetTop) {
      if (this.state.affixed) {
        this.props.onChange({ affixed: false, event });
      }
      this.setState({ affixed: false });
    }
  }

  setInitPosition = () => {
    const container = this.getAffixContainer();
    const initState = {
      width: this.affixEl.offsetWidth,
      height: this.affixEl.offsetHeight,
      containerWidth: container.offsetWidth,
      containerHeight: container.offsetHeight
    };

    const containerRect = container.getBoundingClientRect();
    const affixElRect = this.affixEl.getBoundingClientRect();

    const { top, left } = affixElRect;
    const diffTop = top - containerRect.top;
    const diffLeft = left - containerRect.left;


    initState.top = top;
    initState.left = left;
    initState.initTop = top;
    initState.initLeft = left;
    initState.diffTop = diffTop;
    initState.diffLeft = diffLeft;

    this.setState(initState);
  }

  getAffixContainer = () => {
    return this.props.container || document.body;
  }

  getWrapStyle = () => {
    const top = (this.state.top - this.state.diffTop + this.state.containerHeight) - this.state.height;
    let wrapStyle = {};
    if (this.state.top < this.props.offsetTop) {
      wrapStyle = {
        position: 'fixed',
        top: top < 0 ? top : Math.min(top, this.props.offsetTop),
        left: this.state.initLeft,
        width: this.state.width,
        height: this.state.height,
        zIndex: this.props.zIndex,
      };
    }
    return wrapStyle;
  }

  render() {
    const { children, className } = this.props;
    const { height, affixed } = this.state;
    const wrapStyle = this.getWrapStyle();

    return (
      <div ref={el => this.affixEl = el} className={classNames('hlrui-affix', { [className]: className })}>
        <div className={classNames('hlrui-affix-replacement', { hidden: !affixed })} style={{ height }} />
        <div className={classNames('hlrui-affix-wrap', { affixed })} style={wrapStyle}>
          { children && children }
        </div>
      </div>
    );
  }
}

export default Affix;
