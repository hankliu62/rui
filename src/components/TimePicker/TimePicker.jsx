import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import $ from '../../libs/JQuery';
import '../../deps/clockpicker/jquery-clockpicker.min';
import { Input } from '../Input';
import { Icon } from '../Icon';

import './TimePicker.less';

class TimePicker extends PureComponent {
  static propTypes = {
    className: PropTypes.func,
    onChangeValue: PropTypes.func.isRequired,
    bindRef: PropTypes.func
  }

  static defaultProps = {
    onChangeValue: () => {}
  }

  constructor(props) {
    super(props);

    this.state = {
      time: props.value || ''
    };
  }

  componentDidMount() {
    $(this.timepicker).clockpicker({
      afterDone: this.handChangeValue
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.time !== nextProps.value) {
      this.setState({ time: nextProps.value });
    }
  }

  bindRel = (el) => {
    this.timeInput = el;
    if (this.props.bindRef && typeof (this.props.bindRef) === 'function') {
      this.props.bindRef(el);
    }
  }

  handChangeValue = () => {
    const value = this.timeInput.value;
    this.setState({ time: value });
    this.props.onChangeValue(value);
  }

  render() {
    const { className, ...others } = this.props;
    delete (others.bindRef);
    delete (others.onChangeValue);

    return (
      <div className={classNames('hlrui-timepicker', { [className]: className })} >
        <div className="hlrui-timepicker-input-wrap" ref={el => this.timepicker = el}>
          <Input
            type="text"
            name="time"
            bindRef={this.bindRel}
            suffix={<Icon type="time" />}
            {...others}
          />
        </div>
      </div>
    );
  }
}

export default TimePicker;
