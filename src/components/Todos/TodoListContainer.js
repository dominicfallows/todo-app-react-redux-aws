import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types'

// Import the module actions - used by connect() below only
import * as actions from '../../actions/Todos';

// Import selectors
import { getVisibleTodosSelector, getErrorMessageSelector, getIsFetchingSelector } from '../../selectors/Todos';

// Import view components
import TodoList from './TodoList';
import FetchError from './FetchError';

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
        <FetchError
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