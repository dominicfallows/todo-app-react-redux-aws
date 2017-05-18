import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types'

const FilterButton = ({ filter, children }) => (
  <Link
    to={`/todos/${filter === 'all' ? '' : filter}`}
    className="mdl-button mdl-js-button mdl-js-ripple-effect"
    activeClassName="mdl-button--primary"
  >
    {children}
  </Link>
);

FilterButton.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterButton;
