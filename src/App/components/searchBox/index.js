import React, { useState } from 'react';

import Loading from '../loading';

import './style.scss'

const SearchBox = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    searchProduct()
  };

  const handleChange = e => setInputSearch(e.target.value);

  const handleKeyPress = e => { 
    if (e.which == 13 || e.keyCode == 13) {  
      searchProduct();
    }
  };

  const searchProduct = () => {
    if(inputSearch != '') {
      setLoading(true);
    }
  };

  return (
    <>
      <section className="search-wp">
        <div className="search-wp__imput">
          <input 
            className="search-wp__imput--text"
            type="text"
            name="search"
            placeholder="Buscar"
            value={inputSearch}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />  
          <img  
            className="search-wp__imput--icon icon__x24"
            src="./icon/search_24px.svg"
            onClick={handleClick}
          />
        </div>
      </section>
      { loading &&
        <Loading />
      }
    </>
  )
};

export default SearchBox;
