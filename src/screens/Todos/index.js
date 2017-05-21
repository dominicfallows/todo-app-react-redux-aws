import React from 'react';
import PropTypes from 'prop-types'

import AddTodo from 'components/Todos/components/AddTodo';
import TodoListContainer from 'components/Todos/components/TodoList';
import FilterTodoList from 'components/Todos/components/FilterTodoList';

import "./index.css";

const TodosScreen = () => (
  <div className="page-content todos-content">
    <header>
      <h1>Todos</h1>
    </header>

    <AddTodo />
    <TodoListContainer />
    <FilterTodoList />

  </div>
);

TodosScreen.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};

export default TodosScreen;