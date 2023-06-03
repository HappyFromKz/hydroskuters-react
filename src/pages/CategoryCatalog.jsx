import React, {useContext, useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom";
import MyRouterHistory from "../components/UI/MyRouterHistory/MyRouterHistory";
import cl from './pagesStyle/CategoryCatalog.module.css'
import CategoryHeader from "../components/Category/CategoryHeader/CategoryHeader";
import CategoryFilter from "../components/Category/CategoryFilter/CategoryFilter";
import CategoryItems from "../components/Category/CategoryItems/CategoryItems";
import axios from "axios";
import {CategoryContext} from "../context";


const CategoryCatalog = () => {
  const {category} = useParams()
  const {categories} = useContext(CategoryContext)
  const itemsPerPage = 12;

  const items = [{ label: categories.find(item => item.path === category).name, url: `/category-catalog/${category}`}];
  const [goods, setGoods] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [sortingStyle, setSortingStyle] = useState('null')
  const [filterSettings, setFilterSettings] = useState({stock: 'all', sale: 'all', model: '', priceRange: null})


  useEffect(() => {
    getGoods()
  }, [])

  async function getGoods(){
    const response = await axios.get('http://localhost:3000/category-catalog')
    setGoods(response.data)
    setTotalPages(Math.ceil(response.data.length / itemsPerPage))
  }

  const sortedGoods = useMemo(() => {
    if (sortingStyle !== 'null'){
      return [...goods].sort((a, b) => b[sortingStyle] - a[sortingStyle]);
    }
    return goods
  }, [sortingStyle, goods])

  const getMaxPrice = (data) => {
    const prices = data.map((item) => item.price);
    return Math.max(...prices);
  };

  const getMinPrice = (data) => {
    const prices = data.map((item) => item.price);
    return Math.min(...prices);
  };

  const minMax = {max: getMaxPrice(sortedGoods), min: getMinPrice(sortedGoods)};

  const currentItems = sortedGoods.slice((page - 1) * itemsPerPage, ((page - 1) * itemsPerPage) + itemsPerPage);


  useEffect(() => {
    console.log('filterSettings', filterSettings)
  }, [filterSettings])


  return (
    <div className={cl.main}>
      <MyRouterHistory items={items} styles={{margin: '35px 0', border: 'none'}}/>
      <CategoryHeader path={category} setSortingStyle={setSortingStyle} sortingStyle={sortingStyle}/>
      <div className={cl.mainFilterAndCatalog}>
        <CategoryFilter filterSettings={filterSettings} setFilterSettings={setFilterSettings} minMax={minMax}/>
        <CategoryItems goods={currentItems} page={page} action={setPage} totalPages={totalPages}/>
      </div>
    </div>
  );
};

export default CategoryCatalog;