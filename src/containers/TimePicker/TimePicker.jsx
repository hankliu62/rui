import React, { Component } from 'react';

import { TimePicker } from '../../components/TimePicker';

class TimePickerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
      time1: ''
    };
  }

  render() {
    console.log(this.state.time1, this.state.time);

    return (
      <div className="common-main timepicker-main">
        <header className="main-page-header">
          <h1>TimePicker 时间选择器</h1>
        </header>

        <div className="main-page-body">
          <div className="timepicker-row-group block-row-group">
            <TimePicker
              placeholder="请选择时间"
              onChangeValue={time => this.setState({ time })}
            />
          </div>

          <div className="timepicker-row-group block-row-group">
            <TimePicker
              placeholder="请选择时间"
              onChangeValue={time1 => this.setState({ time1 })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TimePickerContainer;
