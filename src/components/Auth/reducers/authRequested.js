/**
 * If authRequested state is not false, return the state,
 * otherwise, if the action.type is AUTH_REQUEST_START return true,
 * otherwise, return the state
 */

const authRequested = (state = false, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST_START':
      return true;
    case 'AUTH_SIGNUP_SUCCESS':
    case 'AUTH_SIGNUP_FAILURE':
    case 'AUTH_SIGNIN_SUCCESS':
    case 'AUTH_SIGNIN_FAILURE':
      return false;
    default:
      return state;
  }
}

export default authRequested;