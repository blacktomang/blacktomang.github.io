import React, { useEffect } from 'react'
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { Sidebar } from './Sidebar'

function MainLayout() {
  const [isOpen, toggleOpen] = useState(false, true);

  // toggleOpen(a => a=false);
  let props = { isOpen, toggleOpen };
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);


  return (
    <>
      <Sidebar {...props}  />
      <div style={{ height: '100vh', width: '100vw', transition: `all .5s ${isOpen ? '' : '.5s'}` }}>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout