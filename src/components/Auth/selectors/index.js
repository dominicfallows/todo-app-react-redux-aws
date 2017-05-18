export const getUserSignInDetailsSelector = (state) => 
  state.auth.signIn.details;

export const getSignInRequestedSelector = (state) => 
  state.auth.user.signInRequested;

export const getSignInErrorMessageSelector = (state) => 
  state.auth.signIn.errorMessage;
