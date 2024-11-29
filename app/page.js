'use client'
import Link from "next/link";
import { motion } from "motion/react";



export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center min-h-screen">
      <motion.div
          initial={{ x: "-40vw", opacity: 0 }}
          animate={{
            x: "-33vw",
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" },
            
  }} className="text-4xl font-bold mb-4">Younger Today</motion.div>
          <motion.div
          initial={{ x: "40vw", opacity: 0 }}
          animate={{
            x: "33vw",
            opacity: 1,
            transition: { duration: 2, ease: "easeOut", delay: 1 },
            
  }} className="text-4xl font-bold mb-4">Younger Now</motion.div>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{
            scale: 2,
            opacity: 1,
            transition: { duration: 2, delay: 2 }
          }} className="text-4xl font-bold mb-4">YoungerU</motion.div>
          <p className="text-xl mb-8">Empowering the next generation of fitness enthusiasts</p>
          <Link href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Get Started
          </Link>
      </div>

      <div className="ondebox">
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
            <use xlinkHref="#onda" x="48" y="0" fill="rgba(8, 145, 178, 0.6)" />  {/* Your blue */}
            <use xlinkHref="#onda" x="48" y="3" fill="rgba(8, 145, 178, 0.4)" />
            <use xlinkHref="#onda" x="48" y="5" fill="rgba(34, 197, 94, 0.4)" />  {/* Your green */}
            <use xlinkHref="#onda" x="48" y="7" fill="rgba(34, 197, 94, 0.2)" />
          </g>
        </svg>
      </div>
    </main>
  );
}
