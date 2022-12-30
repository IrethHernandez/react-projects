import React, { useState, useEffect } from 'react';

const Tour = ({info, name, id, price, image, handleDelete, index}) => {
  const [truncate, setTruncate] = useState('')
  const [showMore, setShowMore] = useState(false)

  const truncateString = () => {
    if (info.length > 200) {
      const cutString = info.substring(0, 200) + '...';
      setTruncate(cutString)
    }
  }

  const handleReadMore = () => {
    setTruncate(info);
    setShowMore(true)
  }
  
  const handleShowLess = () => {
    truncateString();
    setShowMore(false)
  }

  useEffect(() => {
    truncateString();
  }, [info])

  return <article className='single-tour' key={id}>
  <img src={image} alt={name} />
  <footer>
    <hgroup className='tour-info'>
      <h4>{name}</h4>
      <h4 className='tour-price'>{price}</h4>
    </hgroup>
    <p>{truncate} 
    {showMore ? <button onClick={handleShowLess}>show less</button> : <button onClick={handleReadMore}>read more</button>}
    </p>
    <button className='delete-btn' onClick={() => handleDelete(id)}>Not Interested</button>
  </footer>
</article>;
};

export default Tour;
