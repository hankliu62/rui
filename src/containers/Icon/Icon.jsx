import React, { Component } from 'react';
import { chunk } from 'lodash';

import { Icon } from '../../components/Icon';
import icons from './Icon.json';

import './Icon.less';

const DisplayIcon = (props) => {
  const { icon, ...others } = props;

  return (
    <span {...others} className="hlrui-display-icon">
      <span className="hlrui-icon-wrap">
        <Icon type={icon} />
        <span className="hlrui-display-icon-name">{`icon-${icon}`}</span>
      </span>
    </span>
  );
};

class IconContainer extends Component {
  render() {
    const iconsChunks = chunk(icons, 4);

    return (
      <div className="common-main icons-main">
        <header className="main-page-header">
          <h1>Icon 图标(Font Awesome)</h1>
        </header>

        <div className="main-page-body">
          {
            iconsChunks.map((iconsChunk, index) => (
              <div className="icons-row-group" key={`icon-chunk-${index}`}>
                {iconsChunk.map((item, innerIndex) => (<DisplayIcon key={`icon-${index}-${innerIndex}`} icon={item} />))}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default IconContainer;
