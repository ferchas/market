import React from 'react';

import Layout from '../../components/layout';
import Breadcrumbs  from '../../components/breadcrumbs';
import ElementItem from '../../components/elementItem'


import './style.scss';

const Item = () => (
  
  <Layout>
    <div className='item-content'>
      <Breadcrumbs />
      <ElementItem />
    </div>
  </Layout>
)

export default Item;
