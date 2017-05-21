import { combineReducers } from 'redux';

const createSignUpReducer = () => {

  const userInitialState = {
    username: "",
    firstname: "",
    lastname: "",
    signUpSuccess: false,
    userConfirmed: false
  }

  const user = (state = userInitialState, action) => {
    switch(action.type) {
      case 'AUTH_SIGNUP_FAILURE':
        const user = Object.assign({}, action.user);
        delete user.password;
        return user;
      case "AUTH_SIGNUP_SUCCESS":
        if (action.user) {
          return {
            ...action.user,
          };
        }
        return state;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case 'AUTH_SIGNUP_FAILURE':
      case 'AUTH_SIGNIN_FAILURE':
        return action.message;
      case 'AUTH_REQUEST_START':
      case 'AUTH_SIGNUP_SUCCESS':
      case 'AUTH_SIGNIN_SUCCESS':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    user,
    errorMessage,
  });
};

export default createSignUpReducer;