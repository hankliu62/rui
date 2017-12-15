import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'rc-tooltip';
import classNames from 'classnames';

import getPlacements from './placements';

import './Tooltip.less';

const CONSTANTS_PLACEMENT = ['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
  'leftTop', 'leftBottom', 'rightTop', 'rightBottom'];

const CONSTANTS_TRIGGER = ['hover', 'focus', 'click'];

const CONSTANTS_THEME = ['default', 'primary', 'tblue', 'tred', 'tyellow', 'tgreen', 'twhite'];

class Tooltip extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    overlayClassName: PropTypes.string,
    openClassName: PropTypes.string,
    theme: PropTypes.oneOf(CONSTANTS_THEME),
    transitionName: PropTypes.string,
    style: PropTypes.object,
    overlayStyle: PropTypes.object,
    builtinPlacements: PropTypes.object,
    overlay: PropTypes.node,
    mouseEnterDelay: PropTypes.number,
    mouseLeaveDelay: PropTypes.number,
    placement: PropTypes.oneOf(CONSTANTS_PLACEMENT),
    trigger: PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => !CONSTANTS_TRIGGER.includes(propValue[key]) && new Error(
      `Invalid prop \`${propFullName}\` supplied to` +
      ` \`${componentName}\`. Validation failed.`
    )),
    visible: PropTypes.bool,
    arrowPointAtCenter: PropTypes.bool,
    autoAdjustOverflow: PropTypes.bool,
    onVisibleChange: PropTypes.func,
    // getTooltipContainer had been rename to getPopupContainer
    getTooltipContainer: PropTypes.func,
    getPopupContainer: PropTypes.func
  }

  static defaultProps = {
    prefixCls: 'hlrui-tooltip',
    openClassName: 'hlrui-tooltip-open',
    onVisibleChange: () => {}
  }

  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({ visible: nextProps.visible });
    }
  }

  handleVisibleChange = (visible) => {
    if (!this.hasNoOverlay()) {
      if (!('visible' in this.props)) {
        this.setState({ visible });
      }

      this.props.onVisibleChange(visible);
    }
  }

  getPopupDomNode = () => {
    return this.tooltip.getPopupDomNode();
  }

  getPlacements = () => {
    const { builtinPlacements, arrowPointAtCenter, autoAdjustOverflow } = this.props;
    if (builtinPlacements) {
      return builtinPlacements;
    }

    return builtinPlacements || getPlacements({
      arrowPointAtCenter,
      verticalArrowShift: 8,
      autoAdjustOverflow,
    });
  }

  hasNoOverlay = () => {
    const { title, overlay } = this.props;

    return !title && !overlay;
  }

  saveTooltip = (node) => {
    this.tooltip = node;
  }

  render() {
    const { prefixCls, title, overlay, openClassName, getPopupContainer, getTooltipContainer, theme, overlayClassName, children, ...others } = this.props;
    let { visible } = this.state;
    // Hide tooltip when there is no title
    if (!('visible' in this.props) && this.hasNoOverlay()) {
      visible = false;
    }

    // React.isValidElement: 用来判断children是否是React组件
    const child = React.isValidElement(children) ? children : <span>{children}</span>;
    const childClassName = classNames(child.className, {
      [openClassName]: visible,
    });

    return (
      <ReactTooltip
        {...others}
        overlayClassName={classNames({
          [overlayClassName]: overlayClassName,
          [`${prefixCls}-theme-${theme}`]: theme,
        })}
        prefixCls={prefixCls}
        getTooltipContainer={getPopupContainer || getTooltipContainer}
        ref={this.saveTooltip}
        builtinPlacements={this.getPlacements()}
        overlay={overlay || title || ''}
        visible={visible}
        onVisibleChange={this.handleVisibleChange}
      >
        {React.cloneElement(child, { className: childClassName })}
      </ReactTooltip>
    );
  }
}

export default Tooltip;

