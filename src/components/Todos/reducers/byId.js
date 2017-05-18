const byId = (state = {}, action) => {

  if (typeof action.response === "undefined") {
    return state;
  }

  function removeByKey(obj, deleteKey) {
    return Object.keys(obj)
      .filter(key => key !== deleteKey)
      .reduce((result, current) => {
        result[current] = obj[current];
        return result;
    }, {});
  }

  switch(action.type) {
    case "DELETE_TODO_SUCCESS":
      const newState = removeByKey(state, action.response.result);
      return newState;
    case "FETCH_TODOS_SUCCESS":
    case "ADD_TODO_SUCCESS":
    case "TOGGLE_TODO_SUCCESS":
      if (action.response) {
        return {
          ...state,
          ...action.response.entities.todos,
        };
      }
      return state;
    default:
      return state;
  }
};

export default byId;