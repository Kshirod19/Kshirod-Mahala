import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BlendedPreloader = ({ setShowSplash }) => {
  const [letters, setLetters] = useState([]);

  // Split name into letters
  useEffect(() => {
    const name = "Kshirod Mahala";
    setLetters(name.split(""));

    // After the animation completes, hide the preloader and show the main content
    setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Adjusted duration to match animation time
  }, [setShowSplash]);

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden text-white bg-black font-namefont">
      <div className="flex flex-col items-center text-6xl">
        {/* Swarm Effect for Text */}
        <div className="flex flex-wrap justify-center">
          {/* Large Screens: Single Line */}
          <motion.div
            className="hidden gap-3 lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: Math.random() * 50 - 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Mobile & Tablet: Two-Line Split */}
          <motion.div
            className="flex flex-col text-center lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="flex gap-2">
              {letters.slice(0, 7).map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: Math.random() * 50 - 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 * index,
                    duration: 0.5,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="flex gap-2">
              {letters.slice(7).map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: Math.random() * 50 - 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 * (index + 7),
                    duration: 0.5,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.div>
        </div>

        {/* Line Draw Reveal */}
        <motion.svg width="320" height="40" className="mt-4">
          <motion.line
            x1="0"
            y1="20"
            x2="320"
            y2="20"
            stroke="white"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default BlendedPreloader;
