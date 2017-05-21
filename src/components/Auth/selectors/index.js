export const selectAuthRequested = (state) => 
  state.auth ? state.auth.authRequested : false;

export const selectAuthSignUpErrorMessage = (state) => 
  state.auth ? state.auth.signUp.errorMessage : null;

export const selectAuthSignUpUser = (state) =>
  state.auth ? state.auth.signUp.user : null;