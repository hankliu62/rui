import React, { Component } from 'react';

import { Badge } from '../../components/Badge';
import { Avatar } from '../../components/Avatar';
import { Switch } from '../../components/Switch';
import { Button, ButtonGroup } from '../../components/Button';
import { Icon } from '../../components/Icon';

class BadgeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
      show: true
    };
  }

  handleChange = (value) => {
    this.setState({ show: value });
  }

  handleDecline = () => {
    this.setState({ count: this.state.count - 1 > 0 ? this.state.count - 1 : 0 });
  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="common-main badge-main">
        <header className="main-page-header">
          <h1>Badge 徽标</h1>
        </header>

        <div className="main-page-body">
          <div className="badges-row-group">
            <Badge dot />
            <Badge dot>
              <Avatar>USER</Avatar>
            </Badge>

            <Badge dot>
              <Avatar shape="square">USER</Avatar>
            </Badge>
          </div>

          <div className="badges-row-group">
            <Badge count="5" />

            <Badge count="4" style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />

            <Badge count="109" style={{ backgroundColor: '#52c41a' }} />

            <Badge count="5">
              <Avatar theme="tyellow">Lucy</Avatar>
            </Badge>

            <Badge count="5">
              <Avatar theme="tyellow" shape="square">Lucy</Avatar>
            </Badge>

            <Badge count="5">
              <Avatar theme="tgreen" shape="square">Edward</Avatar>
            </Badge>

            <Badge count={99}>
              <Avatar theme="tgreen" shape="square">Edward</Avatar>
            </Badge>

            <Badge count={100}>
              <Avatar theme="tgreen" shape="square">Edward</Avatar>
            </Badge>

            <Badge count={99} overflowCount={10}>
              <Avatar shape="square">Edward</Avatar>
            </Badge>

            <Badge count={1000} overflowCount={999}>
              <Avatar shape="square">Edward</Avatar>
            </Badge>
          </div>

          <div className="badges-row-group">
            <Badge count={this.state.count}>
              <Avatar shape="square" />
            </Badge>

            <ButtonGroup style={{ marginLeft: '15px' }}>
              <Button onClick={this.handleDecline}>
                <Icon type="minus" />
              </Button>
              <Button onClick={this.handleIncrease}>
                <Icon type="plus" />
              </Button>
            </ButtonGroup>
          </div>

          <div className="badges-row-group">
            <Badge dot={this.state.show}>
              <Avatar shape="square" />
            </Badge>

            <Switch onChange={this.handleChange} value={this.state.show} style={{ marginLeft: '15px' }} />
          </div>

          <div className="badges-row-group">
            <Badge status="success" />
            <Badge status="error" />
            <Badge status="default" />
            <Badge status="processing" />
            <Badge status="warning" />

            <br />
            <br />
            <Badge status="success" statusText="Success" />

            <br />
            <br />
            <Badge status="error" statusText="Error" />

            <br />
            <br />
            <Badge status="default" statusText="Default" />

            <br />
            <br />
            <Badge status="processing" statusText="Processing" />

            <br />
            <br />
            <Badge status="warning" statusText="Warning" />
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeContainer;
