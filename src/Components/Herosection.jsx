import { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import image1 from "../Portfolio-photos/Photo1.png";
import Herobg from "../assets/herobg.png";

const Herosection = () => {
  const fullText = "Innovate. Create. Inspire. Repeat.";
  const typingSpeed = 40;
  const backspaceDelay = 5000;
  const typingDelay = 3000;

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const controls = useAnimation();
  const scrollY = useMotionValue(0); // Track scroll position smoothly
  const kshirodX = useTransform(scrollY, [0, 800], [0, 200]); // Move right
  const mahalaX = useTransform(scrollY, [0, 800], [0, -200]); // Move left

  // Image animations based on scroll
  const imageScale = useTransform(scrollY, [0, 300], [1, 0.8]); // Scale down on scroll
  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0.5]); // Fade out on scroll

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });

    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, scrollY]);

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, backspaceDelay);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, typingDelay);
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    fullText,
    typingSpeed,
    backspaceDelay,
    typingDelay,
  ]);

  return (
    <div
      id="home"
      className="relative flex lg:items-center md:items-center items-start justify-center min-h-screen bg-cover bg-center overflow-hidden pt-60 md:pt-0 lg:pt-0"
      style={{ backgroundImage: `url(${Herobg})` }}
    >
      {/* Image reveal with scroll-based scale and opacity */}
      <motion.img
        className="absolute bottom-10 right-1/4 md:bottom-16 md:right-[5%] lg:bottom-0 lg:right-[15%] 2xl:bottom-0 2xl:right-1/4 h-44 sm:h-52 md:h-80 lg:h-80 object-contain rounded-lg shadow-xl z-20"
        src={image1}
        alt="Hero Image"
        initial={{ opacity: 0, x: 100 }} // Start from the right
        animate={{
          opacity: 1,
          x: 0, // Move to the original position
          scale: 1,
        }}
        transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }} // Delay for image reveal
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 1 }}
        style={{
          scale: imageScale, // Dynamic scale based on scroll
          opacity: imageOpacity, // Dynamic opacity based on scroll
        }}
      />

      {/* Text reveal with a delay */}
      <motion.div
        className="px-8 lg:px-0 text-center max-w-4xl mx-auto z-10"
        style={{
          opacity: 1 - Math.min(scrollY.get() / 600, 1), // Adjust for smoother fade
          transform: `translateY(${scrollY.get() * 0.3}px)`, // Slower text translation
        }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-5xl font-Head text-white leading-tight"
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and below position
          animate={{ opacity: 1, y: 0 }} // Fade and move to position
          transition={{ duration: 1, delay: 2.5, ease: "easeOut" }} // Delay for text reveal
        >
          <span className="font-black text-gray-500">&lt;</span>
          {displayedText}
          <span className="font-black text-gray-500">/&gt;</span>
        </motion.h1>
      </motion.div>

      {/* Animated name reveal with scroll-based animation */}
      <motion.div className="flex flex-col text-7xl font-medium lg:left-1/3 absolute lg:bottom-[10%] md:bottom-[15%] md:left-[20%] bottom-1/4">
        {/* Animated Kshirod reveal */}
        <motion.span
          className="text-gray-900"
          style={{ x: kshirodX }} // Smooth rightward movement
          initial={{ opacity: 0, x: -100 }} // Start from the left
          animate={{ opacity: 1, x: 0 }} // Fade in and move to its final position
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }} // Delay for smooth reveal
        >
          Kshirod
        </motion.span>

        {/* Animated Mahala reveal */}
        <motion.span
          className="text-gray-900"
          style={{ x: mahalaX }} // Smooth leftward movement
          initial={{ opacity: 0, x: 100 }} // Start from the right
          animate={{ opacity: 1, x: 0 }} // Fade in and move to its final position
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }} // Longer delay for smooth reveal
        >
          Mahala
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Herosection;
