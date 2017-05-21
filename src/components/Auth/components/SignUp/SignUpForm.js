import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { escape } from 'validator';

import Form from "components/Shared/Form";

class SignUpForm extends React.Component {

  constructor(props){
    super(props);

    const { user } = this.props;

    this.state = {
      firstname: user.firstname || "",
      lastname: user.lastname || "",
      email: user.username || "",
      password: "",
      passwordConfirm: "",
      newsletterSignUp: false
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleErrorMessage = (name, errorMessage) => {
    this.setState({ [`${name}Error`]: errorMessage });
  }
  
  validateAndSubmit = (formElements) => {
    const { onSubmit } = this.props;

    return onSubmit({
      firstname: escape(this.state.firstname).trim(),
      lastname: escape(this.state.lastname).trim(),
      username: this.state.email.trim(),
      password: this.state.password.trim()
    });
  }

  render = () => {

    const formElements = [
      {
        name: "firstname",
        type: "text",
        label: "First Name",
        value: this.state.firstname,
        onChange: this.handleInputChange,
        errorMessage: this.state.firstnameError,
        validationMessage: "First Name is required",
        required: true
      },
      {
        name: "lastname",
        type: "text",
        label: "Last Name",
        value: this.state.lastname,
        onChange: this.handleInputChange,
        errorMessage: this.state.lastnameError,
        validationMessage: "Last Name is required",
        required: true
      },
      {
        name: "email",
        type: "email",
        label: "Email",
        value: this.state.email,
        onChange: this.handleInputChange,
        errorMessage: this.state.emailError,
        validationMessage: "A valid email is required",
        required: true
      },
      {
        name: "password",
        type: "password",
        label: "Password",
        value: this.state.password,
        onChange: this.handleInputChange,
        errorMessage: this.state.passwordError,
        validationMessage: "Password is required",
        required: true
      },
      {
        name: "passwordConfirm",
        type: "password",
        label: "Confirm your Password",
        value: this.state.passwordConfirm,
        onChange: this.handleInputChange,
        errorMessage: this.state.passwordConfirmError,
        validationMessage: "Password confirm must match the password",
        required: true
      },
      {
        name: "newsletterSignUp",
        type: "checkbox",
        label: "Sign up for newsletter",
        value: this.state.newsletterSignUp,
        onChange: this.handleInputChange,
        errorMessage: null,
        required: true
      }
    ];

    const onSubmitWrapper = () => {
      this.validateAndSubmit(formElements);
    }

    console.log(this.props);

    return (
      <div className="auth-signup mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-color--primary">
          <h3 className="mdl-card__title-text mdl-color-text--white">Please enter your details</h3>
        </div>

        <div className="mdl-card__supporting-text">
          {this.props.errorMessage && <div className="mdl-cell mdl-cell--12-col mdl-color-text--red">{ this.props.errorMessage }</div>}
          
          <Form onSubmit={onSubmitWrapper} handleErrorMessage={this.handleErrorMessage} elements={formElements}>
            <div className="mdl-card__actions mdl-grid">
              <div className="mdl-cell mdl-cell--6-col mdl-cell--2-col-phone mdl-cell--4-col-tablet">
                <button className="mdl-button mdl-button--colored mdl-js-button mdl-button--raised mdl-js-ripple-effect" id="auth_register_submit">Register</button>
              </div>
              <div className="mdl-cell mdl-cell--6-col mdl-cell--2-col-phone mdl-cell--4-col-tablet mdl-textfield--align-right">
                <Link to="/sign-in" className="mdl-button mdl-js-button mdl-js-ripple-effect">Sign In</Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    )
  }
};

SignUpForm.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
  }).isRequired
};

export default SignUpForm;