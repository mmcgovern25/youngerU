'use client'
import Link from "next/link";
import { motion } from "motion/react";
import DownIcon from '../components/downicon';
import HowItWorks from '../components/howitworks'



export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-[80vh] -mt-24">
      <motion.div
          initial={{ x: "-10vh", opacity: 0 }}
          animate={{
            x: "0vh",
            opacity: [0, 1],
            transition: { duration: 3, ease: "easeOut" },
            
  }} className="text-[#0077BC] mt-12 mb-2 text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Younger Today.</motion.div>
          <motion.div
          initial={{ x: "10vw", opacity: 0 }}
          animate={{
            x: "0vh",
            opacity: [0, 1],
            transition: { duration: 3, ease: "easeOut", delay: 1 },
            
  }} className="text-[#65B5AC] text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Younger Now.</motion.div>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 3, delay: 3 }
          }} className="mb-8 text-[80px] sm:text-[120px] md:text-[] font-bold ">
            <span className="text-[#0077BC]">younger</span>
            <span className="text-[#65B5AC]">U</span>
          </motion.div>
          <p className="text-md sm:text-xl mb-8 justify-center text-center">Here is a one sentence punchline that I dont know yet.</p>
          <motion.div
      className="text-white w-[130px] h-[50px] sm:w-[150px] sm:h-[60px] rounded-[50px] bg-[#0077BC] cursor-pointer flex items-center justify-center text-center text-sm sm:text-base"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        Lets Get Started!
      </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center -mt-8">
        <Link href="#how-it-works">
          <p className='mb-2'>How it works</p>
          <DownIcon className='mt-2'/>
        </Link>
      </div>
      



     

      <HowItWorks />
    </main>
  );
}
