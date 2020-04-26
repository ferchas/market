import React from 'react';

import './style.scss';

const Items = ({ list = []}) => {
  return (
    <div className="items-conteiner">
      { list.map((elem,k) => (
        <div className="items-wp">
        <a href="#" className="items-wp--liked">
          <img className="items-wp--icon" src="./icon/favorite_border-24px.svg"/>
        </a>
        <div  className="items-wp__img-box" >
          <img  className="items-wp__img-box--src" src={elem.img || './img/not-photo@2x.svg'} />
        </div>
        <h4 className="items-wp__price">$9800</h4> 
        <p className="items-wp__discribe">Alambre Galvanizado Calibre 12 por Kilo</p>
        </div>
       )) 
      }
    </div>
  );
};

export default Items;





