import { v4 } from 'node-uuid';
import { findIndex } from 'lodash';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  todos: [{
    id: v4(),
    text: 'hey',
    completed: true,
  }, {
    id: v4(),
    text: 'ho',
    completed: true,
  }, {
    id: v4(),
    text: 'let’s go',
    completed: false,
  }],
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodosApi = (filter) =>
  delay(250).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed);
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const addTodoApi = (text) =>
  delay(250).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false,
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const deleteTodoApi = (id) =>
  delay(250).then(() => {
    const todoIndex = findIndex(fakeDatabase.todos, function(t) { return t.id === id; });

    if(todoIndex < 0) {
      throw new Error(`Can't find Todo with id ${id}`);
    }

    fakeDatabase.todos.splice(todoIndex, 1);
    return {
      id: id
    }
  });

export const toggleTodoApi = (id) =>
  delay(250).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    console.log(todo);
    return todo;
  });
