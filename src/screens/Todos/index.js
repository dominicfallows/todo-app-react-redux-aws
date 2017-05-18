import React from 'react';
import PropTypes from 'prop-types'

import AddTodo from 'components/Todos/components/AddTodo';
import TodoListContainer from 'components/Todos/components/TodoList';
import FilterTodoList from 'components/Todos/components/FilterTodoList';

import "./index.css";

const Todos = () => (
  <div className="page-content">
    <header>
      <h1>Todos</h1>
    </header>

    <AddTodo />
    <TodoListContainer />
    <FilterTodoList />

  </div>
);

Todos.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};

export default Todos;