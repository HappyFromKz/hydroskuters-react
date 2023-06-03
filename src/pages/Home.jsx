import React, {useEffect, useState} from 'react';
import TopAdvertising from "../components/Home/TopAdvertising/TopAdvertising";
import cl from "./pagesStyle/Home.module.css"
import SearchProduct from "../components/Home/SearchProduct/SearchProduct";
import HomeCategoriesMenu from "../components/Home/HomeCategoriesMenu/HomeCategoriesMenu";
import PopularGoods from "../components/Home/PopularGoods/PopularGoods";


import HomeBanner from "../components/Home/HomeBanner/HomeBanner";
import axios from "axios";

const Home = () => {

  const [homeCategories, setHomeCategories] = useState([])
  const [goods, setGoods] = useState([])

  async function getGoods(){
    const response = await axios.get('https://mocki.io/v1/3af10ccb-5b46-422f-a149-33d2bac6aac8')
    setGoods(response.data)
  }

  async function getCategories(){
    const response = await axios.get('https://mocki.io/v1/b9efb16e-f721-4556-b0a8-a1a5db4d468d')
    setHomeCategories(response.data)
  }

  useEffect(() => {
    getGoods()
    getCategories()
  }, [])

  return (
    <div className={cl.main}>
      <TopAdvertising/>
      <SearchProduct/>
      <HomeCategoriesMenu homeCategories={homeCategories}/>
      <HomeBanner/>
      <PopularGoods goods={goods}/>
    </div>
  );
};

export default Home;