import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import './Navbar.css';

function Navbar() {
  return (
    <motion.nav className='navbar'>
      <motion.ul style={{marginTop:45}}>
        {[{ id: 0, name: 'works', link: 'works' }, { id: 2, name: 'contact', link: 'contact' }].map((a) => {
          return <motion.li key={a.id}>
            <Link to={a.link}>
              {a.name.toLocaleUpperCase()}
            </Link>
          </motion.li>
        })}
      </motion.ul>
      <img src='/logo192.png' alt='logo' height={40} width={40} style={{marginTop:30}}/>
      <motion.ul style={{marginTop:45}}>
        {[{ id: 0, icon: <BsFacebook />, url: '' }, { id: 1, icon: <BsFacebook />, url: '' }, { id: 2, icon: <BsFacebook />, url: '' }].map((a) => {
          return <motion.li key={a.id}>
            {a.icon}
          </motion.li>
        })}
      </motion.ul>
   </motion.nav>
  )
}

export default Navbar