import React from 'react';

import AppHeaderNav from "./AppHeaderNav";

const AppHeaderDrawer = () => (
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Todo App</span>
    <AppHeaderNav />
  </div>
);

export default AppHeaderDrawer;
