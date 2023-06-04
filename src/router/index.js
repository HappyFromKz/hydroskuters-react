import Home from "../pages/Home";
import CategoryCatalog from "../pages/CategoryCatalog";
import DoesNotExist from "../pages/DoesNotExist";
import Product from "../pages/Product";


export const routes = [
    {path: '/', component: <Home/>},
    {path: '/category-catalog/:category', component: <CategoryCatalog/>},
    {path: '/product/:product_id', component: <Product/>},
    {path: '*', component: <DoesNotExist/>},
]
