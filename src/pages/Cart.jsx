import React, {useEffect, useState} from 'react';
import cl from './pagesStyle/Cart.module.css'
import axios from "axios";

const Cart = () => {
  const [goods, setGoods] = useState([])

  async function getGoods(){
    const response = await axios.get('http://localhost:3000/category-catalog')
    setGoods(response.data)
  }

  useEffect(() => {
    getGoods()
  }, [])

  return (
    <div className={cl.main}>
      <div className={cl.cartHeader}>

      </div>
      {goods
        ?
        goods.map((item, index) =>
          <div key={item.id} className={cl.cartItem + ' row' }>
            <div className={'col-1'}>
              {index+1}
            </div>
            <div className={'col-2'}>
              {item.name}
            </div>
            <div className={'col-3'}>
              {item.price}
            </div>
            <div className={'col-4'}>
              {item.count}
            </div>
            <div className='col-2'>
              {item.price * item.count}
            </div>
          </div>
        )
        : ''
      }
    </div>
  );
};

export default Cart;