import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const [position, setPosition] = useState({})

  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext()

  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')
    setPosition(location)
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [page, location, links])

  return (
    <aside
      className={`submenu ${isSubmenuOpen ? 'show' : null}`}
      style={{left: position.center, top: position.top}}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
