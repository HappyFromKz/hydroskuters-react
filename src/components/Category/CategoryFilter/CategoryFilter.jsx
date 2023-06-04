import React, {useEffect} from 'react';
import cl from './CategoryFilter.module.css'
import { RadioButton } from 'primereact/radiobutton';
import { Slider } from 'primereact/slider';

const CategoryFilter = ({filterAction, filterSettings, setFilterSettings, clearFilterSettings, minMax}) => {

  useEffect(() => {
    if (filterSettings.priceRange !== null){
      if (minMax.min === filterSettings.priceRange[0] && minMax.max === filterSettings.priceRange[1] ||
        minMax.max === filterSettings.priceRange[0] && minMax.min === filterSettings.priceRange[1]){
        setFilterSettings({...filterSettings, priceRange: null})
      }
    }
  }, [filterSettings.priceRange])

  return (
    <div className={cl.main}>
      <div className={cl.mainTitle}>
        <p>Фильтрация</p>
      </div>
      <div className={cl.filterModel}>
        <h5>Модель</h5>
        <div className={cl.filterModelBody}>
          <input value={filterSettings.model} onChange={(event) => setFilterSettings({...filterSettings, model: event.target.value})} type="text" placeholder="Введите модель"/>
        </div>
      </div>
      <div className={cl.filterStock}>
        <h5>Наличие</h5>
        <div className={cl.filterStockBody}>
          <div className={cl.filterStockItem}>
            <RadioButton checked={filterSettings.stock === 'all'} onChange={() => setFilterSettings({...filterSettings, stock: "all"})} name="stock" type="radio"/><label>Все</label>
          </div>
          <div className={cl.filterStockItem}>
            <RadioButton checked={filterSettings.stock === 'inStock'} onChange={() => setFilterSettings({...filterSettings, stock: "inStock"})} name="stock" type="radio"/><label>В наличии</label>
          </div>
          <div className={cl.filterStockItem}>
            <RadioButton checked={filterSettings.stock === 'outOfStock'} onChange={() => setFilterSettings({...filterSettings, stock: "outOfStock"})} name="stock" type="radio"/><label>Не в наличии</label>
          </div>
        </div>
      </div>
      <div className={cl.filterSale}>
        <h5>Акции</h5>
        <div className={cl.filterSaleBody}>
          <div className={cl.filterSaleItem}>
            <RadioButton checked={filterSettings.sale === 'all'} onChange={() => setFilterSettings({...filterSettings, sale: "all"})} name="sale" type="radio"/><label>Все</label>
          </div>
          <div className={cl.filterSaleItem}>
            <RadioButton checked={filterSettings.sale === 'onSale'} onChange={() => setFilterSettings({...filterSettings, sale: "onSale"})} name="sale" type="radio"/><label>С акцией</label>
          </div>
          <div className={cl.filterSaleItem}>
            <RadioButton checked={filterSettings.sale === 'notOnSale'} onChange={() => setFilterSettings({...filterSettings, sale: "notOnSale"})} name="sale" type="radio"/><label>Без акций</label>
          </div>
        </div>
      </div>
      <div className={cl.filterCost}>
        <h5>Цена</h5>
        <div className={cl.filterCostBody}>
          <Slider value={filterSettings.priceRange} onChange={(e) => setFilterSettings({...filterSettings, priceRange: e.value})} step={minMax.max*0.03} range min={minMax.min} max={minMax.max} />
        </div>
      </div>
      <div className={cl.filterApply}>
        <button className={cl.clearButton} onClick={() => {filterAction()}}>Выбрать</button>
      </div>
      <p className={cl.clearButton} onClick={() => {
        clearFilterSettings();
      }}>Сбросить фильтр</p>
    </div>
  );
};

export default CategoryFilter;