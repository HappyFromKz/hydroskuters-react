import React from 'react';
import cl from './CategoryNavbar.module.css'
import './CategoryNavbar.module.css'
import {useNavigate} from "react-router-dom";

const CategoryNavbar = ({categories}) => {
  const navigate = useNavigate();

  return (
    <div className={cl.main}>
      <ul>
        {categories.map(category =>
          <li key={category.id} onClick={() => {
            navigate('category-catalog/' + category.path)
          }}>
            <p>{category.name}</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CategoryNavbar;


















