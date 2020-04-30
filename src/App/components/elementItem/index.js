import React from 'react';
import Items from '../../components/items';

import './style.scss';

const ElementItem = ({ list = []}) => {
  return (
    <div className="item-conteiner">
      <section className="slaider-conteiner">
        <img className="slaider-conteiner__img" 
                 src={'./img/not-photo@2x.svg'}  />
        <br />
        <div className="slaider-conteiner__img--info">4 Fotos</div>
      </section>  
      <section className="items-content">
        <h3 className="items-content__title">Grifería de Lavatorio Puelo Monocomando Puelo</h3>
        <div className="items-content__rating">
            <img className="items-content__rating--star-1"
              src="./icon/star-24px.svg"/>
            <img className="items-content__rating--star-2"
              src="./icon/star-24px.svg"/>
            <img className="items-content__rating--star-3"
              src="./icon/star-24px.svg"/>
            <img className="items-content__rating--star-4"
              src="./icon/star-24px.svg"/>
            <img className="items-content__rating--star-5"
              src="./icon/star-24px.svg"/>
        </div>
        <div className="items-content__price">
            <h2 className="items-content__price--titel">$18.498</h2>
            <span className="items-content__price--state">Stock disponible</span>
        </div><br/>
          <label className="label-amont">Cantitad
            <input className="label-amont--int"
            type="number" defaultValue="1"/>
          </label>
          <label className="label-color">Color
            <input className="label-color--int"
            type="color"/>
          </label>
          <div className="media-conteiner">
            <div className="media-conteiner__cards">
             <h5 className="media-conteiner__title">Medios de Pago</h5>         
               <img  className="media-conteiner__cards--pocket" 
                src="./icon/mask-grup1.svg"/>            
                <img  className="media-conteiner__cards--el1" 
                src="./icon/visa.png"/>             
                <img  className="media-conteiner__cards--el2" 
                src="./icon/mastercard.png" />             
                <img  className="media-conteiner__cards--el2"
                 src="./icon/american.png" />  
                  <br />
              <a className="media-conteiner__cards__footer">
                Mas informacion
              </a>
            </div>
           </div>
           <div className="delive-wrapper">
              <img className="delive-wrapper-icon" src="./icon/local_shipping-24px.svg" />
              <div className="delive-wrapper-text">Entrega a acorde con el vendedor</div>
           </div>
           <input className="input-reservar" type="submit" value="Reservar"/>
           <div className="caracteristicas-wrapper">
             <h5 className="caracteristicas-wrapper--header">Caracteristicas</h5>
           </div>
           <div className="descripcion-wrapper">
             <h5 className="descripcion-wrapper--header">Descripción</h5>
             <div className="descripcion-wrapper--content">
             Diseño de vanguardia, funcional y práctico El control monocomando es un sistema moderno, durable y de fácil instalación. Te permitirá accionar con una sola mano la apertura de caudal, la selección de la temperatura de la mezcla y el cierre. <br /> <br /> Giro que se ajusta a tus necesidades Este grifo es ideal para lavabos grandes o dobles, ya que su giro de 360º te ofrece la flexibilidad que necesitás.
             </div>
           </div>
           <h4 className="prod-title">Otros Productos del vendedor</h4>
           <Items  />
                     
          </section>    
    </div>
  );
};

export default ElementItem;

