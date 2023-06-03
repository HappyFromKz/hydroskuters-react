import React, {useContext, useEffect, useState} from 'react';
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

  const items = [{ label: categories.find(item => item.path === category).name, url: `/category-catalog/${category}`}];
  const [goods, setGoods] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  async function getGoods(){
    const response = await axios.get('http://localhost:3000/category-catalog')
    setTotalPages(response.data.length)
    setGoods(Object.values(response.data).find(item => item.page === page).data)
  }

  useEffect(() => {
    getGoods()
  }, [page])
  return (
    <div className={cl.main}>
      <MyRouterHistory items={items} styles={{margin: '35px 0', border: 'none'}}/>
      <CategoryHeader path={category}/>
      <div className={cl.mainFilterAndCatalog}>
        <CategoryFilter/>
        <CategoryItems goods={goods} page={page} action={setPage} totalPages={totalPages}/>
      </div>
    </div>
  );
};

export default CategoryCatalog;