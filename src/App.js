import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {useEffect, useState} from "react";
import ModelMenu from "./components/Navbar/ModelMenu";
import Footer from "./components/Footer/Footer";
import CategoryNavbar from "./components/CategoryNavbar/CategoryNavbar";
import {CategoryContext} from "./context";
import axios from "axios";


function App() {
  const [menuActive, setMenuActive] = useState(false)
  const [menuItems, setMenuItems] = useState([])
  const [chosenCategory, setChosenCategory] = useState(null)
  const [categories, setCategories] = useState([{id: 1, name: 'Квадроциклы', path: 'atvs'},
    {id: 2, name: 'Катера', path: 'carriage'},
    {id: 3, name: 'Гидроциклы', path: 'jet-skis'},
    {id: 4, name: 'Лодки', path: 'boats'},
    {id: 5, name: 'Вездеходы', path: 'all-terrain-vehicles'},
    {id: 6, name: 'Снегоходы', path: 'snowmobiles'},
    {id: 7, name: 'Двигатели', path: 'engines'},
    {id: 8, name: 'Запчасти', path: 'spare-parts'}])

  async function getMenuItems() {
    const response = await axios.get('https://mocki.io/v1/a6320293-0e30-40aa-89b8-c6e1a2260fcb')
    setMenuItems(response.data)
  }

  useEffect(() => {
    getMenuItems()
  }, [])

  return (
    <div>
      {menuItems.length > 0
        ?
        <CategoryContext.Provider value={{
          categories,
          setCategories,
          chosenCategory,
          setChosenCategory
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
          : ''
      }
    </div>
  );
}

export default App;
