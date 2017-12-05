import React, { Component } from 'react';

import { Switch } from '../../components/Switch';

import './Switch.less';

class SwitchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      switch1: false,
      switch2: true,
      switch3: false,
    };
  }

  handleChangeSwitch = key => (rate) => {
    this.setState({ [key]: rate });
  }

  render() {
    return (
      <div className="common-main switch-main">
        <header className="main-page-header">
          <h1>Switch 开关</h1>
        </header>

        <div className="main-page-body">
          <div className="switchs-group">
            <Switch
              value={this.state.switch1}
              onChange={this.handleChangeSwitch('switch1')}
              disabled={this.state.disabled}
              checkedChildren="开"
              unCheckedChildren="关"
            />

            <Switch
              value
              onChange={this.handleChangeSwitch('switch1')}
              disabled
            />
          </div>

          <div className="switchs-group">
            <Switch
              value={this.state.switch2}
              onChange={this.handleChangeSwitch('switch2')}
              disabled={this.state.disabled}
              checkedChildren="开"
              unCheckedChildren="关"
              size="large"
            />

            <Switch
              onChange={this.handleChangeSwitch('switch2')}
              disabled
              size="large"
            />
          </div>

          <div className="switchs-group">
            <Switch
              value={this.state.switch3}
              onChange={this.handleChangeSwitch('switch3')}
              disabled={this.state.disabled}
              checkedChildren="开"
              unCheckedChildren="关"
              size="small"
            />

            <Switch
              value
              onChange={this.handleChangeSwitch('switch3')}
              disabled
              size="small"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SwitchContainer;
