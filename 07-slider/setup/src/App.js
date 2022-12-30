import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
const [reviews, setReviews] = useState(data)
const [index, setIndex] = useState(0)

const handlePrev = () => {
  setIndex(index-1)
}

const handleNext = () => {
  setIndex(index+1)
}

useEffect(() => {
  const lastIndex = reviews.length - 1;
  if (index < 0) {
    setIndex(lastIndex);
  }
  if (index > lastIndex) {
    setIndex(0);
  }
}, [index, reviews]);

useEffect(() => {
  let slider = setInterval(() => {
    handleNext()
  }, 5000);
  return () => {
    clearInterval(slider);
  };
}, [index]);

  return <main>
    <section className='section'>
      <header className='title'>
        <h2><span>/</span>reviews</h2>
      </header>
      <div className='section-center'>
        {
          reviews.map((review, reviewIndex) => {
            const {image, name, title, quote, id} = review;
          
            let position = 'nextSlide';
            if (reviewIndex === index) {
              position = 'activeSlide';
            }
            if (
              reviewIndex === index - 1 ||
              (index === 0 && reviewIndex === review.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img"/>
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className='icon'/>
              </article>
            )
          })
        }
      <button className="prev" onClick={handlePrev}><FiChevronLeft/></button>
      <button className="next" onClick={handleNext}><FiChevronRight/></button>
      </div>
    </section>
  </main>;
}

export default App;
