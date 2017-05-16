import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import PropTypes from 'prop-types'

import HomeScreen from '../screens/HomeScreen';
import TodosScreen from '../screens/TodosScreen';

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