import React from 'react';
import PropTypes from 'prop-types'

import Todo from './Todo';

import "./TodoList.css";

const TodoList = ({ todos, onTodoClickToggle, onTodoClickDelete }) => (
  <div className="todo-list mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-color--white">
    <ul className="mdl-list">
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo} 
          onClickToggle={() => onTodoClickToggle(todo.id)} 
          onClickDelete={() => onTodoClickDelete(todo.id)} />
      )}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClickToggle: PropTypes.func.isRequired,
  onTodoClickDelete: PropTypes.func.isRequired,
};

export default TodoList;
