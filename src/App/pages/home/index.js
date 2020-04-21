import React from 'react';

import Layout from '../../components/layout';
import SearchBox from '../../components/searchBox';

import './style.scss';

const Home = () => (
  <Layout>
    <div className='home-content'>
      <SearchBox />
      
    </div>
  </Layout>
)

export default Home;
