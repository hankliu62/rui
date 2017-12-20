import React, { Component } from 'react';

import { Message } from '../../components/Message';
import { Button } from '../../components/Button';

class MessageContainer extends Component {
  handleShowMessageWithoutDescription = type => () => {
    const funcName = type || 'open';
    Notification.setConfig({ placement: 'topRight' });
    Notification[funcName]({
      message: '诸恶莫作，众善奉行。'
    });
  }

  handleShowMessage = type => () => {
    const funcName = type || 'open';
    Message.setConfig({ placement: 'topRight' });
    Message[funcName]({
      message: '诸恶莫作，众善奉行，自净其意，是诸佛教。'
    });
  }

  handleShowDurationMessage = (duration = 4.5, type) => () => {
    const funcName = type || 'open';
    Message.setConfig({ placement: 'topRight' });
    Message[funcName]({
      duration,
      message: '诸恶莫作，众善奉行，自净其意，是诸佛教。',
    });
  }

  render() {
    return (
      <div className="common-main notification-main">
        <header className="main-page-header">
          <h1>Message 全局提示</h1>
        </header>

        <div className="main-page-body" style={{ fontSize: 14 }}>
          <div className="btns-row-group">
            <Button theme="primary" onClick={this.handleShowMessage()}>Open message box</Button>
          </div>

          <div className="btns-row-group" style={{ marginBottom: 15 }}>
            <Button theme="tblue" onClick={this.handleShowMessage('info')}>info</Button>

            <Button theme="tgreen" onClick={this.handleShowMessage('success')}>success</Button>

            <Button theme="tyellow" onClick={this.handleShowMessage('warning')}>warning</Button>

            <Button theme="tred" onClick={this.handleShowMessage('error')}>error</Button>
          </div>

          <div className="btns-row-group" style={{ marginBottom: 15 }}>
            <Button theme="tblue" onClick={this.handleShowDurationMessage(1, 'info')}>1s later</Button>

            <Button theme="tgreen" onClick={this.handleShowDurationMessage(3, 'success')}>3s later</Button>

            <Button theme="tyellow" onClick={this.handleShowDurationMessage(6, 'warning')}>6s later</Button>

            <Button theme="tred" onClick={this.handleShowDurationMessage(10, 'error')}>10s later</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageContainer;
