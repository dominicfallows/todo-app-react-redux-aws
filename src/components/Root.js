import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from "react-router";
import { createHistory, useBasename } from "history";
import PropTypes from 'prop-types';

// Handle basename in browserHistory - for GitHub Page
let baseName = "/";

if(window.location.href !== "undefined" && window.location.href.indexOf("https://dominicfallows.github.io/todo-app-react-redux-aws/") > -1) {
  baseName = "/todo-app-react-redux-aws"
}
const browserHistory = useBasename(createHistory)({
  basename: baseName
});

// Import Screens ready to route
import HomeScreen from '../screens/HomeScreen';
import TodosScreen from '../screens/TodosScreen';

// Setup root app, provider and router
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HomeScreen}>
        <IndexRoute component={HomeScreen} />
      </Route>
      <Route path="/todos(/:filter)" component={TodosScreen} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;