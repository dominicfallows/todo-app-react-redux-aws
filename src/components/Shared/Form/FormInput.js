import React from 'react';
import PropTypes from 'prop-types';

import "./index.css";

class FormInput extends React.Component {

  constructor(props) {
    super(props);

    let initalState = {};

    switch(props.type) {
      case "checkbox":
        initalState.checkboxChecked = props.value ? "checked" : "";
        break;
      /* case "radio":
        initalState.radioChecked = props.value ? "checked" : "";
        break; */
      default: 
        break;
    }

    this.state = initalState;
  }

  checkBoxClick = (e) => {
    const checkboxParent = this.refs.checkboxParent;
    if(typeof checkboxParent.MaterialCheckbox === "undefined") return;

    if(checkboxParent.classList.contains("is-checked")) {
      checkboxParent.MaterialCheckbox.uncheck();
      this.setState({checkboxChecked: ""});
    } else {
      checkboxParent.MaterialCheckbox.check();
      this.setState({checkboxChecked: true});
    }

    this.props.onChange({
      target: this.refs.checkbox
    });
  }

  /* radioClick = (e) => {
    const radioParent = this.refs.radioParent;
    if(typeof radioParent.MaterialRadio === "undefined") return;

    if(radioParent.classList.contains("is-checked")) {
      radioParent.MaterialRadio.uncheck();
      this.setState({radioChecked: ""});
    } else {
      radioParent.MaterialRadio.check();
      this.setState({radioChecked: true});
    }

    this.props.onChange({
      target: this.refs.radio
    });
  } */

  render() {
    const {type, name, label, value, onChange, errorMessage, required, radioGroup, validationMessage, ...rest} = this.props;
    let requiredAttr = {};

    if(required) {
      requiredAttr["data-required"] = "required";
    }

    if(type==="checkbox") return (
      <div className="mdl-cell mdl-cell--12-col">
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor={name} ref="checkboxParent" onClick={this.checkBoxClick}>
          <input className="mdl-checkbox__input" type={type} name={name} ref="checkbox" value={this.state.checkboxChecked} checked={this.state.checkboxChecked} {...rest} {...requiredAttr} />
          <span className="mdl-checkbox__label">{label}</span>
        </label>
      </div>
    )

    /*if(type==="radio") return (
      <div className="mdl-cell mdl-cell--12-col">
        <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor={name} ref="radioParent" onClick={this.radioClick}>
          <input className="mdl-radio__button" type={type} name={radioGroup} ref="radio" value={this.state.radioChecked} checked={this.state.radioChecked} {...rest} {...requiredAttr} />
          <span className="mdl-radio__label">{label}</span>
        </label>
      </div>
    )*/
  
    return (
      <div className={"mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col" + (value.length > 0 ? " is-focused" : "") }>
        <label className="mdl-textfield__label" htmlFor={name}>
          {label}
        </label>
        <input className="mdl-textfield__input" type={type} name={name} onChange={onChange} value={value} {...rest} {...requiredAttr} />
        <span className="form-field-error">{ errorMessage }</span>
      </div>
    )
  }
};

/* function propRadioGroupRequired(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';

  if (props[propName] && props.type === "radio") {
    let value = props[propName];
    if (typeof value !== 'string') {
      return new Error(propName + ' in ' + componentName + " should be a string");
    }
    
    return value.length > 0 ? null : new Error(propName + ' in ' + componentName + " is required");
  }
} */

FormInput.propTypes = {
  type: PropTypes.oneOf(["text", "password", "number", "email", "checkbox", "radio"]).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  //radioGroup: propRadioGroupRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  validationMessage: PropTypes.string
};

export default FormInput;