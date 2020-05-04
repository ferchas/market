import React from 'react'
import './style.scss'

const Mybasket = () => {
    return(<div className="basket-wrp">
        <section className="basket-wrp__top">
          <img className="basket-wrp__top--icon" 
          src="./icon/basket_icon.svg"/>
          <h5 className="basket-wrp__top--title">
           Mi carrito
          </h5>
        </section>
        <section className="basket-wrp__content">
          <div className="basket-wrp__content__left">
            <div className="basket-wrp__content__left--img">
              <img  className="basket-wrp__content__left--img--src" src="#"/>
            </div>
            <div className="basket-wrp__content__left--quality">
              <p className="basket-wrp__content__left--quality--title">Cantitad</p>
              <span className="basket-wrp__content__left--quality--inner">1</span>
              <button className="basket-wrp__content__left--quality--btn">
                  <img src="./icon/btnarrow.svg"/>
              </button>
            </div>
          </div>
          <div className="basket-wrp__content__top">
           <h1 className="basket-wrp__content__top--title">Grifería de Lavatorio Puelo Monocomando Puelo</h1>
           <img className="basket-wrp__content__top--trash" src="./icon/trash_icon.svg"/>
          </div>
          <div className="basket-wrp__content__main">
          </div>
          <hr className="basket-wrp__content--hr"/>            
        </section>
        <div className="basket-wrp__int">
          <input className="basket-wrp__int--cmr" type="button" value="Comprar" />
          <input className="basket-wrp__int--agr" type="button" value="Agregar mas productos" />
        </div>
    </div>
    )
};

export default Mybasket
