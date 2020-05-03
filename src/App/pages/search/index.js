import React, { useContext, useEffect } from 'react';

import AppContext from '../../context/app';

import Layout from '../../components/layout';
import SearchBox from '../../components/searchBox';
import Breadcrumbs from '../../components/breadcrumbs';
import Filter from '../../components/filter';
import Items from '../../components/items';

const Search = (props) => {
  const [ appState ] = useContext(AppContext);

  return (
    <Layout> 
      <div className="search-container">
        <SearchBox />
        <Breadcrumbs />
        <Filter />
        <Items list={appState.resultSearch} />
      </div>
    </Layout>
  );  
};

export default Search;
