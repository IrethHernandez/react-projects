import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [data, setData] = useState([])
  const [index, setIndex]	 = useState(0)
  const [loading, setLoading]	 = useState(true)
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    fetch(url).then(resp => resp.json()).then(data => {
      setData(data)
      setLoading(false)
      const companiesArr = [...new Set(data.map(item => item.company))];
      setCompanies(companiesArr);
    })
  }, [])

  return <main>
    <section className='section'>
      <header className='title'>
        <h2>experience</h2>
        <hr className="underline" />
      </header>
      <div className="job-center">
        <aside className='btn-container'>
          {companies?.map((item, idx) => 
            <button className="job-btn" onClick={() => setIndex(idx)}>{item}</button>
          )}
        </aside>
        { !loading ?
          <article className='job-info'>
            <h3>{data[index].title}</h3>
            <h4>{data[index].company}</h4>
            <p className="job-date">{data[index].dates}</p>
            <ul>
              {data[index]?.duties?.map(duty => (
                <li className="job-desc"><FaAngleDoubleRight className='job-icon'/>{duty}</li>
              ))}
            </ul>
          </article> : <h1>Loading...</h1>
        }
          <footer>
            <button type="button" className="btn">more info</button>
          </footer>
      </div>
    </section>
  </main>
}

export default App
