import React, { useState } from 'react';

const List = ({data}) => {
  const [list, setList] = useState(data)

  const handleClear = (e) => {
    setList([]);
  }

  return (
    <article className="container">
      <header>
        <h3>{list.length} birthdays today</h3>
      </header>
      <ul>
        {list.map(item => 
          <li key={item.id}>
            <figure className="person">
              <img src={item.image} alt={item.name} className='avatar'/>
              <figcaption>
                <h4>{item.name}</h4>
                <p>{item.age} years</p>
              </figcaption>
            </figure>
          </li>)}
      </ul>
      <footer>
        <button onClick={handleClear}>Clear all</button>
      </footer>
    </article>
  );
};

export default List;
