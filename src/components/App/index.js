import React from 'react';

import Header from './Header';
import HeaderDrawer from './Header/Drawer';
import Footer from './Footer';

import "./index.css";

const App = ({ children }) => (
  <div className="site-container mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header />
    <HeaderDrawer />

    <main className="site-main mdl-layout__content">
      { children }
    </main>

    <Footer />
  </div>
);

export default App;