import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './Layout';
import ErrorPage from './ErrorPage';
import Home from './Home/Home';
import Quotes from './Quotes/Quotes'
import Restaurant from './Restaurant/Restaurant'
import Contact from './Contact/Contact';
import Foods from './Foods/Foods';

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
          element: <Foods />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ]);
  return (
      <RouterProvider router={router} />
  )
}

export default App
