import React from 'react';

import './style.scss';

const Items = () =>{
    return (<div className="items-flex">

    <div className="items-wp">
        <a href="#" className="items-wp__liked">
        <img className="items-wp__icon" src="./icon/favorite_border-24px.svg"/>
        </a>
              <img  className="items-wp__img" src="./img/items/Screen Shot 2020-02-08 at 21.09.21.png" />
        <h4 className="items-wp__price">$9800</h4> 
         <p className="items-wp__discribe">Alambre Galvanizado Calibre 12 por Kilo</p>
    </div>
    <div className="items-wp">
        <a href="#" className="items-wp__liked">
        <img className="items-wp__icon" src="./icon/favorite_border-24px.svg"/>
        </a>
              <img  className="items-wp__img" src="./img/items/Screen Shot 2020-02-08 at 21.09.21.png" />
        <h4 className="items-wp__price">$9800</h4> 
         <p className="items-wp__discribe">Alambre Galvanizado Calibre 12 por Kilo</p>
    </div>
    <div className="items-wp">
        <a href="#" className="items-wp__liked">
        <img className="items-wp__icon" src="./icon/favorite_border-24px.svg"/>
        </a>
              <img  className="items-wp__img" src="./img/items/Screen Shot 2020-02-08 at 21.09.21.png" />
        <h4 className="items-wp__price">$9800</h4> 
         <p className="items-wp__discribe">Alambre Galvanizado Calibre 12 por Kilo</p>
    </div>

    </div>

    )
}

export default Items;

