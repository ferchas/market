import React from 'react';

import Layout from '../../components/layout';
import Breadcrumbs from '../../components/breadcrumbs';
import Mybasket from '../../components/mybasket';

const Search = () => {
   return (
    <Layout> 
      <div className="basket-container">
          <Breadcrumbs /> 
          <Mybasket />       
      </div>
    </Layout>
  );  
};

export default Search;