import React from 'react';
import { Link } from 'react-router';

import SignUpContainer from "components/Auth/components/SignUp";

const Home = () => (
  <div className="page-content">
    <h1>Welcome</h1>
    <p>Skip straight to <Link to="/todos">Todos</Link> for now.</p>

    <SignUpContainer />
  </div>
);

export default Home;
