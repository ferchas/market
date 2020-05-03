import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import searchServices from '../../services/search' ;
import contextSearch from '../../context/search';
import Loading from '../loading';

import './style.scss'

const SearchBox = () => {
  const { hash } = useLocation();
  const [inputSearch, setInputSearch] = useState( hash && hash.replace(/#/gi,'').replace(/%20/gi,' ') || '');
  const [loading, setLoading] = useState(false);
  const { updateData } = contextSearch();
  const history = useHistory();
  

  const handleClick = () => {
    searchProduct()
  };

  const handleChange = e => setInputSearch(e.target.value);

  const handleKeyPress = e => { 
    if (e.which == 13 || e.keyCode == 13) {  
      searchProduct();
      e.target.blur();
    }
  };

  const searchProduct = () => {
    if(inputSearch != '') {
      setLoading(true);
      searchServices.finde(inputSearch).then(res => {
        if(!res.error) {
          updateData({
            searchWord: inputSearch, 
            resultSearch: res && res.data && res.data.search || [],
          });
          history.push(`/search#${inputSearch}`);
        }
        setLoading(false);
      });
    }
  };

  useEffect(() => {  
    searchProduct();
  },[]);

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
