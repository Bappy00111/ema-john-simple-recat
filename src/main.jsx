import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop.jsx';
import Home from './component/Layout/Home.jsx';
import OrderReview from './component/OrderReview/OrderReview.jsx';
import Inventory from './component/Inventory/Inventory.jsx';
import Login from './component/Login/Login.jsx';
import cartProductsLoader from './CardProductLoder/CardProdutLoder.js';
import SingUp from './component/SingUp/SingUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivetRoutes from './routes/PrivetRoutes.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "/orderReview",
        element: <OrderReview></OrderReview>,
        loader: cartProductsLoader
      },
      {
        path: "/chakout",
        element: <PrivetRoutes><Inventory></Inventory></PrivetRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'singup',
        element: <SingUp></SingUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
