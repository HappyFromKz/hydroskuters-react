import React from 'react';
import MyPaginate from "../../UI/MyPaginate/MyPaginate";
import ProductItem from "../../UI/ProductItem/ProductItem";
import cl from './CategoryItems.module.css'

const CategoryItems = ({goods, page, action, totalPages}) => {
  return (
    <div className={cl.main}>
      <div className={cl.products}>
        {goods.map(item => <div key={item.id} className={cl.product}><ProductItem styles={{marginBottom: '29px'}} product={item}/></div>)}
      </div>
      <MyPaginate page={page} action={action} totalPages={totalPages}></MyPaginate>
    </div>
  );
};

export default CategoryItems;