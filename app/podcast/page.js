'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitText from 'split-text-js';
import "@/styles/podcaststyles.css";

export default function Podcast() {

    useEffect(() => {
        const titles = gsap.utils.toArray('.animated-text p'); // Target only the animated text
        const tl = gsap.timeline();

        titles.forEach((title, index) => {
            const splitTitle = new SplitText(title);

            tl.from(splitTitle.chars, {
                opacity: 0,
                y: 80,
                duration: 1
            }, "<");

            if (index !== titles.length - 1) {
                tl.to({}, {
                    duration: 1.5
                });

                tl.to(splitTitle.chars, {
                    opacity: 0,
                    y: -80,
                    rotateX: 90,
                    duration: 1.5
                }, "<");
            } else {
                tl.to(splitTitle.chars, {
                    opacity: 1,
                    y: 0,
                    color: '#0077BC',
                    duration: 1.5
                }, "<");
            }
        });
    }, []);

    const iframeStyle = {
        borderRadius: '12px',
        width: '100%',
        height: '500px',
        border: '0',
        allowFullScreen: true,
        loading: 'lazy',
        marginTop: '50px'
    };

    return (
        <div className='flex flex-col items-center'>
            <div className="flex flex-row items-start mt-16">
                {/* Static Sentence */}
                <div  style={{ lineHeight: 0 }} className="mb-8 text-[#65B5AC] mr-2 lg:mr-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-bold">
                    Home to all of your
                </div>

                {/* Animated Text */}
                <div className="animated-text text-wrapper text-[#65B5AC] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4" style={{ lineHeight: 0 }}>
                    <p>Advice.</p>
                    <p>Education.</p>
                    <p>Nutrition.</p>
                    <p>YoungerU Podcasts.</p>
                </div>
            </div>

            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="450" style={iframeStyle} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/youngeru-with-matt-mcgovern/id1783846207"></iframe>
        </div>
    );
}
