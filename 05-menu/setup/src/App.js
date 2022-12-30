import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const cats = items.reduce((acc, curr) =>
  !acc.includes(curr.category) ? [...acc, curr.category] : acc
, []);

function App() {
  const [itemsFiltered, setItemsFiltered] = useState(items)

  const showAll = () => {
    setItemsFiltered(items)
  }

  const handleFilter = (category) => {
    setItemsFiltered(items.filter(item => item.category === category))
  }

  return <main>
    <section className="menu section">
      <header className="title">
        <h2>our menu</h2>
        <hr className="underline" />
      </header>
      <Categories cats={cats} handleFilter={handleFilter} showAll={showAll}/>
      <div className="section-center">
        {itemsFiltered.map(item => 
          <Menu {...item} key={item.id}/>
        )}
      </div>;
    </section>
  </main>;
}

export default App;
