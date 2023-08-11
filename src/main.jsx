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




const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home> ,
    children:[
      {
        path:"/",
        element:<Shop></Shop>
      },
      {
        path:"/orderReview",
        element:<OrderReview></OrderReview>,
        loader:cartProductsLoader
      },
      {
        path:"/inventory",
        element:<Inventory></Inventory>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
