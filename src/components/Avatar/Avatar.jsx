import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Icon } from '../Icon';

import './Avatar.less';

class Avatar extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    src: PropTypes.string,
    theme: PropTypes.string,
    size: PropTypes.oneOf(['large', 'default', 'small']),
    shape: PropTypes.oneOf(['circle', 'square'])
  }

  static defaultProps = {
    size: 'default',
    shape: 'circle'
  }

  constructor(props) {
    super(props);

    this.state = {
      scale: 1,
      isImgExist: true
    };
  }

  componentDidMount() {
    this.setScale();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.children !== this.props.children
      || (prevState.scale !== this.state.scale && this.state.scale === 1)) {
      this.setScale();
    }
  }

  setScale = () => {
    const childrenNode = this.childrenNode;
    if (childrenNode) {
      const childrenNodeWidht = childrenNode.offsetWidth;
      const avatarWidth = this.avatarNode.getBoundingClientRect().width;
      if (avatarWidth - 8 < childrenNodeWidht) {
        this.setState({ scale: (avatarWidth - 8) / childrenNodeWidht });
      } else {
        this.setState({ scale: 1 });
      }
    }
  }

  render() {
    const { className, src, icon, size, shape, theme, ...others } = this.props;
    let children = this.props.children;
    if (src && this.state.isImgExist) {
      children = (<img src={src} onError={() => this.setState({ isImgExist: false })} />);
    } else if (icon) {
      children = typeof (icon) === 'string' ? (<Icon type={icon} />) : icon;
    } else {
      const childrenNode = this.childrenNode;

      if (childrenNode || this.state.scale !== 1) {
        const childrenStyle = {
          msTransform: `scale(${this.state.scale})`,
          WebkitTransform: `scale(${this.state.scale})`,
          transform: `scale(${this.state.scale})`,
          position: 'absolute',
          display: 'inline-block',
          left: `calc(50% - ${Math.round(childrenNode.offsetWidth / 2)}px)`,
        };
        children = (
          <span
            className="hlrui-avatar-string"
            ref={el => this.childrenNode = el}
            style={childrenStyle}
          >
            {children}
          </span>
        );
      } else {
        children = (
          <span className="hlrui-avatar-string" ref={el => this.childrenNode = el}>{children}</span>
        );
      }
    }

    let sizeName = '';
    switch (size) {
      case 'large': {
        sizeName = 'lg';
        break;
      }
      case 'small': {
        sizeName = 'sm';
        break;
      }
    }

    delete (others.children);
    return (
      <div
        {...others}
        className={classNames('hlrui-avatar', {
          [className]: className,
          [`hlrui-avatar-size-${sizeName}`]: sizeName,
          [`hlrui-avatar-shape-${shape}`]: shape !== 'circle',
          [`hlrui-avatar-theme-${theme}`]: theme,
        })}
        ref={el => this.avatarNode = el}
      >
        {children}
      </div>
    );
  }
}

export default Avatar;
