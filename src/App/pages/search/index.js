import React from 'react';

import Layout from '../../components/layout';
import SearchBox from '../../components/searchBox';
import Breadcrumbs from '../../components/breadcrumbs';
// import Items from '../../components/items';

const Search = () => {
  return (
    <Layout> 
      <div className="search-container">
        <SearchBox />
        <Breadcrumbs />
        {/* <Items list={[]} /> */}
      </div>
    </Layout>
  );  
};

export default Search;
