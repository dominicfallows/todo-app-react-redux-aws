import React from 'react';

import "./AppFooter.css";

const AppFooter = () => (
  <footer className="app-footer mdl-mega-footer">
    <div className="mdl-mega-footer__bottom-section">

      <div className="mdl-logo">Todo App (React + Redux + AWS) by <a href="https://github.com/dominicfallows" target="_blank">@dominicfallows</a></div>
      <ul className="mdl-mega-footer__link-list">
        <li></li>
        <li><a href="https://github.com/facebookincubator/create-react-app" target="_blank" title="Create React apps with no build configuration">Bootstrapped with Create-React-App</a></li>
        <li><a href="https://github.com/gaearon/todos" target="_blank" title="Idiomatic Redux Example">Inspired by Dan Abramov</a></li>
        <li><a href="https://getmdl.io" target="_blank" title="Material Design Lite">Look and feel thanks to MDL</a></li>
      </ul>
    </div>
  </footer>
);

export default AppFooter;
