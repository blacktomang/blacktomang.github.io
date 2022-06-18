/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDimensions } from "../../use-dimention";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import './Sidebar.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Sidebar = (props) => {
  const { isOpen, toggleOpen } = props;
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const closeOpenMenus = (e) => {
    // console.info(containerRef.current.contains(e.target), isOpen);
    if (isOpen && !containerRef.current.contains(e.target)) toggleOpen(a => a = false);

  };

  useEffect(() => {
    document.body.addEventListener('click', closeOpenMenus);
    return () => document.body.removeEventListener('click', closeOpenMenus);
  }, [isOpen])
  console.log(isOpen);
  return (
    <motion.nav
      className="sidebar"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <AnimatePresence >
        {isOpen && (
          <motion.div
            className="logo-name"
            initial={{ opacity: 0, pointsAtX:-10, pointsAtY:-10 }}
            animate={{ opacity: 1, pointsAtX: 100, pointsAtY: 100 }}
            exit={{ opacity: 0, pointsAtX: -10, pointsAtY: -10 }}
          ><Link to={'/home'}>
              
            <img src="/logo-white.png" alt="" height={45} />
            <p style={{ position: 'absolute', left: -27, top: 34,color:'white',width:105 }}>Syamsul Arifin</p>
          </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <Navigation isOpen={isOpen}/>
      <MenuToggle toggle={() => toggleOpen(a=>!a)} />
    </motion.nav>
  );
};
