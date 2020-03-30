import React from 'react';

import './style.scss'

const Header = () => {
  return (
    <header>
      <div className="header__menu">
      </div>
      <div className="header__title">
        <img  className="header__acction--icon" src="./img/logo@2x.png" />
      </div>  
      <div className="header__acction">
        <img  className="header__acction--icon" src="./icon/shopping_cart-24px.svg" />
      </div>
    </header>
  )
};

export default Header;
