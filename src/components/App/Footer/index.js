import React from 'react';

import "./index.css";

const AppFooter = () => (
  <footer className="app-footer mdl-mini-footer">
    <div className="mdl-mini-footer__left-section">

      <div className="mdl-logo"><a href="https://github.com/dominicfallows/todo-app-react-redux-aws" target="_blank" rel="noopener noreferrer">Todo App (React + Redux + AWS) by @dominicfallows</a></div>
      <ul className="mdl-mini-footer__link-list">
        <li><a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="noopener noreferrer" title="Create React apps with no build configuration">Bootstrapped with Create-React-App</a></li>
        <li><a href="https://github.com/gaearon/todos" target="_blank" rel="noopener noreferrer" title="Idiomatic Redux Example">Inspired by Dan Abramov</a></li>
        <li><a href="https://getmdl.io" target="_blank" rel="noopener noreferrer" title="Material Design Lite">Look and feel thanks to MDL</a></li>
      </ul>
    </div>
  </footer>
);

export default AppFooter;
