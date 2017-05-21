import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import * as actions from 'components/Todos/actions';
import { selectVisibleTodos, selectErrorMessage, selectIsFetching } from 'components/Todos/selectors';
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
    const { filter, actionFetchTodos } = this.props;
    actionFetchTodos(filter);
  }

  render() {
    const { isFetching, errorMessage, actionToggleTodo, actionDeleteTodo, todos } = this.props;
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
        onTodoClickToggle={actionToggleTodo} 
        onTodoClickDelete={actionDeleteTodo}
      />
    );
  }
}

TodoListContainer.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  errorMessage: PropTypes.string,
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  actionFetchTodos: PropTypes.func.isRequired,
  actionToggleTodo: PropTypes.func.isRequired,
  actionDeleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { params }) => {  
  const filter = params.filter || 'all';
  return {
    isFetching: selectIsFetching(state, filter),
    errorMessage: selectErrorMessage(state, filter),
    todos: selectVisibleTodos(state, filter),
    filter,
  };
};

TodoListContainer = withRouter(connect(
  mapStateToProps,
  actions
)(TodoListContainer));

export default TodoListContainer;