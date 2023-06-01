import React, {useState} from 'react';
import cl from './SearchProduct.module.css'
import MyButton from "../../MyButton/MyButton";
const SearchProduct = () => {
  const [activeButton, setActiveButton] = useState(1)
  const buttonItems = [{id:1, name:'Поиск по  номеру'}, {id:2, name:'Поиск по марке'}, {id:3, name:'Поиск по названию товара'}, ]

  return (
    <div className={cl.main}>
      <div className={cl.searchStyleButtons}>
        {buttonItems.map( item =>
          <button className={activeButton===item.id? 'active' : ''} key={item.id}
            onClick={() => {setActiveButton(item.id)}}
          >{item.name}</button>
        )}
      </div>
      <div className={cl.searchInput}>
        <input type="text" placeholder="Введите марку"/>
        <MyButton style={{padding: '10px 16px', fontWeight: '500', fontSize: '14px', lineHeight: '17px'}}>искать</MyButton>
      </div>
    </div>
  );
};

export default SearchProduct;