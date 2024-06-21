import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './components/Nav.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout.jsx'
import PagesToRead from './components/PagesToRead/PagesToRead.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx'

import Home from './components/Home/Home.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch("/book.json")
      },
      {
        path:'/listedbooks',
        element:<ListedBooks></ListedBooks>,
      },
      {
        path:'/pagestoread',
        element:<PagesToRead></PagesToRead>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
