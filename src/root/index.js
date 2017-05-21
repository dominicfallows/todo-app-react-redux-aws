import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from "react-router";
import PropTypes from 'prop-types';

// Custom browserHistory
import browserHistory from "./browserHistory";

// Import App parent component
import App from "components/App";

// Import child components (screens)
import HomeScreen from "screens/Home";
import TodosScreen from "screens/Todos";
import SignUpScreen from "screens/Auth/SignUp";

// Setup root app, provider and router
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeScreen} />

        <Route path="/todos(/:filter)" component={TodosScreen} />
        <Route path="/sign-up" component={SignUpScreen} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;