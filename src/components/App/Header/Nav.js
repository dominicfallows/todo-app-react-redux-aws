import React from 'react';
import { Link } from 'react-router';

const HeaderNav = (props) => (
  <nav className={`mdl-navigation ${props.navClassNames ? props.navClassNames : ""}`}>
    <Link to="/" className="mdl-navigation__link" activeClassName="mdl-navigation__link--current">Home</Link>
    <Link to="/sign-up" className="mdl-navigation__link" activeClassName="mdl-navigation__link--current">Sign Up</Link>
    <Link to="/sign-in" className="mdl-navigation__link" activeClassName="mdl-navigation__link--current">Sign In</Link>
    <Link to="/todos" className="mdl-navigation__link" activeClassName="mdl-navigation__link--current">Todos</Link>
  </nav>
);

export default HeaderNav;
