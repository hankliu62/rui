import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Steps } from '../../components/Steps';
import { Icon } from '../../components/Icon';

class StepsContainer extends Component {
  static propTypes = {
    content: PropTypes.string
  }

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
            <Steps.Step title="Finished" description="This is a description." />
            <Steps.Step title="In Progress" description="This is a description." />
            <Steps.Step title="Waiting" description="This is a description." />
          </Steps>

          <Steps size="small" current={1}>
            <Steps.Step title="Finished" />
            <Steps.Step title="In Progress" />
            <Steps.Step title="Waiting" />
          </Steps>

          <Steps>
            <Steps.Step status="finish" title="Login" icon={<Icon type="user" />} />
            <Steps.Step status="finish" title="Verification" icon={<Icon type="hdd" />} />
            <Steps.Step status="process" title="Pay" icon={<Icon type="credit-card" />} />
            <Steps.Step status="wait" title="Done" icon={<Icon type="ok-circle" />} />
          </Steps>

          <Steps current={1} status="error">
            <Steps.Step title="Finished" description="This is a description" />
            <Steps.Step title="In Process" description="This is a description" />
            <Steps.Step title="Waiting" description="This is a description" />
          </Steps>
        </div>
      </div>
    );
  }
}

export default StepsContainer;
