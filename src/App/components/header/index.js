import React from 'react';

import './style.scss'

const Header = () => {
  return (
    <header className="header-wp">
      <div className="header-wp__menu">
        <img  className="header-wp__menu--icon icon__x24" src="./icon/menu-24px.svg" />
      </div>
      <div className="header-wp__title">
        <img  className="header-wp__title--logo" src="./img/logo@2x.png" />
      </div>  
      <div className="header-wp__acction">
        <img  className="header-wp__acction--icon icon__x24" src="./icon/shopping_cart-24px.svg" />
        <img  className="header-wp__acction--icon icon__x24" src="./icon/user-24px.svg" />
      </div>
    </header>
  )
};

export default Header;
