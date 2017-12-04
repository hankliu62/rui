import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import ReactTooltip from 'react-tooltip';

import './Cascader.less';

class Cascader extends Component {
    static propTypes = {
      subOptionsField: PropTypes.string,
      labelField: PropTypes.string,
      valueField: PropTypes.string,
      disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      placeholder: PropTypes.string,
      filterable: PropTypes.bool,
      options: PropTypes.array.isRequired,
      onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
      filterable: false,
      tooltipable: false,
      labelField: 'text',
      valueField: 'value',
      subOptionsField: 'subOptions'
    }

    constructor(props) {
      super(props);

      const selectedOptionLabel = this.getSelectedOptionLabel(props);

      this.state = {
        isShowDropdown: false,
        search: '',
        selectedOptionLabel,
        checkedValues: props.value || []
      };
    }

    componentDidMount() {
      document.addEventListener('click', this.handleClickDocument, false);
    }

    componentWillReceiveProps(nextProps) {
      const { value } = nextProps;
      if (JSON.stringify(this.props.value) !== JSON.stringify(value)) {
        const selectedOptionLabel = this.getSelectedOptionLabel(nextProps);
        this.setState({ selectedOptionLabel, checkedValues: value || [] });
      }
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClickDocument, false);
    }

    handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value
      });
    }

    handleToggleDropdown = (event) => {
      if (event) {
        event.stopPropagation();
      }

      const { disabled, value } = this.props;

      if (disabled) {
        return;
      }

      this.setState((prevState) => {
        const nextState = {
          isShowDropdown: !prevState.isShowDropdown
        };

        if (nextState.isShowDropdown) {
          nextState.checkedValues = value || [];
        }

        return nextState;
      });
    }

    handleSelectItem = (index, option) => (event) => {
      if (event) {
        event.stopPropagation();
      }

      const { valueField, subOptionsField } = this.props;
      const checkedValues = [...(this.state.checkedValues || [])];

      const value = option[valueField];
      checkedValues.length = index + 1;
      checkedValues[index] = value;

      if (!option[subOptionsField]) {
        this.props.onChange(checkedValues);
        this.handleToggleDropdown();
      } else {
        this.setState({ checkedValues });
      }
    }

    handleClickDocument = (event) => {
      if (!this.isChildOf(event.target, this.selector) && this.state.isShowDropdown) {
        this.handleHiddenDropdown();
      }
    }

    handleHiddenDropdown = () => {
      // // 只显示第一级options
      this.setState({ isShowDropdown: false });
    }

    getSelectedOptionLabel = (props) => {
      const { value, subOptionsField, labelField, valueField, options = [] } = props;
      const selectedOptions = [];

      if (value) {
        let findOptiops = options;
        for (const item of value) {
          const selectedOption = findOptiops.find(option => option[valueField] === item);
          if (!selectedOption) {
            break;
          }

          selectedOptions.push(selectedOption);
          findOptiops = selectedOption[subOptionsField] || [];
        }
      }

      return selectedOptions.length ? selectedOptions.map(option => option[labelField]).join(' > ') : '';
    }

    isChildOf(child, parent) {
      if (child.parentNode === parent) {
        return true;
      }

      if (child.parentNode === null) {
        return false;
      }

      return this.isChildOf(child.parentNode, parent);
    }

    matchSearch = (name) => {
      const q = this.state.search.trim();
      if (q === '') {
        return true;
      }
      if (name.indexOf(q) >= 0) {
        return true;
      }
      return false;
    }

    render() {
      const { subOptionsField, labelField, valueField, disabled, filterable, placeholder, className } = this.props;
      const { options } = this.props;
      const { selectedOptionLabel, isShowDropdown, search, checkedValues } = this.state;

      const displayOptions = [options];

      if (filterable && !!search) {
        displayOptions[0] = options.filter(option => this.matchSearch(option[labelField]));
      }

      let findOptiops = options;
      for (const checkedValue of checkedValues) {
        const checkedOption = findOptiops.find(option => option[valueField] === checkedValue);
        if (!checkedOption) {
          break;
        }

        findOptiops = checkedOption[subOptionsField];
        if (findOptiops) {
          displayOptions.push(findOptiops);
        }
      }


      return (
        <div className={classNames('hlrui-cascader', { [className]: className, disabled, focus: isShowDropdown, 'placeholder-status': !selectedOptionLabel })} ref={el => this.selector = el}>
          <div className="hlrui-cascader-source" onClick={this.handleToggleDropdown}>
            <div
              className="hlrui-cascader-source-control"
              data-for="source"
            >
              { selectedOptionLabel || placeholder }
            </div>
            <i className={classNames('icon-triangle-down', { up: isShowDropdown })} />
          </div>
          { /* tooltipable && <ReactTooltip id="source" place="bottom" type="dark" effect="solid" getContent={() => selectedOptionLabel || ''} /> */}
          {
            isShowDropdown &&
            <div className="hlrui-dropdown-wrapper">
              {
                displayOptions.map((loopOptions, index) => {
                  return (
                    <div key={index} className={classNames('hlrui-dropdown-box', `hlrui-dropdown-box-${index}`)}>
                      {
                        filterable &&
                        <input className="hlrui-dropdown-filter-input u-ipt-box" name="search" type="text" value={search} onChange={this.handleInputChange} />
                      }
                      <div className="hlrui-dropdown-list">
                        <ul>
                          {
                            loopOptions.map(option => (
                              <li
                                className={classNames('hlrui-dropdown-item', {
                                  selected: checkedValues[index] === option[valueField],
                                  'with-sub-options': option[subOptionsField] && option[subOptionsField].length
                                })}
                                key={option[valueField]}
                                onClick={this.handleSelectItem(index, option)}
                                data-for="option"
                                data-tip={option[labelField]}
                              >
                                { option[labelField]}
                              </li>
                            ))
                          }
                        </ul>
                        { /* tooltipable && <ReactTooltip id="option" place="bottom" type="dark" effect="solid" /> */ }
                      </div>
                    </div>
                  );
                })
              }

            </div>
          }
          <div className={classNames('hlrui-mobile-mask hidden', { 'mobile-show': isShowDropdown })} onClick={this.handleHiddenDropdown} />
        </div>
      );
    }
}

export default Cascader;
