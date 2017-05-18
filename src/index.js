import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';
import store from './root/store';

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);