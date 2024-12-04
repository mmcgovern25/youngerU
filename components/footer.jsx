"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Spotify from "@/public/spotify.svg";
import Instagram from "@/public/instagram.svg";
import Youtube from "@/public/youtube.svg";
import ApplePodcast from "@/public/applepodcast.svg";
import TikTok from "@/public/tiktok.svg";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isWaveAtFooter, setIsWaveAtFooter] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show footer when scrolled to the bottom
    if (scrollY + windowHeight >= documentHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Check if the footer is in view
    const footer = document.getElementById('footer');
    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top <= windowHeight) {
      setIsWaveAtFooter(true);
    } else {
      setIsWaveAtFooter(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className={`ondebox absolute left-0 right-0 z-0 transition-transform duration-300 ${isWaveAtFooter ? 'translate-y-full' : 'translate-y-0'}`}>
        <svg 
          className="onde" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 24 150 28" 
          preserveAspectRatio="none" 
          shapeRendering="auto"
        >
          <defs>
            <path id="onda" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z" />
          </defs>
          <g className="parallaxonde">
            <use xlinkHref="#onda" x="48" y="0" fill="rgba(0, 119, 188, 0.6)" />
            <use xlinkHref="#onda" x="48" y="3" fill="rgba(0, 119, 188, 0.4)" />
            <use xlinkHref="#onda" x="48" y="5" fill="rgba(0, 119, 188, 0.2)" />
            <use xlinkHref="#onda" x="48" y="7" fill="rgba(101, 181, 172, 0.6)" />
            <use xlinkHref="#onda" x="48" y="10" fill="rgba(101, 181, 172, 0.4)" />
            <use xlinkHref="#onda" x="48" y="12" fill="rgba(101, 181, 172, 0.2)" />
          </g>
        </svg>
      </div>

      <footer id="footer" className={`bg-[#65B5AC] p-4 z-10 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          
          <div className="flex space-x-4">
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
      </footer>
    </div>
  );
}
