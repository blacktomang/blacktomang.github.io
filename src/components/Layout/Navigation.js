import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({isOpen}) => (
  <motion.ul variants={variants} style={isOpen ? {} : {display:'none'}}>
    {itemIds.map(i => (
      <MenuItem i={i.id} key={i.id} url={i.url} name={i.name}/>
    ))}
  </motion.ul>
);

const itemIds = [{ id: 0, name: 'Contact', url: 'contact' }, { id: 1, name:'Works',url:'works'}];
