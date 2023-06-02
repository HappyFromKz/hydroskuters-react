import bag from "C:/projects/react/hydroskuters-react/src/assets/popularGoods/bag.png";
import jilet from "C:/projects/react/hydroskuters-react/src/assets/popularGoods/jilet.png";
import airpods from "C:/projects/react/hydroskuters-react/src/assets/popularGoods/airpods.png";
import verevka from "C:/projects/react/hydroskuters-react/src/assets/popularGoods/verevka.png";
import manCastum from "C:/projects/react/hydroskuters-react/src/assets/popularGoods/manCastum.png";

import './PopularGoods.module.css'
import React from 'react';
import cl from './PopularGoods.module.css'
import { Carousel } from 'primereact/carousel';
import MyButton from "../../UI/MyButton/MyButton";
import MyPicture from "../../UI/MyPicture/MyPicture";
import {useNavigate} from "react-router-dom";
import ProductItem from "../../UI/ProductItem/ProductItem";

const PopularGoods = () => {
  const goods = [{id: 1, name: 'Водонепроницаемый Рюкзак', path: 'bag', pic: bag, isSale: false, isLiked: true, price: 9800, count: 2},
    {id: 2, name: 'Спасательный жилет BRP Men\'s Airflow PFD', path: 'jilet', pic: jilet, isSale: true, isLiked: false, price: 6900, count: 2},
    {id: 3, name: 'BRP Audio-Premium System', path: 'airpods', pic: airpods, isSale: false, isLiked: true, price: 68000, count: 1},
    {id: 4, name: 'Спасательное снаряжение', path: 'verevka', pic: verevka, isSale: true, isLiked: false, price: 800, count: 0},
    {id: 5, name: 'Мужской костюм 3мм', path: 'manCastum', pic: manCastum, isSale: false, isLiked: false, price: 7000, count: 2}]

  const responsiveOptions = [{breakpoint: '1170px', numVisible: 3, numScroll: 1}, {breakpoint: '768px', numVisible: 2, numScroll: 1}, {breakpoint: '420px', numVisible: 1, numScroll: 1}]


  const productTemplate = (product) => {
    return <ProductItem product={product}/>
  };

  return (
    <div className={cl.main}>
      <h1>Популярные товары</h1>
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
export default PopularGoods;