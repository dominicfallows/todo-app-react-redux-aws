import { combineReducers } from 'redux';
import signIn from './signIn';

const auth = combineReducers({
  signIn
});

export default auth;
