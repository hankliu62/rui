import React, { Component } from 'react';

import { Notification } from '../../components/Notification';
import { Button } from '../../components/Button';

class NotificationContainer extends Component {
  handleShowNotification = type => () => {
    const funcName = type || 'open';
    Notification.setConfig({ placement: 'topRight' });
    Notification[funcName]({
      message: 'Notification Title',
      // description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  }

  handleShowPlacementNotification = (placement, type) => () => {
    const funcName = type || 'open';
    Notification.setConfig({ placement });
    Notification[funcName]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  }

  handleShowDurationNotification = (duration = 4.5, type) => () => {
    const funcName = type || 'open';
    Notification.setConfig({ placement: 'topRight' });
    Notification[funcName]({
      duration,
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  }

  render() {
    return (
      <div className="common-main notification-main">
        <header className="main-page-header">
          <h1>Notification 通知提醒框</h1>
        </header>

        <div className="main-page-body" style={{ fontSize: 14 }}>
          <div style={{ marginBottom: 15 }}>
            <Button theme="primary" onClick={this.handleShowNotification()}>Open the notification box</Button>
          </div>

          <div className="btns-row-group" style={{ marginBottom: 15 }}>
            <Button theme="tblue" onClick={this.handleShowNotification('info')}>info</Button>

            <Button theme="tgreen" onClick={this.handleShowNotification('success')}>success</Button>

            <Button theme="tyellow" onClick={this.handleShowNotification('warning')}>warning</Button>

            <Button theme="tred" onClick={this.handleShowNotification('error')}>error</Button>
          </div>


          <div className="btns-row-group" style={{ marginBottom: 15 }}>
            <Button theme="tblue" onClick={this.handleShowPlacementNotification('topLeft', 'info')}>topLeft</Button>

            <Button theme="tgreen" onClick={this.handleShowPlacementNotification('topRight', 'success')}>topRight</Button>

            <Button theme="tyellow" onClick={this.handleShowPlacementNotification('bottomLeft', 'warning')}>bottomLeft</Button>

            <Button theme="tred" onClick={this.handleShowPlacementNotification('bottomRight', 'error')}>bottomRight</Button>
          </div>

          <div className="btns-row-group" style={{ marginBottom: 15 }}>
            <Button theme="tblue" onClick={this.handleShowDurationNotification(1, 'info')}>1s later</Button>

            <Button theme="tgreen" onClick={this.handleShowDurationNotification(3, 'success')}>3s later</Button>

            <Button theme="tyellow" onClick={this.handleShowDurationNotification(6, 'warning')}>6s later</Button>

            <Button theme="tred" onClick={this.handleShowDurationNotification(10, 'error')}>10s later</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationContainer;
