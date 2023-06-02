import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {useState} from "react";
import ModelMenu from "./components/Navbar/ModelMenu";
import Footer from "./components/Footer/Footer";
import CategoryNavbar from "./components/CategoryNavbar/CategoryNavbar";
import {CategoryContext, GoodsContext} from "./context";
import Service from "./API/Service";


function App() {
  const [menuActive, setMenuActive] = useState(false)
  const menuItems = [{id: 1, name: 'Войти', path: '/login', icon: 'pi-user'},
    {id: 2, name: 'Регистрация', path: '/register', icon: 'pi-user'},
    {id: 3, name: 'Избранное', path: '/not-fround', icon: 'pi-heart'},
    {id: 4, name: 'Корзина', path: '/', icon: 'pi-shopping-cart'},
    {id: 5, name: 'Магазины', path: '/', icon: 'pi-shopping-bag'},
    {id: 6, name: 'Акций', path: '/', icon: 'pi-percentage'},
    {id: 7, name: 'Доставка и оплата', path: '/', icon: 'pi-box'},
    {id: 8, name: 'Квадроциклы', path: 'category-catalog/atvs', icon: ''},
    {id: 9, name: 'Катера', path: 'category-catalog/carriage', icon: ''},
    {id: 10, name: 'Гидроциклы', path: 'category-catalog/jet-skis', icon: ''},
    {id: 11, name: 'Лодки', path: 'category-catalog/boats', icon: ''},
    {id: 12, name: 'Вездеходы', path: 'category-catalog/all-terrain-vehicles', icon: ''},
    {id: 13, name: 'Снегоходы', path: 'category-catalog/snowmobiles', icon: ''},
    {id: 14, name: 'Двигатели', path: 'category-catalog/engines', icon: ''},
    {id: 15, name: 'Запчасти', path: 'category-catalog/spare-parts', icon: ''}]

  const [categories, setCategories] = useState([{id: 1, name: 'Квадроциклы', path: 'atvs'},
    {id: 2, name: 'Катера', path: 'carriage'},
    {id: 3, name: 'Гидроциклы', path: 'jet-skis'},
    {id: 4, name: 'Лодки', path: 'boats'},
    {id: 5, name: 'Вездеходы', path: 'all-terrain-vehicles'},
    {id: 6, name: 'Снегоходы', path: 'snowmobiles'},
    {id: 7, name: 'Двигатели', path: 'engines'},
    {id: 8, name: 'Запчасти', path: 'spare-parts'}])

  return (
    <CategoryContext.Provider value={{
      categories,
      setCategories
    }}>
      <BrowserRouter>
        <div className={'containerCustom'}>
          <Navbar isActive={menuActive} setIsActive={setMenuActive}/>
          <CategoryNavbar categories={categories}/>
          <AppRouter/>
        </div>
        <Footer/>
        <ModelMenu items={menuItems} isActive={menuActive} setIsActive={setMenuActive}/>
      </BrowserRouter>
    </CategoryContext.Provider>
  );
}

export default App;
