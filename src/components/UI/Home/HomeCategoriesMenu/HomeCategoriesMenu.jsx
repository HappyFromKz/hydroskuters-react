import React, {useContext} from 'react';
import cl from './HomeCategoriesMenu.module.css'
import {useNavigate} from "react-router-dom";
import {CategoryContext} from "../../../../context";


const HomeCategoriesMenu = ({homeCategories}) => {
  const navigate = useNavigate();
  const {chosenCategory, setChosenCategory} = useContext(CategoryContext)

  return (
    <div className={cl.main}>
      {homeCategories.map(category =>
        <div key={category.id} className={cl.categoryBlock} onClick={() => {
          setChosenCategory(category.path)
          navigate('category-catalog/' + category.path)
        }}>
          <div className={cl.categoryBlockText}>
            <p>{category.name}</p>
            <p>Подробнее ></p>
          </div>
          <div className={cl.categoryBlockPicture}>
            <div className={cl.categoryBlockPicturePic} style={{ backgroundImage: `url(${category.pic})`}}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeCategoriesMenu;