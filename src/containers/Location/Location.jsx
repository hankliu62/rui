import React, { Component } from 'react';

import { Location } from '../../components/Location';

class LocationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      province: { id: '430000', name: '湖南省' },
      city: { id: '431300', name: '娄底市' },
      district: { id: '431302', name: '娄星区' },

      province1: {},
      city1: {},
      district1: {},
    };
  }

  handleChangeLocation = (keySuffix = '') => (payload) => {
    console.log(payload, '------------handleChangeLocation------------');
    const nextState = {};
    for (const key in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) {
        nextState[key + keySuffix] = payload[key];
      }
    }
    this.setState(nextState);
  }

  handleOperateLocationError = (payload) => {
    console.log(payload, '------------handleOpLocationError------------');
  }

  handleChangeState = (payload) => {
    console.log(payload, '------------handleChangeState------------');
    this.setState(payload);
  }

  render() {
    const { province, city, district, province1, city1, district1 } = this.state;

    return (
      <div className="common-main location-main">
        <header className="main-page-header">
          <h1>Location 地址级联</h1>
        </header>

        <div className="main-page-body">
          <div className="location-row-group block-row-group">
            <Location
              province={province}
              city={city}
              district={district}
              onChangeLocation={this.handleChangeLocation()}
              onError={this.handleOperateLocationError}
              onSetState={this.handleChangeState}
              isStatic
            />
          </div>

          <div className="location-row-group block-row-group">
            <Location
              direction="vertical"
              province={province1}
              city={city1}
              district={district1}
              onChangeLocation={this.handleChangeLocation('1')}
              onError={this.handleOperateLocationError}
              onSetState={this.handleChangeState}
              isStatic
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LocationContainer;
