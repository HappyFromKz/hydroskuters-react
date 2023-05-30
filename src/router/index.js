import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import CategoryCatalog from "../pages/CategoryCatalog";


export const privateRoutes = [
    {path: '/', component: <Home/>},
    {path: '/login', component: <Login/>},
    {path: '/register', component: <Register/>},
    {path: '/not-found', component: <NotFound/>},
    {path: '/category-catalog/:category', component: <CategoryCatalog/>},
    {path: '*', component: <NotFound/>},
]

export const publicRoutes = [
    {path: '/', component: <Home/>},
    {path: '/login', component: <Login/>},
    {path: '/register', component: <Register/>},
    {path: '/not-found', component: <NotFound/>},
    {path: '/category-catalog/:category', component: <CategoryCatalog/>},
    {path: '*', component: <NotFound/>},
]
