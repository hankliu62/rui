import React, { Component } from 'react';

import { Timeline, TimelineItem } from '../../components/Timeline';
import { Link } from '../../components/Link';
import { Icon } from '../../components/Icon';

class TimelineContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSize: 10,
      currentPage: 1
    };
  }

  handleChangePage = (currentPage) => {
    this.setState({ currentPage });
  }

  handleChangeSize = (pageSize) => {
    this.setState({ currentPage: 1, pageSize });
  }

  render() {
    return (
      <div className="common-main timeline-main">
        <header className="main-page-header">
          <h1>Timeline 时间轴</h1>
        </header>

        <div className="main-page-body">
          <div className="timelines-row-group block-row-group">
            <Timeline>
              <TimelineItem>创建服务站点 2015-09-01</TimelineItem>
              <TimelineItem>解决网络初始化问题 2015-09-01</TimelineItem>
              <TimelineItem>技术测试 2015-09-01</TimelineItem>
              <TimelineItem>网络问题已被解决 2015-09-01</TimelineItem>
            </Timeline>
          </div>

          <div className="timelines-row-group block-row-group">
            <Timeline theme="primary">
              <TimelineItem>创建服务站点 2015-09-01</TimelineItem>
              <TimelineItem>解决网络初始化问题 2015-09-01</TimelineItem>
              <TimelineItem theme="tgreen">技术测试 2015-09-01</TimelineItem>
              <TimelineItem>网络问题已被解决 2015-09-01</TimelineItem>
            </Timeline>
          </div>

          <div className="timelines-row-group block-row-group">
            <Timeline>
              <TimelineItem theme="tgreen">创建服务站点 2015-09-01</TimelineItem>
              <TimelineItem theme="tgreen">解决网络初始化问题 2015-09-01</TimelineItem>
              <TimelineItem theme="tyellow">
                <p>技术测试1 2015-09-01</p>
                <p>技术测试2 2015-09-01</p>
                <p>技术测试3 2015-09-01</p>
              </TimelineItem>
              <TimelineItem theme="tred">网络问题已被解决 2015-09-01</TimelineItem>
            </Timeline>
          </div>

          <div className="timelines-row-group block-row-group">
            <Timeline pending={<Link>查看更多</Link>}>
              <TimelineItem>创建服务站点 2015-09-01</TimelineItem>
              <TimelineItem>解决网络初始化问题 2015-09-01</TimelineItem>
              <TimelineItem>技术测试 2015-09-01</TimelineItem>
              <TimelineItem>网络问题已被解决 2015-09-01</TimelineItem>
            </Timeline>
          </div>

          <div className="timelines-row-group block-row-group">
            <Timeline>
              <TimelineItem>创建服务站点 2015-09-01</TimelineItem>
              <TimelineItem theme="tred" dot={<Icon type="time" style={{ fontSize: '16px' }} />}>解决网络初始化问题 2015-09-01</TimelineItem>
              <TimelineItem>技术测试 2015-09-01</TimelineItem>
              <TimelineItem>网络问题已被解决 2015-09-01</TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelineContainer;
