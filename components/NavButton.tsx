"use client";

import { useAnimation } from "framer-motion"
import React, { useEffect } from 'react';
import { motion } from "motion/react";

interface NavMenuToggleProps {
    menuOpen: Boolean;
    setMenuOpen: (_: boolean) => void;
}

const NavButton: React.FC<NavMenuToggleProps> = ({menuOpen, setMenuOpen}) => {
  const path1Controls = useAnimation();
  const path2Controls = useAnimation();

  const path1Varients = {
    open: { d: "M3.06061 2.99999L21.0606 21"},
    closed: { d: "M0 8.5L24 8.5"},
  }

  const path2Varients = {
    open: { d: "M3.00006 21.0607L21 3.06064"},
    closed: { d: "M0 15.5L24 15.5"},
  }

  useEffect(() => {
    if (menuOpen) {
      path1Controls.start(path1Varients.open)
      path2Controls.start(path2Varients.open)
    } else {
      path1Controls.start(path1Varients.closed)
      path2Controls.start(path2Varients.closed)
    }
  }, [menuOpen])


  return (
    <div onClick={() => setMenuOpen(!menuOpen)} className='relative justify-self-center flex flex-col gap-2 cursor-pointer stroke-[#0077BC] stroke-2 z-50'>
      <svg width="24" height="24" viewBox='0 0 24'>
        <motion.path {...path1Varients.closed} animate={path1Controls} transition={{duration: 0.2}}/>
        <motion.path {...path2Varients.closed} animate={path2Controls}  transition={{duration: 0.2}} />
      </svg>
    </div>
  )
}

export default NavButton
