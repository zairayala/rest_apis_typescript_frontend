import { createBrowserRouter, redirect } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { action as updateAvailabilityAction, loader as productsLoader } from './views/Products'
import NewProduct, { action as newProductAction} from './views/NewProduct'
import EditProduct, { loader as editProductLoader, action as editProductAction } from './views/EditProduct'
import { action as deleteProductAction } from './components/ProductDetails'
import ListProducts from './views/ListProducts'
import Login from './views/Login'
import PublicLayout from './layouts/PublicLayout'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                path: '/iniciar-sesion',
                element: <Login />
            },
            {
                path: '/catalogo',
                loader: productsLoader,
                element: <ListProducts />
            }
        ]
    },
    {
        path: '/productos',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader, //es similar a un useEffect()
                action: updateAvailabilityAction
            },
            {
                path: 'nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: ':id/editar', //ROA Pattern - Resource oriented design
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: ':id/eliminar', //cada vez que voy a esa ruta ejecuta ese action
                action: deleteProductAction
            },
        ]
    }
])