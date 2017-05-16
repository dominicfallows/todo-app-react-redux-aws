import { normalize } from 'normalizr';
import * as schema from './schema';
import * as todosApi from '../../api/Todos';
import { getIsFetchingSelector } from '../../selectors/Todos';

export const fetchTodosActionCreator = (filter) => (dispatch, getState) => {
  if (getIsFetchingSelector(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter,
  });

  return todosApi.fetchTodosApi(filter).then(
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
  );
};

export const addTodoActionCreator = (text) => (dispatch) =>
  todosApi.addTodoApi(text).then(response => {
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });

export const deleteTodoActionCreator = (id) => (dispatch) =>
  todosApi.deleteTodoApi(id).then(
    response => {
      dispatch({
        type: 'DELETE_TODO_SUCCESS',
        response: normalize(response, schema.todo),
      });
    },
    error => {
      dispatch({
        type: 'DELETE_TODO_FAILURE',
        message: error.message || 'Something went wrong with deleteTodoActionCreator.',
      });
    }
  );

export const toggleTodoActionCreator = (id) => (dispatch) =>
  todosApi.toggleTodoApi(id).then(response => {
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });
