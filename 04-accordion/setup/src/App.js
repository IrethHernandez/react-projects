import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <main>
    <section className='container'>
      <header>
        <h3>questions and answers about login</h3>
      </header>
      <div className="info">
        {data.map(item => <SingleQuestion {...item} key={item.id}/>)}
      </div>
    </section>
  </main>;
}

export default App;
