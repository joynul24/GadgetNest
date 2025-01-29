import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Pages/Home';
import Statistics from './components/Pages/Statistics';
import Dashboard from './components/Pages/Dashboard';
import Cards from './components/Cards/Cards';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ProductDetails from './components/ProductDetails/ProductDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <Cards></Cards>,
            loader: ()=> fetch('../products.json')
          },
          {
            path: '/category/:category',
            element: <Cards></Cards>,
            loader: ()=> fetch('../products.json')
          },
        ],
      },
      {
        path: '/product/:productId',
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('../products.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
