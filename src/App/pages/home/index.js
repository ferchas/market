import React from 'react';

import Layout from '../../components/layout';
import Search from '../../components/search';

import './style.scss';

const Home = () => (
  <Layout>
    <div className='home-content'>
      <Search />
      
    </div>
  </Layout>
)

export default Home;
