export const selectVisibleTodos = (state, filter) => {
  const ids = state.todos.listByFilter[filter].ids;
  return ids.map(id => state.todos.byId[id]);
};

export const selectIsFetching = (state, filter) => 
  state.todos.listByFilter[filter].isFetching;

export const selectErrorMessage = (state, filter) => 
  state.todos.listByFilter[filter].errorMessage;
