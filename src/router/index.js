import Home from "../pages/Home";
import CategoryCatalog from "../pages/CategoryCatalog";
import DoesNotExist from "../pages/DoesNotExist";
import Product from "../pages/Product";
import Cart from "../pages/Cart";


export const routes = [
    {path: '/', component: <Home/>},
    {path: '/category-catalog/:category', component: <CategoryCatalog/>},
    {path: '/product/:product_id', component: <Product/>},
    {path: '/cart', component: <Cart/>},
    {path: '*', component: <DoesNotExist/>},
]
