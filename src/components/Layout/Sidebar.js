import * as React from "react";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDimensions } from "../../use-dimention";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import './Sidebar.css';

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
  console.log(height);
  return (
    <motion.nav
      className="sidebar"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{position:'absolute', left:130, top:23,}}
            initial={{ opacity: 0, pointsAtX:-10, pointsAtY:-10 }}
            animate={{ opacity: 1, pointsAtX: 100, pointsAtY: 100 }}
            exit={{ opacity: 0, pointsAtX: -10, pointsAtY: -10 }}
          ><img src="/logo192.png" alt="" height={45} />
            <p style={{ position: 'fixed', left: 100, top: 57, }}>Syamsul Arifin</p>
          </motion.div>
        )}
      </AnimatePresence>
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
