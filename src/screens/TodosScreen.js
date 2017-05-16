import React from 'react';
import PropTypes from 'prop-types'

import AppHeader from '../components/App/AppHeader';
import AppHeaderDrawer from '../components/App/AppHeaderDrawer';
import AppFooter from '../components/App/AppFooter';

import TodoListContainer from '../components/Todos/TodoListContainer';
import AddTodo from '../components/Todos/AddTodo';
import FilterTodoList from '../components/Todos/FilterTodoList';

import "./Screens.css";

const TodosScreen = () => (
  <div className="site-container mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <AppHeader />
    <AppHeaderDrawer />

    <main className="site-main mdl-layout__content">
      <div className="page-content">
        <header>
          <h1>Todos</h1>
        </header>

        <AddTodo />
        <TodoListContainer />
        <FilterTodoList />   
      </div>
    </main>

    <AppFooter />
  </div>
);

TodosScreen.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};

export default TodosScreen;