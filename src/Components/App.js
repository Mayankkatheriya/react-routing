import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './Layout';
import ErrorPage from './ErrorPage';
import Home from './Home/Home';
import Quotes from './Quotes/Quotes'
import Restaurant from './Restaurant/Restaurant'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/quotes',
          element: <Quotes />
        },
        {
          path: '/restaurants',
          element: <Restaurant />
        },
        {
          path: '/foods',
          element: <h1>Foods</h1>
        },
        {
          path: '/contact',
          element: <h1>Contact Us</h1>
        }
      ]
    }
  ]);
  return (
      <RouterProvider router={router} />
  )
}

export default App
