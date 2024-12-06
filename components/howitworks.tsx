import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { motion, useScroll, useSpring,
  useTransform,
  MotionValue } from "framer-motion";
import "../styles/howitworkstyles.css"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 20000);

  return (
    <section>
      <div ref={ref}>
        <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
      </div>
    </section>
  );
}

function Item({ index, text, style }: { index: number; text: { title: string; description: string; titleClass?: string; descriptionClass?: string }; style?: React.CSSProperties }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  // Determine translateX based on index
  const translateX = index % 2 === 0 ? '-100px' : '400px';
  const translateY = '-100px'; // Adjust this value as needed
  const barPosition = index % 2 === 0 ? 'right' : 'left';
  const barTranslateX = barPosition === 'right' ? '100%' : '-100%'; // Adjusted for positioning next to the circle
  const barColor = index % 2 === 0 ? '#0077BC' : '#65B5AC'; // Alternate colors based on index
  
  return (
    <section className="custom-section" style={{ margin: 0, padding: 0 }}>
      <div ref={ref}>
        <figure className="progress" style={{ transform: `translateX(${translateX}) translateY(${translateY})` }}>
          <svg id="progress" width="85" height="85" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
            <motion.text
              x="50"
              y="58"
              textAnchor="middle"
              fill="#65B5AC" // Change color as needed
              fontSize="20"
              transform="rotate(90 50 50)" // Rotate text 90 degrees
            >
              {index + 1}
            </motion.text>
          </svg>
        </figure>
        <motion.div
          className="step-bar"
          style={{
            position: 'absolute',
            top: '50%', // Center vertically
            width: '300px', // Set the width of the bar
            height: '140px', // Set the height of the bar
            backgroundColor: barColor, // Use the calculated color
            borderRadius: '5px',
            transform: `translateX(${barTranslateX})`, // Adjusted for positioning
            opacity: useTransform(scrollYProgress, [0, 0.6], [0, 1]), // Adjusted for earlier opacity fill
            transition: 'transform 0.5s ease, opacity 0.5s ease'
          }}
        >
          <h3 className={`text-xl ${text.titleClass}`}><strong>{text.title}</strong></h3>
          <p className={text.descriptionClass}>{text.description}</p>
        </motion.div>
      </div>

      
      
    </section>
  );
}

export default function () {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.2
  });

  return (
    <div>
      <div style={{ marginBottom: '15vh' }}>
        <Item index={0} text={{ title: "1. Get Informed.", description: "Be sure to get the latest insights from not our podcast, but also from the resources we often recommend." }} />
      </div>
      <div style={{ marginBottom: '15vh' }}>
        <Item index={1} text={{ title: "2. Fill out our in-depth questionaire.", description: "Everybody is different, in order for me to best to help you, everything has to be entirely personilized towards you." }} />
      </div>
      <div style={{ marginBottom: '15vh' }}>
        <Item index={2} text={{ title: "3. Check your email for a follow up.", description: "After review, I will get back in touch with you as soon as possible with a few different options for a gameplan." }} />
      </div>
      <div style={{ marginBottom: '15vh' }}>
        <Item index={3} text={{ title: "4. Choose your plan.", description: "Pick the plan that you think best suites your lifestyle and makes the most sense to you." }} />
      </div>
      <div style={{ marginBottom: '15vh' }}>
        <Item index={4} text={{ title: "5. Let's work!", description: "No description needed. Now its time to make real change." }} />
      </div>
      <motion.div className="progressline" style={{ scaleX }} />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <motion.div
          className="text-white w-[250px] h-[50px] sm:w-[350px] md:w-[450px] lg:w-[550px] sm:h-[60px] rounded-[50px] bg-[#0077BC] cursor-pointer flex items-center justify-center text-center text-sm sm:text-base mb-24"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          Lets Get Started!
        </motion.div>
      </div>
    </div>
  );
}
