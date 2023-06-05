import React, {useEffect, useState} from 'react';
import cl from './pagesStyle/Cart.module.css'
import './pagesStyle/Cart.module.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Row } from 'primereact/row';
import { ColumnGroup } from 'primereact/columngroup';
import {useDispatch, useSelector} from "react-redux";
import CarouselGoods from "../components/UI/CarouselGoods/CarouselGoods";
import axios from "axios";
import {isArray} from "chart.js/helpers";
import {deleteProduct, updateProduct} from "../store/cart/cartReducer";

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItems)
  const [totals, setTotals] = useState({totalCost: 0, totalCount: 0})
  const [buyWithGoods, setBuyWithGoods] = useState([])

  async function getBuyWith(){
    const response = await axios.get(`https://mocki.io/v1/fe6c46de-e1ed-4eed-9258-b1195080cad4`)
    setBuyWithGoods(response.data)
  }

  useEffect(() => {
    getBuyWith()
  }, [])

  const costDataCalculateTemplate = (rowData) => {
    return <div>{rowData.price * rowData.count} &#8381;</div>
  }

  const countActionsTemplate = (rowData) => {
    return (
      <div className={cl.cartCount}>
        <i onClick={() => {
          if (rowData.count === 1) {
            deleteProductCart(rowData.id)
          } else {
            updateProductCart(rowData.id, {...rowData, count: rowData.count-1})
          }
        }} className="pi pi-minus-circle"></i>
        <span>{rowData.count}</span>
        <i onClick={() => {updateProductCart(rowData.id, {...rowData, count: rowData.count+1})}} className="pi pi-plus-circle"></i>
      </div>
    );
  }

  const actionsTemplate = (product) => {
    return (
      <div className={cl.cartActions}>
        <i onClick={() => { deleteProductCart(product.id)}} className="pi pi-trash" style={{color: 'red'}}></i>
      </div>
    );
  }

  const rowIndexTemplate = (rowData, column) => {
    return column.rowIndex + 1 + ""
  }

  const costForOneTemplate = (rowData) => {
    return <div>{rowData.price} &#8381;</div>
  }

  const calculateTotals = (products) => {
    let totalCost = 0;
    let totalCount = 0;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const productCost = product.price * product.count;
      totalCost += productCost;
      totalCount += +product.count
    }

    setTotals({...totals, totalCount: totalCount, totalCost: totalCost})
  };

  const deleteProductCart = (product_id) => {
    dispatch(deleteProduct(product_id))
  }

  const updateProductCart = (productId, updatedProduct) => {
    dispatch(updateProduct({productId, updatedProduct}))
  }

  useEffect(() => {
    if (cartItems){
      if (cartItems.length > 0){
        calculateTotals(cartItems)
      }
    }
    console.log('cartItems', cartItems)
  }, [cartItems])

  const footerGroup = (
    <ColumnGroup>
      <Row>
        <Column footer="Общее:" colSpan={3} footerStyle={{ textAlign: 'right' }} />
        <Column style={{textAlign: 'center'}} footer={totals.totalCount} />
        <Column footer={totals.totalCost + ' ₽'} />
        <Column/>
      </Row>
    </ColumnGroup>
  );

  return (
    <div className={cl.main}>
      <h2>Корзина</h2>
      {cartItems.length > 0
        ?
        <div className={cl.cartTable}>
          <DataTable value={cartItems} footerColumnGroup={footerGroup} paginator rows={10} rowsPerPageOptions={[10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
            <Column body={rowIndexTemplate} header="№" style={{ width: '10%' }}></Column>
            <Column field="name" header="Название" style={{ width: '35%' }}></Column>
            <Column field="price" body={costForOneTemplate} header="Цена за единицу" style={{ width: '10%' }}></Column>
            <Column field="count" body={countActionsTemplate} header="Кол.во" style={{ width: '10%' }}></Column>
            <Column field="price" body={costDataCalculateTemplate} header="Стоимость" style={{ width: '10%' }}></Column>
            <Column body={actionsTemplate} header="Действия" style={{ width: '8%' }}></Column>
          </DataTable>
        </div>

        :
        <div className={cl.notFound}>
          <p>В корзине нет товаров</p>
        </div>
      }
      <CarouselGoods goods={buyWithGoods} title={'С этими товарами покупают'}/>
    </div>
  );
};

export default Cart;