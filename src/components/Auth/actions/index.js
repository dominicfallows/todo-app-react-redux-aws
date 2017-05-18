import { normalize } from 'normalizr';
import * as schema from './schema';
//import * as AuthApi from '../../api/Auth';
import { getSignInRequestedSelector } from 'selectors/Auth';

export const signInActionCreator = (username) => (dispatch, getState) => {
  if (getSignInRequestedSelector(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: 'AUTH_SIGNIN_REQUEST',
    username,
  });

  /*return todosApi.fetchTodosApi(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response: normalize(response, schema.arrayOfTodos),
      });
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong with fetchTodosActionCreator.',
      });
    }
  );*/
};