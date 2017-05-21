import { normalize } from 'normalizr';
import * as schema from './schema';

import * as todosApi from 'data/TodosApi';
import { selectIsFetching } from 'components/Todos/selectors';

export const actionFetchTodos = (filter) => (dispatch, getState) => {
  if (selectIsFetching(getState(), filter)) {
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
        message: error.message || 'Something went wrong with actionFetchTodos.',
      });
    }
  );
};

export const actionAddTodo = (text) => (dispatch) => 
  todosApi.addTodoApi(text).then(response => {
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });

export const actionDeleteTodo = (id) => (dispatch) =>
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
        message: error.message || 'Something went wrong with actionDeleteTodo.',
      });
    }
  );

export const actionToggleTodo = (id) => (dispatch) =>
  todosApi.toggleTodoApi(id).then(response => {
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });