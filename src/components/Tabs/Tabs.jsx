import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactTabs, { TabPane, TabContent } from 'rc-tabs';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import GetSizeName from '../../decorators/GetSizeName';

import './Tabs.less';

const CONSTANTS_TABS_TYPES = ['line', 'card', 'editable-card'];
const CONSTANTS_TABS_POSITIONS = ['top', 'right', 'bottom', 'left'];
const CONSTANTS_TABS_SIZES = ['large', 'default', 'small'];

@GetSizeName
class Tabs extends PureComponent {
  static TabPane = TabPane;

  static propTypes = {
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    type: PropTypes.oneOf(CONSTANTS_TABS_TYPES),
    tabPosition: PropTypes.oneOf(CONSTANTS_TABS_POSITIONS),
    size: PropTypes.oneOf(CONSTANTS_TABS_SIZES),
    tabBarExtraContent: PropTypes.node,
    tabBarStyle: PropTypes.object,
    hideAdd: PropTypes.bool,
    animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
      inkBar: PropTypes.bool,
      tabPane: PropTypes.bool
    })]),
    onChange: PropTypes.func,
    onTabClick: PropTypes.func,
    onPrevClick: PropTypes.func,
    onNextClick: PropTypes.func,
    onEdit: PropTypes.func
  }

  static defaultProps = {
    type: 'line',
    hideAdd: false
  };

  constructor(props) {
    super(props);

    this.getSizeName = this.getSizeName.bind(this);
  }

  render() {
    const { className, activeKey, defaultActiveKey, type, tabPosition, size, tabBarExtraContent,
      tabBarStyle, hideAdd, animated = true, onChange, onTabClick, onPrevClick, onNextClick, onEdit, children, ...others } = this.props;

    const { inkBar: inkBarAnimated, tabPane } = typeof (animated) === 'object' ? animated : { inkBar: !!animated, tabPane: !!animated };
    // card tabs animated props init value is false
    const tabPaneAnimated = type !== 'line' && !('animated' in this.props) ? false : tabPane;

    const renderTabBar = () => (
      <ScrollableInkTabBar
        inkBarAnimated={inkBarAnimated}
        extraContent={tabBarExtraContent}
        onTabClick={onTabClick}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        style={tabBarStyle}
      />
    );

    const sizeName = this.getSizeName();

    return (
      <ReactTabs
        {...others}
        prefixCls="hlrui-tabs"
        className={classNames(`hlrui-tabs-${type}`, {
          [className]: className,
          'hlrui-tabs-vertical': ['left', 'right'].includes(tabPosition),
          'hlrui-tabs-card': type === 'editable-card',
          [`hlrui-tabs-size-${sizeName}`]: !!sizeName,
          'hlrui-tabs-no-animation': !tabPaneAnimated,
        })}
        tabBarPosition={tabPosition}
        renderTabBar={renderTabBar}
        renderTabContent={() => <TabContent animated={tabPaneAnimated} animatedWithMargin />}
        onChange={this.handleChange}
      >
        {children}
      </ReactTabs>
    );
  }
}

export default Tabs;
