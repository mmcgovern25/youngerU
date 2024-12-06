import React from 'react';
import "@/styles/podcaststyles.css"
import { motion } from 'framer-motion';

export default function Podcast() {
    return (
        <>
            <h1 className="text-center text-[#65B5AC] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">Get all of the latest Podcasts here</h1>
            <iframe className="responsive-iframe items-center justify-center" src="https://open.spotify.com/embed/episode/4neLLkOmvfC2xkNRHudT1C?utm_source=generator" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </>
    )
}
