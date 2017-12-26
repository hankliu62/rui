import React, { Component } from 'react';

import { List } from '../../components/List';
import { Avatar } from '../../components/Avatar';
import { Link } from '../../components/Link';
import { Icon } from '../../components/Icon';
import { Button } from '../../components/Button';
import { Pagination } from '../../components/Pagination';

import AvatarSrc from './images/WechatIMG16.jpeg';

const IconText = ({ type, text }) => {
  return (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
};

class ListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // common list component state
      data: [
        '仰不愧于天，俯不怍于人。',
        '诸恶莫作，众善奉行，自净其意，是诸佛教。',
        '骤然临之而不惊，无故加之而不怒。',
        '所谓的幸运就是当你准备好了的时候机会来了。',
        '如果一个人对现存的尴尬不愿意承担责任，当然最方便的一个做法就是去抱怨坏运气。',
      ],

      // meta list component state
      metaListData: [],

      // pagination list component state
      pageSize: 5,
      currentPage: 1,
      total: -1,
      paginationListData: [],

      // load more list component state
      loadMorePageSize: 5,
      loadMoreCurrentPage: 1,
      loadMoreTotal: -1,
      loadMoreData: [],
      loadMoreLoading: false
    };
  }

  componentDidMount() {
    this.fetchPaginationListData();

    // init metaListData state
    this.getListWithExtraData().then((data) => {
      this.setState({ metaListData: data });
    });

    this.fetchLoadMoreListData();
  }

  fetchPaginationListData = () => {
    const { pageSize, currentPage } = this.state;
    const total = this.state.total === -1 ? Math.floor((Math.random() * 50) + 31) : this.state.total;

    this.getListWithExtraData(pageSize, currentPage).then((data) => {
      this.setState({ paginationListData: data.slice(0, currentPage === Math.ceil(total / pageSize) ? (total % pageSize || pageSize) : pageSize), total });
    });
  }

  fetchLoadMoreListData = () => {
    const { loadMorePageSize, loadMoreCurrentPage, loadMoreData } = this.state;
    const total = this.state.loadMoreTotal === -1 ? Math.floor((Math.random() * 20) + 11) : this.state.loadMoreTotal;

    this.getLoadMoreListData(loadMorePageSize, loadMoreCurrentPage).then((data) => {
      const nextLoadMoreData = data.slice(0, loadMoreCurrentPage === Math.ceil(total / loadMorePageSize) ? (total % loadMorePageSize || loadMorePageSize) : loadMorePageSize);
      this.setState({ loadMoreData: loadMoreData.concat(nextLoadMoreData), loadMoreTotal: total, loadMoreLoading: false });
    });
  }

  handleChangePage = (currentPage) => {
    this.setState({ currentPage }, () => this.fetchPaginationListData());
  }

  handleChangeSize = (pageSize) => {
    this.setState({ currentPage: 1, pageSize }, () => this.fetchPaginationListData());
  }

  handleFetchLoadMoreData = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1, loadMoreLoading: true }, () => this.fetchLoadMoreListData());
  }

  getListWithExtraData = (pageSize = 5, currentPage = 1) => {
    // mock api request
    return new Promise((resolve) => {
      const listData = [];
      const startIndex = ((currentPage - 1) * pageSize) + 1;
      const endIndex = currentPage * pageSize;

      for (let i = startIndex; i <= endIndex; i++) {
        listData.push({
          href: '/homepage',
          title: `明日复明日，明日何其多 ${i}`,
          // avatar: Math.random() > .5 ? '' : 'http://oi8brjpnx.bkt.clouddn.com/5919bc41541a636bc98d0351',
          avatar: 'http://oi8brjpnx.bkt.clouddn.com/5919bc41541a636bc98d0351',
          description: '我们跟所有的人一样，相信（或者希望），未来是完美的，冰箱被塞得满满的，天空是晴朗的，火车是准点的，会议肯定会准时结束的……',
          content: '在时间方面，我们很难得到这样的反馈。在时间上犯了错误，几乎是体会不到任何惩罚的——因为，错过了时间，或者错过了机会的时候，真正要命的是我们往往根本不知道失去的是什么，而我们真的很难对“并不存在”的损失产生巨大的悔意。',
        });
      }

      window.setTimeout(() => resolve(listData), (Math.random() * 1000) + 500);
    });
  }

  getLoadMoreListData = (pageSize = 5, currentPage = 1) => {
    const persons = require('./json/person.json');

    // mock api request
    return new Promise((resolve) => {
      const listData = [];
      const startIndex = ((currentPage - 1) * pageSize) + 1;
      const endIndex = currentPage * pageSize;

      for (let i = startIndex; i <= endIndex; i++) {
        listData.push(persons[Math.floor(Math.random() * persons.length)]);
      }

      window.setTimeout(() => resolve(listData), (Math.random() * 1000) + 500);
    });
  }

  render() {
    const boxStyle = { border: '1px solid #ddd', padding: '50px 20px' };

    return (
      <div className="common-main list-main">
        <header className="main-page-header">
          <h1>List 列表</h1>
        </header>

        <div className="main-page-body">

          <div className="list-row-group block-row-group" style={boxStyle}>
            <List
              header={<div>心灵</div>}
              footer={<div>鸡汤</div>}
              dataSource={this.state.data}
              bordered
            />
          </div>

          <div className="list-row-group block-row-group" style={boxStyle}>
            <List
              size="small"
              header={<div>心灵</div>}
              footer={<div>鸡汤</div>}
              dataSource={this.state.data}
              bordered
            />
          </div>

          <div className="list-row-group block-row-group" style={boxStyle}>
            <List
              size="large"
              header={<div>心灵</div>}
              footer={<div>鸡汤</div>}
              dataSource={this.state.data}
              bordered
            />
          </div>

          <div className="list-row-group block-row-group" style={boxStyle}>
            <List
              dataSource={[
                {
                  title: '所有的傻逼都是自证的 1',
                },
                {
                  title: '所有的傻逼都是自证的 2',
                },
                {
                  title: '所有的傻逼都是自证的 3',
                },
                {
                  title: '所有的傻逼都是自证的 4',
                },
              ]}
              renderItem={item => (
                <List.Item direction="horizontal" key={item.title}>
                  <List.Item.Meta
                    avatar={<Avatar src={AvatarSrc} />}
                    title={<Link href="/">{item.title}</Link>}
                    description="看看每天你做的事儿里，有多少是尽管无趣但却是非常重要的；有多少是非常有趣但却是不重要的。如果，你一整天都在做那些非常重要但可能并无乐趣的事情，那就意味着，你已经完全摆脱了大脑的控制，进而成为大脑的真正主人了。"
                  />
                </List.Item>
              )}
            />
          </div>

          <div className="list-row-group block-row-group" style={boxStyle}>
            <List
              size="large"
              dataSource={this.state.metaListData}
              renderItem={item => (
                <List.Item
                  direction="horizontal"
                  key={item.title}
                  actions={[<IconText type="star" text="156" />, <IconText type="thumbs-up" text="156" />, <IconText type="comment" text="2" />]}
                  extra={<img width={272} alt="logo" src="http://oi8brjpnx.bkt.clouddn.com/5927bc285919cb0d5e31c4de" />}
                >
                  <List.Item.Meta
                    avatar={item.avatar ? <Avatar src={item.avatar} /> : ''}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </div>

          <div className="list-row-group block-row-group" style={boxStyle}>
            <List
              size="large"
              dataSource={this.state.paginationListData}
              footer={
                <Pagination
                  totalRows={this.state.total}
                  pageSize={this.state.pageSize}
                  currentPage={this.state.currentPage}
                  theme="primary"
                  onChangePage={this.handleChangePage}
                  onChangeSize={this.handleChangeSize}
                  showQuickBtn={false}
                />
              }
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[<IconText type="star" text="156" />, <IconText type="thumbs-up" text="156" />, <IconText type="comment" text="2" />]}
                  extra={<img width={272} alt="logo" src="http://oi8brjpnx.bkt.clouddn.com/5927bc285919cb0d5e31c4de" />}
                >
                  <List.Item.Meta
                    avatar={item.avatar ? <Avatar src={item.avatar} /> : ''}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </div>

          <div className="list-row-group block-row-group" style={boxStyle}>
            <List
              dataSource={this.state.loadMoreData}
              loading={this.state.loadMoreLoading}
              loadMore={this.state.loadMoreData.length < this.state.loadMoreTotal ? <Button theme="primary" ghost onClick={this.handleFetchLoadMoreData}>加载更多</Button> : null}
              itemKey={(item, index) => `${item.name.last}${index}`}
              renderItem={(item, _, key) => (
                <List.Item actions={[<Link>edit</Link>, <Link>more</Link>]} direction="horizontal" key={key}>
                  <List.Item.Meta
                    avatar={<Avatar src="http://owgszbgsl.bkt.clouddn.com/avatar_lpy.jpeg" />}
                    title={<a href="/homepage">{item.name.last}</a>}
                    description="我们跟所有的人一样，相信（或者希望），未来是完美的，冰箱被塞得满满的，天空是晴朗的，火车是准点的，会议肯定会准时结束的……"
                  />
                  <div>相信我，你并不孤独</div>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ListContainer;
