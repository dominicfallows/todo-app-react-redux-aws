import React from 'react';
import PropTypes from 'prop-types'

import "./Todo.css";

const Todo = ({ onClickToggle, onClickDelete, completed, text }) => (
  <li className={`todo-list__item mdl-list__item ${completed ? "todo-list__item--completed" : ""}`}>
    <span className="mdl-list__item-primary-content">
      <span className="todo-list__item-toggle" onClick={onClickToggle}>
        <i className="material-icons">{completed ? "check_box" : "check_box_outline_blank"}</i>
      </span>
      {text}
    </span>
    <span className="mdl-list__item-secondary-action">
      
      <span className="todo-list__item-delete" onClick={onClickDelete}>
        <i className="material-icons tiny">delete_forever</i>
      </span>
    </span>
  </li>
);

Todo.propTypes = {
  onClickToggle: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
