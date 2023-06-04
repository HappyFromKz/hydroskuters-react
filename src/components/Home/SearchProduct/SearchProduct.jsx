import React, {useEffect, useState} from 'react';
import cl from './SearchProduct.module.css'
import MyButton from "../../UI/MyButton/MyButton";
import axios from "axios";
import {Link} from "react-router-dom";
const SearchProduct = () => {
  const [activeButton, setActiveButton] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const buttonItems = [{id:1, name:'Поиск по названию товара'}, {id:2, name:'Поиск по марке'}, {id:3, name:'Поиск по  номеру'}]
  const [goods, setGoods] = useState([])

  async function getGoods(){
    const response = await axios.get('http://localhost:3000/category-catalog')
    setGoods(response.data)
  }
  const sortedGoods = goods.filter((item) => {
    if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true
  })

  useEffect(() => {
    getGoods()
  }, [])

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
        <input onChange={(e) => {setSearchTerm(e.target.value)}} type="text" placeholder="Введите название"/>
        <MyButton style={{padding: '10px 16px', fontWeight: '500', fontSize: '14px', lineHeight: '17px'}}>искать</MyButton>
      </div>
      {searchTerm !== ''
        ?
        <div className={cl.searchOptionBlock}>
          {sortedGoods.map(item =>
            <Link key={item.id} to={`/product/${item.id}`}>
              <div className={cl.searchOptionBlockItem}>
                {item.name}
              </div>
            </Link>
          )}
        </div>
        : ''
      }
    </div>
  );
};

export default SearchProduct;