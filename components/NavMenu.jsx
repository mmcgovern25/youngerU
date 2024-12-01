"use client";

import React, {useState} from 'react'
import { navItems } from '../utils/NavData';
import Link from 'next/link';

import Spotify from "@/public/spotify.svg";
import Instagram from "@/public/instagram.svg";
import Youtube from "@/public/youtube.svg";
import ApplePodcast from "@/public/applepodcast.svg";
import TikTok from "@/public/tiktok.svg";

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative block sm:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        {menuOpen && (<div className="absolute -top-2 -right-2 w-64 min-h-64 rounded-md bg-neutral-50 p-8 z-10 flex flex-col">
            <ul className="flex flex-col gap-2 flex-1">
                {navItems.map(({label}) => (
                    <Link href="/" key={label}>
                        <li className="text-2xl font-medium">{label}</li>
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
        </div>
    )}
    </div>
  )
}

export default NavMenu
