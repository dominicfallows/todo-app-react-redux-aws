import React from 'react';
import FilterButton from './FilterButton';

import "./FilterTodoList.css";

const FilterTodoList = () => (
  <div className="todo-filter mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-color--white">
    Show: {" "}
    <FilterButton filter="all">
      All
    </FilterButton>
    <FilterButton filter="active">
      Active
    </FilterButton>
    <FilterButton filter="completed">
      Completed
    </FilterButton>
  </div>
);

export default FilterTodoList;
