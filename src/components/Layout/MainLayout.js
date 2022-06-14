import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { Sidebar } from './Sidebar'
const { useCycle } = require('framer-motion');

function MainLayout() {
  const [isOpen, toggleOpen] = useCycle(false, true);

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
      <Sidebar {...props} />
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