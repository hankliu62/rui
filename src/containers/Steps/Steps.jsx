import React, { Component } from 'react';

import { Steps, Step } from '../../components/Steps';
import { Icon } from '../../components/Icon';

class StepsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 1
    };
  }

  render() {
    return (
      <div className="common-main steps-main">
        <header className="main-page-header">
          <h1>Steps 步骤条</h1>
        </header>

        <div className="main-page-body">
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>

          <Steps size="small" current={1}>
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
          </Steps>

          <Steps>
            <Step status="finish" title="Login" icon={<Icon type="user" />} />
            <Step status="finish" title="Verification" icon={<Icon type="hdd" />} />
            <Step status="process" title="Pay" icon={<Icon type="credit-card" />} />
            <Step status="wait" title="Done" icon={<Icon type="ok-circle" />} />
          </Steps>

          <Steps current={1} status="error">
            <Step title="Finished" description="This is a description" />
            <Step title="In Process" description="This is a description" />
            <Step title="Waiting" description="This is a description" />
          </Steps>
        </div>
      </div>
    );
  }
}

export default StepsContainer;
