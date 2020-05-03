import React, { useState } from 'react';

import searchServices from '../../services/search' ;
import contextSearch from '../../context/search';
import Loading from '../loading';

import './style.scss'

const SearchBox = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const { updateData } = contextSearch();

  const handleClick = () => {
    searchProduct()
  };

  const handleChange = e => setInputSearch(e.target.value);

  const handleKeyPress = e => { 
    if (e.which == 13 || e.keyCode == 13) {  
      searchProduct();
      console.log(e.target);
      e.target.blur();
    }
  };

  const searchProduct = () => {
    if(inputSearch != '') {
      setLoading(true);
      searchServices.finde(inputSearch).then(res => {
        updateData({
          searchWord: inputSearch, 
          resultSearch: res && res.data && res.data.search || [],
        });
        setLoading(false);
      });
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
