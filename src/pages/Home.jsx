import React from 'react';
import TopAdvertising from "../components/Home/TopAdvertising/TopAdvertising";
import cl from "./pagesStyle/Home.module.css"
import SearchProduct from "../components/Home/SearchProduct/SearchProduct";
import HomeCategoriesMenu from "../components/Home/HomeCategoriesMenu/HomeCategoriesMenu";
import PopularGoods from "../components/Home/PopularGoods/PopularGoods";


import quadro from "C:/projects/react/hydroskuters-react/src/assets/categoriesHomeMenu/quadro.png";
import gidro from "C:/projects/react/hydroskuters-react/src/assets/categoriesHomeMenu/gidro.png";
import cater from "C:/projects/react/hydroskuters-react/src/assets/categoriesHomeMenu/cater.png";
import snow from "C:/projects/react/hydroskuters-react/src/assets/categoriesHomeMenu/snow.png";
import everyhod from "C:/projects/react/hydroskuters-react/src/assets/categoriesHomeMenu/everyhod.png";
import dvig from "C:/projects/react/hydroskuters-react/src/assets/categoriesHomeMenu/dvig.png";
import HomeBanner from "../components/Home/HomeBanner/HomeBanner";

const Home = () => {

  const homeCategories = [{id: 1, name: 'Квадроциклы', path: 'atvs', pic: quadro},
    {id: 2, name: 'Гидроциклы', path: 'jet-skis', pic: gidro},
    {id: 3, name: 'Катера', path: 'carriage', pic: cater},
    {id: 4, name: 'Снегоходы', path: 'snowmobiles', pic: snow},
    {id: 5, name: 'Вездеходы', path: 'all-terrain-vehicles', pic: everyhod},
    {id: 6, name: 'Двигатели', path: 'engines', pic: dvig}]

  return (
    <div className={cl.main}>
      <TopAdvertising/>
      <SearchProduct/>
      <HomeCategoriesMenu homeCategories={homeCategories}/>
      <HomeBanner/>
      <PopularGoods/>
    </div>
  );
};

export default Home;