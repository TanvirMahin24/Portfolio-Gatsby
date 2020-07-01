import React, { Fragment } from "react"
import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { useState } from "react"
const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const toogleSidebar = () => {
    setOpen(!isOpen)
  }
  return (
    <Fragment>
      <Navbar toogleSidebar={toogleSidebar} />
      <Sidebar isOpen={isOpen} toogleSidebar={toogleSidebar} />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
