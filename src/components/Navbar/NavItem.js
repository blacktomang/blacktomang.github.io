import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const variants = {
  animate: {
    opacity: 1,
   
  },
  initial: {
    opacity: 0,
  }
};

function NavItem(props) {
  const { id, url, name, icon } = props;
  return (
    <Link key={id} to={url}>
      <motion.li
        animate="animate"
        className={`${icon?'icon':'link'}`}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        whileFocus={{ scale: 1.1}}
      >{ icon ? icon:name.toUpperCase()}
      </motion.li>
    </Link>
  )
}

export default NavItem