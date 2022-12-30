import React, { useState } from 'react';
import data from './data';
function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let paragraphs = +number;
    if (number <= 0) {
      paragraphs = 0;
    }
    if (number > 8) {
      paragraphs = 8;
    }
    setText(data.slice(0, paragraphs));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='paragraphs'>paragraphs:</label>
        <input
          type='number'
          name='paragraphs'
          id='paragraphs'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
    )
}

export default App;
