import { createBrowserRouter } from 'react-router-dom'
import HomePage  from '../pages/HomePage/HomePage'
import  CatalogPage  from '../pages/CatalogPage/CatalogPage'
import  ProductPage  from '../pages/ProductPage/ProductPage'
import  CartPage  from '../pages/CartPage/CartPage'
import  { MainLayout }  from '../app/layout/MainLayout'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'catalog', element: <CatalogPage /> },
            { path: 'product/:id', element: <ProductPage /> },
            { path: 'cart', element: <CartPage /> },
        ]
    }
])