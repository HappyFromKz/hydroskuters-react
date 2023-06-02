import React from 'react';
import {useParams} from "react-router-dom";
import MyRouterHistory from "../components/UI/MyRouterHistory/MyRouterHistory";
import cl from './pagesStyle/CategoryCatalog.module.css'
import CategoryHeader from "../components/Category/CategoryHeader/CategoryHeader";
const CategoryCatalog = () => {
    const {category} = useParams()
    const items = [{ label: category, url: `/category-catalog/${category}`}];


    return (
        <div>
            <MyRouterHistory items={items} styles={{margin: '35px 0', border: 'none'}}/>
            <CategoryHeader path={category}/>
        </div>
    );
};

export default CategoryCatalog;