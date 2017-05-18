import React from 'react';

import HeaderNav from "./Nav";

const HeaderDrawer = () => (
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Todo App</span>
    <HeaderNav />
  </div>
);

export default HeaderDrawer;
