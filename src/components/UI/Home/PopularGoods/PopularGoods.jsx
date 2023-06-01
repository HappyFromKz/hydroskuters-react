import bag from "C:/projects/react/hydroskuters-react/src/assets/popularGoods/bag.png";
import jilet from "C:/projects/react/hydroskuters-react/src/assets/popularGoods/jilet.png";
import airpods from "C:/projects/react/hydroskuters-react/src/assets/popularGoods/airpods.png";
import verevka from "C:/projects/react/hydroskuters-react/src/assets/popularGoods/verevka.png";
import manCastum from "C:/projects/react/hydroskuters-react/src/assets/popularGoods/manCastum.png";


import React from 'react';
import cl from './PopularGoods.module.css'
import { Carousel } from 'primereact/carousel';
import MyButton from "../../MyButton/MyButton";
import MyPicture from "../../MyPicture/MyPicture";
import {useNavigate} from "react-router-dom";

const PopularGoods = () => {
  const goods = [{id: 1, name: 'Водонепроницаемый Рюкзак', path: 'bag', pic: bag, isSale: false, isLiked: true, price: 9800, count: 2},
    {id: 2, name: 'Спасательный жилет BRP Men\'s Airflow PFD', path: 'jilet', pic: jilet, isSale: true, isLiked: false, price: 6900, count: 2},
    {id: 3, name: 'BRP Audio-Premium System', path: 'airpods', pic: airpods, isSale: false, isLiked: true, price: 68000, count: 1},
    {id: 4, name: 'Спасательное снаряжение', path: 'verevka', pic: verevka, isSale: true, isLiked: false, price: 800, count: 0},
    {id: 5, name: 'Мужской костюм 3мм', path: 'manCastum', pic: manCastum, isSale: false, isLiked: false, price: 7000, count: 2}]

  const responsiveOptions = [{breakpoint: '1170px', numVisible: 3, numScroll: 1}, {breakpoint: '768px', numVisible: 2, numScroll: 1}, {breakpoint: '420px', numVisible: 1, numScroll: 1}]

  const navigate = useNavigate()

  const productTemplate = (product) => {
    return (
      <div className={cl.goodsItemMain}>
        <div className={cl.mainItem} onClick={() => {navigate('/product/' + product.path)}}>
          <div className={cl.goodsSaleLike}>
            {product.isSale
              ? <div><MyButton style={{padding: '7px 15px', fontWeight: '400', fontSize: '12px', lineHeight: '14px'}}>sale</MyButton></div>
              : <div></div>
            }
            {product.isLiked
              ?
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3.43498C10.011 -1.96402 0 -1.16202 0 7.00298C0 11.071 3.06 16.484 12 22C20.94 16.484 24 11.071 24 7.00298C24 -1.11502 14 -1.99602 12 3.43498Z" fill="#1C62CD"/>
              </svg>
              :
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z" fill="black"/>
              </svg>
            }
          </div>
          <div className={cl.goodsPicture}>
            <MyPicture style={{ width: '200px', height: '200px', backgroundImage: `url(${product.pic})`}}></MyPicture>
            <div className={cl.goodsPictureHover}>
              <p>посмотреть товар</p>
            </div>
          </div>
          <div className={cl.goodsInfoCart}>
            <p className={cl.goodsInfoCartP}>{product.name}</p>
            {product.count > 0
              ?
              <div className={cl.goodsInfoCartCount}>
                <p>{product.price} &#8381;</p>
                <div className={cl.goodsInfoCartCountButton}>
                  <MyButton style={{padding: '10px 15px 7.5px', borderRadius: '10px 0 0 0', marginTop: '-10px'}}>
                    <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 0L29.0713 2.5H26.66L22.3175 17.5H5.76875L0 3.75H21.015L20.31 6.25H3.76L7.43125 15H20.4662L24.7563 0H30ZM10.625 18.75C9.59 18.75 8.75 19.59 8.75 20.625C8.75 21.6612 9.59 22.5 10.625 22.5C11.66 22.5 12.5 21.6612 12.5 20.625C12.5 19.59 11.66 18.75 10.625 18.75ZM19.25 10L16.875 18.75C15.84 18.75 15 19.5888 15 20.625C15 21.6612 15.84 22.5 16.875 22.5C17.91 22.5 18.75 21.6612 18.75 20.625C18.75 19.59 17.91 18.75 16.875 18.75L19.25 10Z" fill="white"/>
                    </svg>
                  </MyButton>
                </div>
              </div>
              :
              <div className={cl.goodsInfoCartCountIsnt}>
                <p>нет в наличии</p>
                <p>Сообщить о поступлении</p>
              </div>
            }
          </div>
        </div>
      </div>
    );
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