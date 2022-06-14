import { motion } from 'framer-motion'
import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Navbar.css';
import NavItem from './NavItem';

const variants = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -10
  }
};

function Navbar() {
  return (
    <motion.nav className='navbar' initial={variants.initial} animate={variants.animate}>
      <motion.ul style={{ marginTop: 45 }} >
        {[{ id: 0, name: 'works', url: 'works' }, { id: 2, name: 'contact', url: 'contact' }].map((a) => {
          const props = a;
          return <NavItem key={a.id} {...props} />
        })}
      </motion.ul>
      <Link to='home'>
      <motion.div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src='/logo192.png' alt='logo' height={40} width={40} style={{ marginTop: 30 }} />
          {/* <p style={{ textTransform: 'uppercase',color:'var(--dark-blue)', margin:0, fontWeight:600, fontSize:16 }}>Syamsul</p>
          <p style={{ textTransform: 'uppercase',color:'var(--dark-blue)', margin:0, fontWeight:600, fontSize:16 }}>Arifin</p> */}
      </motion.div>
        </Link>
      <motion.ul style={{ marginTop: 45 }}>
        {[{ id: 0, icon: <BsFacebook />, url: '' }, { id: 1, icon: <BsGithub />, url: '' }, { id: 2, icon: <BsLinkedin />, url: '' }, { id: 3, icon: <BsInstagram />, url: '' }].map((a) => {
          const props = a;
          return <NavItem key={a.id} {...props} />
        })}
      </motion.ul>
    </motion.nav>
  )
}

export default Navbar