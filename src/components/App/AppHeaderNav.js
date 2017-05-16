import React from 'react';
import { Link } from 'react-router';

const AppHeaderNav = (props) => (
  <nav className={`mdl-navigation ${props.navClassNames ? props.navClassNames : ""}`}>
    <Link to="/" className="mdl-navigation__link" activeClassName="mdl-navigation__link--current">Home</Link>
    <Link to="/todos" className="mdl-navigation__link" activeClassName="mdl-navigation__link--current">Todos</Link>
  </nav>
);

export default AppHeaderNav;
