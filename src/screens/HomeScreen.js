import React from 'react';

import AppHeader from '../components/App/AppHeader';
import AppHeaderDrawer from '../components/App/AppHeaderDrawer';
import AppFooter from '../components/App/AppFooter';

import "./Screens.css";

const HomeScreen = () => (
  <div className="site-container mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <AppHeader />
    <AppHeaderDrawer />

    <main className="site-main mdl-layout__content">
      <div className="page-content">
        <p>Welcome</p>
      </div>
    </main>

    <AppFooter />
  </div>
);

export default HomeScreen;
