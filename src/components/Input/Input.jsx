import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import GetSizeName from '../../decorators/GetSizeName';

import './Input.less';

@GetSizeName
class Input extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.oneOf(['small', 'default', 'large']),
    disabled: PropTypes.bool,
    style: PropTypes.object,
    addonBefore: PropTypes.node,
    addonAfter: PropTypes.node,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    bindRef: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    style: {},
    bindRef: () => {}
  }

  constructor(props) {
    super(props);

    this.state = {
      focusing: false,
      paddingLeft: 10,
      paddingRight: 10
    };

    this.getSizeName = this.getSizeName.bind(this);
  }

  componentDidMount() {
    this.setInputPadding();
  }

  handleFocusInput = () => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.setState({ focusing: true });
  }

  handleBlurInput = () => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.setState({ focusing: false });
  }

  setInputPadding = () => {
    const { prefix, suffix } = this.props;
    const nextState = {};
    if (prefix) {
      const prefixWidth = this.inputPrefixNode.getBoundingClientRect().width;
      nextState.paddingLeft = prefixWidth + 20;
    }

    if (suffix) {
      const suffixWidth = this.inputSuffixNode.getBoundingClientRect().width;
      nextState.paddingRight = suffixWidth + 20;
    }

    this.setState(nextState);
  }

  getInputClassName = () => {
    const sizeName = this.getSizeName();

    return classNames('hlrui-input', {
      [`hlrui-input-size-${sizeName}`]: sizeName
    });
  }

  getWrapInputChildrenClassName = () => {
    const { prefix, suffix } = this.props;

    if (!prefix && !suffix) {
      return this.getInputClassName();
    }

    const sizeName = this.getSizeName();

    return classNames('hlrui-input-affix-wrapper', {
      [`hlrui-input-affix-wrapper-${sizeName}`]: sizeName
    });
  }

  renderWrapInput = (children) => {
    const { addonBefore, addonAfter, style, className } = this.props;
    const { focusing } = this.state;

    if (!addonBefore && !addonAfter) {
      return children;
    }

    const sizeName = this.getSizeName();

    return (
      <span
        className={classNames('hlrui-input-group-wrapper', {
          [`hlrui-input-group-wrapper-${sizeName}`]: sizeName,
          'hlrui-input-group-wrapper-focus': focusing,
          [className]: className
        })}
        style={style}
      >
        <span className="hlrui-input-wrapper">
          {addonBefore && <span className="hlrui-input-wrapper-addon">{addonBefore}</span>}
          {React.cloneElement(children, { style: null, className: this.getWrapInputChildrenClassName() })}
          {addonAfter && <span ref={el => this.addonAfterNode = el} className="hlrui-input-wrapper-addon">{addonAfter}</span>}
        </span>
      </span>
    );
  }

  renderAffixIpunt = (children) => {
    const { prefix, suffix, style, className } = this.props;
    const { paddingLeft, paddingRight } = this.state;

    if (!prefix && !suffix) {
      return children;
    }

    const sizeName = this.getSizeName();

    return (
      <span
        className={classNames('hlrui-input-affix-wrapper', {
          [className]: className,
          [`hlrui-input-affix-wrapper-${sizeName}`]: sizeName
        })}
        style={style}
      >
        {prefix && <span ref={el => this.inputPrefixNode = el} className="hlrui-input-affix-prefix">{prefix}</span>}
        {React.cloneElement(children, { style: { paddingLeft, paddingRight }, className: this.getInputClassName() })}
        {suffix && <span ref={el => this.inputSuffixNode = el} className="hlrui-input-affix-suffix">{suffix}</span>}
      </span>
    );
  }

  renderInput = () => {
    const { className, size, bindRef, ...others } = this.props;

    delete (others.size);
    delete (others.addonBefore);
    delete (others.addonAfter);
    delete (others.prefix);
    delete (others.suffix);

    return (
      <input
        {...others}
        className={classNames(this.getInputClassName(), {
          [className]: className
        })}
        ref={bindRef}
        onFocus={this.handleFocusInput}
        onBlur={this.handleBlurInput}
      />
    );
  }

  render() {
    const { addonBefore, addonAfter } = this.props;
    const children = this.renderAffixIpunt(this.renderInput());

    if (addonBefore || addonAfter) {
      return this.renderWrapInput(children);
    }

    return children;
  }
}

export default Input;
