import './CarouselGoods.module.css'
import React from 'react';
import cl from './CarouselGoods.module.css'
import { Carousel } from 'primereact/carousel';
import ProductItem from "../ProductItem/ProductItem";


  const CarouselGoods = ({goods, title}) => {

  const responsiveOptions = [{breakpoint: '1170px', numVisible: 3, numScroll: 1}, {breakpoint: '768px', numVisible: 2, numScroll: 1}, {breakpoint: '420px', numVisible: 1, numScroll: 1}]


  const productTemplate = (product) => {
    return <ProductItem styles={{marginBottom: '15px'}} product={product}/>
  };

  return (
    <div className={cl.main}>
      <h1>{title}</h1>
      <div>
        <div className={cl.desktop}>
          <Carousel value={goods} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
        <div className={cl.mobile}>
          <Carousel value={goods} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="415px" itemTemplate={productTemplate} />
        </div>
      </div>

    </div>
  );
};
export default CarouselGoods;