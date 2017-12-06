import React, { Component } from 'react';

import { Input } from '../../components/Input';

class InputContainer extends Component {
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
          <h1>Input 输入框</h1>
        </header>

        <div className="main-page-body">
          <div className="badges-row-group">
            <Input />
          </div>

          <div className="badges-row-group">
            <Input />

            <Input size="small" />

            <Input />
          </div>

          <div className="badges-row-group">
            <Input />
          </div>

          <div className="badges-row-group">
            <Input />
          </div>

          <div className="badges-row-group">
            <Input />
          </div>
        </div>
      </div>
    );
  }
}

export default InputContainer;
