import { combineReducers } from 'redux';

const signIn = (username) => {

  const signInRequested = (state = false, action) => {
    if (username !== action.username) {
      return state;
    }

    switch (action.type) {
      case 'AUTH_SIGNIN_REQUEST':
        return true;
      case 'AUTH_SIGNIN_SUCCESS':
      case 'AUTH_SIGNIN_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const details = (state = {}, action) => {

    if (typeof action.response === "undefined") {
      return state;
    }

    switch(action.type) {
      case "AUTH_SIGNOUT_SUCCESS":
        return {};
      case "AUTH_SIGNIN_SUCCESS":
        if (action.response) {
          return {
            ...action.response.entities.user,
          };
        }
        return state;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (username !== action.username) {
      return state;
    }
    switch (action.type) {
      case 'AUTH_SIGNIN_FAILURE':
        return action.message;
      case 'AUTH_SIGNIN_REQUEST':
      case 'AUTH_SIGNIN_SUCCESS':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    signInRequested,
    details,
    errorMessage,
  });
};

export default signIn;