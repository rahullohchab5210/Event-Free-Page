import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components_common/Navbar'



function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App