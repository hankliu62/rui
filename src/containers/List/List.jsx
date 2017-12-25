import React, { Component } from 'react';

import { List } from '../../components/List';
import { Avatar } from '../../components/Avatar';
import { Link } from '../../components/Link';
import { Icon } from '../../components/Icon';

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
      data: [
        '仰不愧于天，俯不怍于人。',
        '诸恶莫作，众善奉行，自净其意，是诸佛教。',
        '骤然临之而不惊，无故加之而不怒。',
        '所谓的幸运就是当你准备好了的时候机会来了。',
        '如果一个人对现存的尴尬不愿意承担责任，当然最方便的一个做法就是去抱怨坏运气。',
      ]
    };
  }

  getListData = () => {
    const listData = [];
    for (let i = 0; i < 5; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }

    return listData;
  }

  render() {
    return (
      <div className="common-main list-main">
        <header className="main-page-header">
          <h1>List 列表</h1>
        </header>

        <div className="main-page-body">
          <div className="list-row-group block-row-group">
            <List
              header={<div>心灵</div>}
              footer={<div>鸡汤</div>}
              dataSource={this.state.data}
              bordered
            />
          </div>

          <div className="list-row-group block-row-group">
            <List
              size="small"
              header={<div>心灵</div>}
              footer={<div>鸡汤</div>}
              dataSource={this.state.data}
              bordered
            />
          </div>

          <div className="list-row-group block-row-group">
            <List
              size="large"
              header={<div>心灵</div>}
              footer={<div>鸡汤</div>}
              dataSource={this.state.data}
              bordered
            />
          </div>

          <div className="list-row-group block-row-group">
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

          <div className="list-row-group block-row-group">
            <List
              size="large"
              dataSource={this.getListData()}
              renderItem={item => (
                <List.Item
                  direction="horizontal"
                  key={item.title}
                  actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                  extra={<img width={272} alt="logo" src="http://oi8brjpnx.bkt.clouddn.com/5927bc285919cb0d5e31c4de" />}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
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
