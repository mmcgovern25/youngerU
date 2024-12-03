import React from "react";
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

function Item({ index }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  // Determine translateX based on index
  const translateX = index % 2 === 0 ? '-100px' : '400px';
  const translateY = '-100px'; // Adjust this value as needed
  const barPosition = index % 2 === 0 ? 'right' : 'left';
  const barTranslateX = barPosition === 'right' ? '100%' : '-150%'; // Adjusted for positioning next to the circle
  
  return (
    <section>
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
          </svg>
        </figure>
        <motion.div
          className="step-bar"
          style={{
            position: 'absolute',
            top: '50%', // Center vertically
            width: '150px', // Set the width of the bar
            height: '30px', // Set the height of the bar
            backgroundColor: '#3498db', // Change to your desired color
            borderRadius: '5px',
            transform: `translateX(${barTranslateX})`, // Adjusted for positioning
            opacity: scrollYProgress,
            transition: 'transform 0.5s ease, opacity 0.5s ease'
          }}
        >
          Step {index + 1}
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
    <>
      {[...Array(5)].map((_, index) => (
        <Item key={index} index={index} />
      ))}
      <motion.div className="progressline" style={{ scaleX }} />
    </>
  );
}
