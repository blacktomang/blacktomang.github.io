import { useCycle } from 'framer-motion';
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { Sidebar } from './Sidebar'

function MainLayout() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  let props = {isOpen, toggleOpen}
  return (
    <>
      <Sidebar {...props} />
      <div style={{height: '100vh', width: '100vw', transition: `all .5s ${isOpen ? '' :'.5s'}`}}>
      <Navbar/>
      <Outlet/>
      </div>
    </>
  )
}

export default MainLayout