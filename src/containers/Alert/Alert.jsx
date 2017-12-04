import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Alert } from '../../components/Alert';

import './Alert.less';

class AlertContainer extends Component {
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
      <div className="common-main alert-main">
        <header className="main-page-header">
          <h1>Alert 警告</h1>
        </header>

        <div className="main-page-body">
          <Alert message="Success Text" type="success" />

          <Alert message="Info Text" type="info" />

          <Alert message="Warning Text" type="warning" />

          <Alert message="Error Text" type="error" />


          <Alert
            message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
            type="warning"
            closable
            onClose={this.handleClose}
          />

          <Alert
            message="Error Text"
            description="Error Description Error Description Error Description Error Description Error Description Error Description"
            type="error"
            closable
            onClose={this.handleClose}
          />


          <Alert message="Success Tips" type="success" showIcon />

          <Alert message="Informational Notes" type="info" showIcon />

          <Alert message="Warning" type="warning" showIcon />

          <Alert message="Error" type="error" showIcon />

          <Alert
            message="success tips"
            description="Detailed description and advices about successful copywriting."
            type="success"
            showIcon
            closable
            onClose={this.handleClose}
          />

          <Alert
            message="Informational Notes"
            description="Additional description and informations about copywriting."
            type="info"
            showIcon
          />

          <Alert
            message="Warning"
            description="This is a warning notice about copywriting."
            type="warning"
            showIcon
          />

          <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />

        </div>
      </div>
    );
  }
}

export default AlertContainer;
