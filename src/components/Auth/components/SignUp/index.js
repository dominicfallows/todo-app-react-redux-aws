import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import * as actions from 'components/Auth/actions';
import { selectAuthRequested, selectAuthSignUpErrorMessage, selectAuthSignUpUser } from 'components/Auth/selectors';

import SignUpForm from 'components/Auth/components/SignUp/SignUpForm';

class SignUpContainer extends Component {

  onSubmit(user) {
    const { actionAuthSignUp } = this.props;
    actionAuthSignUp(user);
  }

  render() {
    const { authRequested, errorMessage, user } = this.props;

    return (
      <SignUpForm
        authRequested={authRequested}
        errorMessage={errorMessage}
        onSubmit={(user) => this.onSubmit(user)}
        user={user}
      />
    )

  }

};

SignUpContainer.propTypes = {
  authRequested: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  actionAuthSignUp: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    signUpSuccess: PropTypes.bool.isRequired,
    userConfirmed: PropTypes.bool.isRequired
  }).isRequired
};

const mapStateToProps = (state, { params }) => {  
  return {
    authRequested: selectAuthRequested(state),
    errorMessage: selectAuthSignUpErrorMessage(state),
    user: selectAuthSignUpUser(state)
  };
};

SignUpContainer = withRouter(connect(
  mapStateToProps,
  actions
)(SignUpContainer));

export default SignUpContainer;