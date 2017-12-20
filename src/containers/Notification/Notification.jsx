import React, { Component } from 'react';

import { Notification } from '../../components/Notification';
import { Button } from '../../components/Button';

class NotificationContainer extends Component {
  handleShowNotificationWithoutDescription = type => () => {
    const funcName = type || 'open';
    Notification.setConfig({ placement: 'topRight' });
    Notification[funcName]({
      message: '仰不愧于天，俯不怍于人。'
    });
  }

  handleShowNotification = type => () => {
    const funcName = type || 'open';
    Notification.setConfig({ placement: 'topRight' });
    Notification[funcName]({
      message: '仰不愧于天，俯不怍于人。',
      description: '仰不愧于天，俯不怍于人是一个汉语词汇，意思是仰起头来看看觉得自己对天无愧，低下头去想想觉得自己不愧于别人。做人要光明磊落，问心无愧。君子坦荡荡。出自《孟子·尽心上》。',
    });
  }

  handleShowPlacementNotification = (placement, type) => () => {
    const funcName = type || 'open';
    Notification.setConfig({ placement });
    Notification[funcName]({
      message: '仰不愧于天，俯不怍于人。',
      description: '仰不愧于天，俯不怍于人是一个汉语词汇，意思是仰起头来看看觉得自己对天无愧，低下头去想想觉得自己不愧于别人。做人要光明磊落，问心无愧。君子坦荡荡。出自《孟子·尽心上》。',
    });
  }

  handleShowDurationNotification = (duration = 4.5, type) => () => {
    const funcName = type || 'open';
    Notification.setConfig({ placement: 'topRight' });
    Notification[funcName]({
      duration,
      message: '仰不愧于天，俯不怍于人。',
      description: '仰不愧于天，俯不怍于人是一个汉语词汇，意思是仰起头来看看觉得自己对天无愧，低下头去想想觉得自己不愧于别人。做人要光明磊落，问心无愧。君子坦荡荡。出自《孟子·尽心上》。',
    });
  }

  render() {
    return (
      <div className="common-main notification-main">
        <header className="main-page-header">
          <h1>Notification 通知提醒框</h1>
        </header>

        <div className="main-page-body" style={{ fontSize: 14 }}>
          <div className="btns-row-group">
            <Button theme="primary" onClick={this.handleShowNotificationWithoutDescription()}>Without description</Button>

            <Button theme="tblue" onClick={this.handleShowNotificationWithoutDescription('info')}>Without description info</Button>

            <Button theme="tgreen" onClick={this.handleShowNotificationWithoutDescription('success')}>Without description success</Button>

            <Button theme="tyellow" onClick={this.handleShowNotificationWithoutDescription('warning')}>Without description warning</Button>

            <Button theme="tred" onClick={this.handleShowNotificationWithoutDescription('error')}>Without description error</Button>
          </div>

          <div className="btns-row-group">
            <Button theme="primary" onClick={this.handleShowNotification()}>With description</Button>
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
