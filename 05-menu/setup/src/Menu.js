import React from 'react';

const Menu = ({img, title, price, desc}) => {
  return <article className="menu-item">
  <img src={img} alt={title} className="photo"/>
  <figure className="item-info">
    <figcaption>
    <header>
      <h4>{title}</h4>
      <h4 className="price">${price}</h4>
    </header>
    <p className="item-text">{desc}</p>
    </figcaption>
  </figure>
</article>
};

export default Menu;
