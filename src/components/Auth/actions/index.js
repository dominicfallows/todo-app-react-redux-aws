import * as cognitoApi from "data/AuthApi/cognito";
import { selectAuthRequested } from 'components/Auth/selectors';

export const actionAuthSignUp = (user) => (dispatch, getState) => {
  if (selectAuthRequested(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: 'AUTH_REQUEST_START',
    user,
  });

  return cognitoApi.signUp(user).then(
    response => {
      dispatch({
        type: 'AUTH_SIGNUP_SUCCESS',
        response: response,
      });
    },
    error => {
      dispatch({
        type: 'AUTH_SIGNUP_FAILURE',
        user: user,
        message: error.message || 'Something went wrong with actionAuthSignUp.',
      });
    }
  );
};