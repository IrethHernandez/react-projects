import React, {useState, useEffect} from 'react';
import Tour from './Tour';
import Loading from './Loading'
const Tours = ({url}) => {
  const [tours, setTours] = useState([])

  const handleDelete = (item) => {
    const newTours = tours.filter(tour => tour.id !== item);
    setTours(newTours)
  }

  useEffect(() => {
    fetch(url).then(data => data.json()).then(setTours)
  }, [])

  return (
    <main>
      <section>
        {tours ? tours.map(tour => 
          <Tour {...tour} handleDelete={handleDelete} />
        ) : <Loading/>}
      </section>
    </main>
  );
};

export default Tours;
