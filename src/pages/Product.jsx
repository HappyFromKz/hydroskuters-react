import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {CategoryContext} from "../context";
import axios from "axios";
import cl from "./pagesStyle/Product.module.css"
import MyRouterHistory from "../components/UI/MyRouterHistory/MyRouterHistory";
import ProductInfo from "../components/Product/ProductInfo/ProductInfo";
import CarouselGoods from "../components/UI/CarouselGoods/CarouselGoods";
import ProductLargeInfo from "../components/Product/ProductLargeInfo/ProductLargeInfo";

const Product = () => {
  const {product_id} = useParams()
  const {categories} = useContext(CategoryContext)
  const [product, setProduct] = useState([])
  const [buyWithGoods, setBuyWithGoods] = useState([])
  const [items, setItems] = useState([])

  async function getProduct(){
    const response = await axios.get(`http://localhost:3000/category-catalog/${product_id}`)
    setProduct(response.data)
  }

  async function getBuyWith(){
    const response = await axios.get(`https://mocki.io/v1/fe6c46de-e1ed-4eed-9258-b1195080cad4`)
    setBuyWithGoods(response.data)
  }

  useEffect(() => {
    getProduct()
    getBuyWith()
  }, [])

  useEffect(() => {
    if (Object.keys(product).length !== 0){
      setItems( [{label: categories.find(item => item.id === product.category_id).name,
                      url: '/category-catalog/' + categories.find(item => item.id === product.category_id).path},
                      {label: product.name, url: `/product/${product_id}`}])
    }
  }, [product])

  return (
    <div>
      {product && buyWithGoods
        ?
        <div className={cl.main}>
          {items.length !== 0
            ? <MyRouterHistory items={items} styles={{margin: '35px 0', border: 'none'}}/>
            : ''
          }
          <ProductInfo product={product}/>
          <ProductLargeInfo product={product}/>
          <CarouselGoods goods={buyWithGoods} title={'С этим товаром покупают'}/>
        </div>
        : ''
      }
    </div>
  );
};

export default Product;