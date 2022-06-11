import { useCycle } from 'framer-motion';
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Example } from './Example'

function MainLayout() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  let props = {isOpen, toggleOpen}
  return (
    <>
      <Example {...props} />
      <div style={{marginLeft:'auto',height: '100vh', width: `${isOpen ? 'calc(100vw - 300px)' : '100vw'}`, transition: `all .5s ${isOpen ? '' :'.5s'}`}}>
      <Outlet/>
      </div>
    </>
  )
}

export default MainLayout