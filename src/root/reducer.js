import { combineReducers } from 'redux';

// Import each of your module reducers
import todos from 'components/Todos/reducers';
import auth from "components/Auth/reducers";

// Combine your module reducers into the app root reducer
const rootReducer = combineReducers({
  todos,
  auth
});

export default rootReducer;