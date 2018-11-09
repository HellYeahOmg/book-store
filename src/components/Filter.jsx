import React from "react";

export const Filter = props => {
  return (
    <div className="filter">
      <div className="filter__type" onClick={props.filterByAll}>
        Все
      </div>
      <div className="filter__type" onClick={props.filterByHighPrice}>
        Цена (дорогие)
      </div>
      <div className="filter__type" onClick={props.filterByLowPrice}>
        Цена (дешевые)
      </div>
      <div className="filter__type" onClick={props.filterByAuthor}>
        Автор
      </div>
    </div>
  );
};
