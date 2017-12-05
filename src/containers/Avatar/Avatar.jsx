import React, { Component } from 'react';

import { Avatar } from '../../components/Avatar';

import QQAvatar from './images/qq-avatar.jpeg';

import './Avatar.less';

class AvatarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      switch1: false,
      switch2: true,
      switch3: false,
    };
  }

  handleChangeAvatar = key => (rate) => {
    this.setState({ [key]: rate });
  }

  render() {
    return (
      <div className="common-main avatar-main">
        <header className="main-page-header">
          <h1>Avatar 开关</h1>
        </header>

        <div className="main-page-body">
          <div className="avatars-group avatars-group-size">
            <Avatar
              icon="user"
              size="large"
            />

            <Avatar
              icon="user"
            />

            <Avatar
              icon="user"
              size="small"
            />
          </div>

          <div className="avatars-group">
            <Avatar
              icon="user"
              size="large"
              shape="square"
            />

            <Avatar
              icon="user"
              shape="square"
            />

            <Avatar
              icon="user"
              size="small"
              shape="square"
            />
          </div>

          <div className="avatars-group">
            <Avatar
              src={QQAvatar}
            />

            <Avatar
              src={QQAvatar}
              shape="square"
            />

            <Avatar theme="tblue">U</Avatar>

            <Avatar theme="tblue" shape="square">U</Avatar>

            <Avatar theme="tred">USER</Avatar>

            <Avatar theme="tred" shape="square">USER</Avatar>

            <Avatar theme="tyellow">Lucy</Avatar>

            <Avatar theme="tyellow" shape="square">Lucy</Avatar>

            <Avatar theme="tgreen">Tom</Avatar>

            <Avatar theme="tgreen" shape="square">Tom</Avatar>

            <Avatar theme="tred" shape="square">Edward</Avatar>

            <Avatar theme="tred">Edward</Avatar>
          </div>
        </div>
      </div>
    );
  }
}

export default AvatarContainer;
