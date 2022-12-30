import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaRandom } from 'react-icons/fa';

const Review = () => {
  const [selected, setSelected] = useState(0);
  const {image, job, name, text} = people[selected];

  const next = () => {
    const newSelection = selected + 1;
    if(newSelection > people.length -1){
      setSelected(0);
    }else{
      setSelected(newSelection);
    }
  }

  const prev = () => {
    const newSelection = selected - 1;
    if(newSelection < 0){
      setSelected(people.length - 1);
    }else{
      setSelected(newSelection);
    }
  }

  const random = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === selected) {
      randomNumber = selected + 1;
    }
    if(randomNumber < 0){
      setSelected(people.length - 1);
    }
    if(randomNumber > people.length -1){
      setSelected(0);
    }
    setSelected(randomNumber);
  }

  return <section className='container'>
    <header className='title'>
      <h2>Our Reviews</h2>
      <hr className="underline" />
    </header>
          <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={()=>prev()}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={()=>next()}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={()=>random()}>
        surprise me
      </button>
    </article>
  </section>;
};

export default Review;
