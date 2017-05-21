import { combineReducers } from 'redux';

import authRequested from "./authRequested";
import createSignUpReducer from "./signUp";

const signUp = createSignUpReducer();

const auth = combineReducers({
  authRequested,
  signUp
});

export default auth;