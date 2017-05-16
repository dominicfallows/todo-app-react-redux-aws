import React from 'react';

import AppHeaderNav from "./AppHeaderNav";

const AppHeader = () => (
  <header className="app-header mdl-layout__header">
    <div className="mdl-layout__header-row">

      <span className="mdl-layout-title">Todo App <small>(React + Redux + AWS)</small></span>
      <div className="mdl-layout-spacer"></div>
      
      <AppHeaderNav navClassNames="mdl-layout--large-screen-only" />
    </div>
  </header>
);

export default AppHeader;
