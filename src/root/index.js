import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from "react-router";
import PropTypes from 'prop-types';

// Custom browserHistory
import browserHistory from "./browserHistory";

// Import App parent component
import App from "components/App";

// Import child components (screens)
import Home from "screens/Home";
import Todos from "screens/Todos";

// Setup root app, provider and router
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />

        <Route path="/todos(/:filter)" component={Todos} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;