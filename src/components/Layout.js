import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

import "normalize.css"
import "../assets/css/main.css"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
