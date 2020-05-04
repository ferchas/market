import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AppProvider } from './context/app';
import Home from './pages/home';
import Search from './pages/search';
import Basket from './pages/basket';


import './style.scss';

const App = () => (
  <AppProvider>
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/search' component={Search} /> 
      <Route exact path='/basket' component={Basket} />   
    </Router>
  </AppProvider>
);

export default App;
