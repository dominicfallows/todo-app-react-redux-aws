export const getVisibleTodosSelector = (state, filter) => {
  const ids = state.todos.listByFilter[filter].ids;
  return ids.map(id => state.todos.byId[id]);
};

export const getIsFetchingSelector = (state, filter) => 
  state.todos.listByFilter[filter].isFetching;

export const getErrorMessageSelector = (state, filter) => 
  state.todos.listByFilter[filter].errorMessage;
