import React from 'react';

import './style.scss'

const SearchBox = () => {
  return (
    <section className="search-wp">
      <div className="search-wp__imput">
        <input className="search-wp__imput--text" type="text" name="search" placeholder="Buscar" />  
        <img  className="search-wp__imput--icon icon__x24" src="./icon/search_24px.svg" />
      </div>
      
    </section>
  )
};

export default SearchBox;
