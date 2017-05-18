import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import * as actions from 'components/Todos/actions';
import { getVisibleTodosSelector, getErrorMessageSelector, getIsFetchingSelector } from 'components/Todos/selectors';
import TodoList from 'components/Todos/components/TodoList/TodoList';
import TodoFetchError from 'components/Todos/components/TodoFetchError';

class TodoListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodosActionCreator } = this.props;
    fetchTodosActionCreator(filter);
  }

  render() {
    const { isFetching, errorMessage, toggleTodoActionCreator, deleteTodoActionCreator, todos } = this.props;
    if (isFetching && !todos.length) {
      return <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>;
    }
    if (errorMessage && !todos.length) {
      return (
        <TodoFetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      );
    }

    return (
      <TodoList
        todos={todos}
        onTodoClickToggle={toggleTodoActionCreator} 
        onTodoClickDelete={deleteTodoActionCreator}
      />
    );
  }
}

TodoListContainer.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  errorMessage: PropTypes.string,
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchTodosActionCreator: PropTypes.func.isRequired,
  toggleTodoActionCreator: PropTypes.func.isRequired,
  deleteTodoActionCreator: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { params }) => {  
  const filter = params.filter || 'all';
  return {
    isFetching: getIsFetchingSelector(state, filter),
    errorMessage: getErrorMessageSelector(state, filter),
    todos: getVisibleTodosSelector(state, filter),
    filter,
  };
};

TodoListContainer = withRouter(connect(
  mapStateToProps,
  actions
)(TodoListContainer));

export default TodoListContainer;