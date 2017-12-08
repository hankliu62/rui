import React, { Component } from 'react';
import { chunk } from 'lodash';

import colors from './Color.json';

import './Color.less';

const Color = (props) => {
  const { value, title, ...others } = props;

  return (
    <div {...others} className="hlrui-color" style={{ backgroundColor: value }}>
      {props.title && <h1 className="hlrui-color-title">{title}</h1>}
      <p className="hlrui-color-content">{value}</p>
    </div>
  );
};

class ColorContainer extends Component {
  render() {
    const colorsChunks = chunk(colors, 3);

    return (
      <div className="common-main color-main">
        <header className="main-page-header">
          <h1>Color 开关</h1>
        </header>

        <div className="main-page-body">
          {
            colorsChunks.map((colorsChunk, index) => (
              <div className="colors-row-group" key={`color-chunk-${index}`}>
                {colorsChunk.map((item, innerIndex) => (<Color key={`color-${index}-${innerIndex}`} {...item} />))}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default ColorContainer;
