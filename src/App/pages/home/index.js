import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Layout from '../../components/layout';
import SearchBox from '../../components/searchBox';
import Items from '../../components/items';

import './style.scss';

const Home = () => {
  const CarouselList = [{
    src: '',
    label: '',
  },{
    src: '',
    label: '',
  },{
    src: '',
    label: '',
  }];

  const listItems = [{},{},{},{},{}];

  return (
    <Layout>
      <div className='home-content'>
        <SearchBox />
        <Carousel showThumbs={false}>
          { CarouselList && CarouselList.map((el,k) =>
            <div key={`${k}-carousel`}>
              <img src={el.src || './img/not-photo@2x.svg'} />
              <p className="legend">{el.label}</p>
            </div>
            )
          }
        </Carousel>
        <div className="featured-product">
          <h3 className="featured-product--title">Products destacados</h3>
          <Items list={listItems}/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
