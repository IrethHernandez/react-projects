import React from 'react';

const Categories = ({cats, showAll, handleFilter}) => {
  return <nav className="btn-container">
  <button type="button" className="filter-btn" onClick={showAll}>All</button>
  {cats.map(cat => <button type="button" className="filter-btn" key={cat} onClick={() => handleFilter(cat)}>{cat}</button>)}
</nav>;
};

export default Categories;
