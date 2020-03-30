import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';

import './style.scss';

const Layout = (props) => (
  <div className='layout__wrapp'>
    <Header />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
