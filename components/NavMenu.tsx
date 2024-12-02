"use client";

import React, {useState} from 'react'
import { navItems } from '../utils/NavData';
import Link from 'next/link';
import { motion, AnimatePresence } from "motion/react";

import Spotify from "@/public/spotify.svg";
import Instagram from "@/public/instagram.svg";
import Youtube from "@/public/youtube.svg";
import ApplePodcast from "@/public/applepodcast.svg";
import TikTok from "@/public/tiktok.svg";
import NavButton from './NavButton';

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative block md:hidden">
        <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <AnimatePresence>
        {menuOpen && (<motion.div 
        initial={{scale: 0, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        exit={{scale: 0, opacity: 0}}
        transition={{duration: 0.5, type: "spring"}}
        className="absolute -top-2 -right-2 w-64 min-h-64 rounded-md bg-[#65B5AC] p-8 z-10 flex flex-col origin-top-right">
            <ul className="flex flex-col gap-2 flex-1  text-2xl font-bold">
                {navItems.map(({label, path}) => (
                    <Link href={path} key={label}>
                        <li className="text-white hover:text-[#0077BC] text-2xl font-bold hover:scale-105 transition-transform duration-200">{label}</li>
                    </Link>
                ))}
            </ul>
            <div className="flex gap-4 mt-8">
                <Link href="#">
                    <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#">
                    <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#">
                    <Spotify className="h-5 w-5" />
                </Link>
                <Link href="#">
                    <TikTok className="h-5 w-5" />
                </Link>
                <Link href="#">
                    <ApplePodcast className="h-5 w-5" />
                </Link>
            </div>
        </motion.div>
    )}
    </AnimatePresence>
    </div>
  )
}

export default NavMenu
