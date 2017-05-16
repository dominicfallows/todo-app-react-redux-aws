import { combineReducers } from 'redux';

// Import each of your module reducers
import todos from './Todos';

// Combine your module reducers into the app root reducer
const rootReducer = combineReducers({
  todos
});

export default rootReducer;