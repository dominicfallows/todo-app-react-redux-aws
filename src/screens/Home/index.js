import React from 'react';
import { Link } from 'react-router';

const HomeScreen = () => (
  <div className="page-content home-content">
    <h1>Welcome</h1>
    <p>Skip straight to <Link to="/todos">Todos</Link> for now.</p>
  </div>
);

export default HomeScreen;
