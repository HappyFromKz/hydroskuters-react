import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import CategoryCatalog from "../pages/CategoryCatalog";
import DoesNotExist from "../pages/DoesNotExist";
import Product from "../pages/Product";


export const privateRoutes = [
    {path: '/', component: <Home/>},
    {path: '/login', component: <Login/>},
    {path: '/register', component: <Register/>},
    {path: '/category-catalog/:category', component: <CategoryCatalog/>},
    {path: '/product/:product', component: <Product/>},
    {path: '*', component: <DoesNotExist/>},
]

export const publicRoutes = [
    {path: '/', component: <Home/>},
    {path: '/login', component: <Login/>},
    {path: '/register', component: <Register/>},
    {path: '/category-catalog/:category', component: <CategoryCatalog/>},
    {path: '/product/:product', component: <Product/>},
    {path: '*', component: <DoesNotExist/>},
]
