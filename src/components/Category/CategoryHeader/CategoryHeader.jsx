import React, {useContext, useEffect} from 'react';
import cl from './CategoryHeader.module.css'
import {CategoryContext} from "../../../context";

const CategoryHeader = ({path}) => {
  const {categories, setCategories} = useContext(CategoryContext)

  const headerNamesButtons = [{id: 1, name: 'Полноприводные'}, {id: 2, name: 'от 5000'}, {id: 3, name: 'BRP'}, {id: 4, name: 'еще'}]

  return (
    <div className={cl.main}>
      <div className={cl.headerNames}>
        <h1>{categories.find(category => category.path === path).name}</h1>
        <div className={cl.headerNamesButtons}>
          {headerNamesButtons.map(item =>
            <button key={item.id}>{item.name}</button>
          )}
        </div>
      </div>
      <div className={cl.headerButtons}>
        <div className={cl.headerButtonsInner}>
          <select>
            <option value="По полулярности">По полулярности</option>
          </select>
          <div>
            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="21" height="19" stroke="#2F3035" stroke-width="2"/>
              <rect x="7" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035" stroke-width="2"/>
              <rect x="7" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035" stroke-width="2"/>
              <rect x="14" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035" stroke-width="2"/>
              <rect x="14" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035" stroke-width="2"/>
            </svg>
            <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3">
                <rect x="6" width="19" height="3" rx="1.5" fill="#2F3035"/>
                <rect x="6" y="8" width="19" height="3" rx="1.5" fill="#2F3035"/>
                <rect x="6" y="16" width="19" height="3" rx="1.5" fill="#2F3035"/>
                <rect width="3" height="3" rx="1.5" fill="#2F3035"/>
                <rect y="8" width="3" height="3" rx="1.5" fill="#2F3035"/>
                <rect y="16" width="3" height="3" rx="1.5" fill="#2F3035"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;