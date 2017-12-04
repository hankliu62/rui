import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Dropzone } from '../../components/Dropzone';

class DropzoneContainer extends Component {
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
      <div className="common-main dropzone-main">
        <header className="main-page-header">
          <h1>Dropzone 拖拽上传</h1>
        </header>

        <div className="main-page-body">
          <Dropzone limit="350" />
        </div>
      </div>
    );
  }
}

export default DropzoneContainer;
