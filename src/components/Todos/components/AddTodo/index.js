import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { addTodoActionCreator } from 'components/Todos/actions';

import "./index.css";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form
      className="todo-add-form mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-color--white" 
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodoActionCreator(input.value));
        input.value = '';
      }}
    >
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input" 
          type="text" 
          id="addTodo" 
          ref={node => { input = node; }}
        />
        <label className="mdl-textfield__label" htmlFor="addTodo">
          <strong>Type new todo</strong> here, then <strong>press enter/return</strong>
        </label>
      </div>
      
    </form>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
