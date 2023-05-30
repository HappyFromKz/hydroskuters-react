import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {useState} from "react";
import ModelMenu from "./components/UI/Navbar/ModelMenu";
import Footer from "./components/UI/Footer/Footer";

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



    return (
      <BrowserRouter>
          <div className={'container'}>
              <Navbar isActive={menuActive} setIsActive={setMenuActive}/>
              <AppRouter/>
              <Footer/>
          </div>
          <ModelMenu items={menuItems} isActive={menuActive} setIsActive={setMenuActive}/>
      </BrowserRouter>
    );
}

export default App;
