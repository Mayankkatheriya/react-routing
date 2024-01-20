import React, { memo, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = () => {
  console.log("hii");

  useEffect(() => {
    window.scroll(0,0)
  }, [useLocation().pathname])

  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default memo (Layout)
