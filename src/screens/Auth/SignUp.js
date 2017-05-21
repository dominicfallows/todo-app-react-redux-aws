import React from 'react';
import PropTypes from 'prop-types'

import SignUpContainer from "components/Auth/components/SignUp";

import "./index.css";

const SignUpScreen = () => (
  <div className="page-content sign-up-content">
    <header>
      <h1>Sign Up</h1>
    </header>
    
    <SignUpContainer />
  </div>
);

SignUpScreen.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};

export default SignUpScreen;