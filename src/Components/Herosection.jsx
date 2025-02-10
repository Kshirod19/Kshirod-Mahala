import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Sparkles } from "./SparkleParticle/Sparkle";
import "../App.css";

const Herosection = () => {
  useEffect(() => {
    const nameLetters = document.querySelectorAll(".letter");

// Gradual Spacing Animation with scaling and smooth transitions
gsap.fromTo(
  nameLetters,
  { opacity: 0, letterSpacing: "0px", scale: 0.8, y: 10 },
  {
    opacity: 1,
    letterSpacing: "10px",
    scale: 1,
    y: 0,
    ease: "power3.out",
    duration: 2,
    stagger: {
      from: "start",
      amount: 1,
    },
    delay: 2, // Delayed start for smooth effect
    onComplete: () => {
      // Revert scale to normal smoothly
      gsap.to(nameLetters, {
        scale: 1,
        ease: "power3.inOut",
        duration: 1.5,
        stagger: {
          from: "end",
          amount: 0.6,
        },
      });
    },
  }
);

// Smooth color morphing for text (Blue 500)
gsap.to(nameLetters, {
  color: "hsl(207, 100%, 50%)",
  duration: 3,
  repeat: -1,
  yoyo: true,
  stagger: 0.2, // Slightly slower stagger for better effect
  ease: "sine.inOut",
});

// Smooth subtitle reveal with optimized timing
gsap.fromTo(
  ".subtitle",
  { opacity: 0 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 2,
    delay: 4.7, // 2s delay after the name animation
    ease: "power3.out",
  }
);


    // 3D Scroll Animation
    const scrollText = document.querySelectorAll(".scroll-text");
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      scrollText.forEach((textElement) => {
        const offset = textElement.offsetTop;
        const elementHeight = textElement.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollProgress =
          (scrollPosition + windowHeight - offset) /
          (elementHeight + windowHeight);

        const rotation = Math.min(Math.max(scrollProgress * 60 - 30, -30), 30);
        let opacity = 1 - Math.abs(scrollProgress - 0.5) * 1.5;
        opacity = Math.min(opacity, 1);
        opacity = Math.max(opacity, 0.2);

        gsap.to(textElement, {
          rotationY: rotation,
          opacity: opacity,
          transformStyle: "preserve-3d",
          ease: "power3.out",
          duration: 0.1,
        });
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#000000] to-[#202020] gap-10 px-6 text-center overflow-hidden"
    >
  {/* Updated sparkles positioning */}
  <div
        style={{
          maskImage:
            "radial-gradient(closest-side at 50% 50%, white, transparent)",
          WebkitMaskImage:
            "radial-gradient(closest-side at 50% 50%, white, transparent)",
        }}
        className="absolute 2xl:-top-[calc(27%-56px)] lg:-top-[calc(32%-56px)] md:-top-[calc(19%-56px)] -top-[calc(26%-56px)] left-0 w-full h-96 overflow-hidden
    before:absolute before:inset-0 before:bg-[radial-gradient(circle at bottom, #3273ff, transparent 90%)] before:opacity-40
    after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%]
    after:border-t after:border-[#163474] after:bg-[#3273ff2d]"
      >
        <Sparkles
          density={500} // Increased particle count
          speed={1} // Reduced speed for smoothness
          size={2} // Increased size for better visibility
          direction="bottom" // Particles move downward
          opacitySpeed={1} // Gradual fading
          color="#32A7FF" // Blue color for particles
          className="absolute inset-x-0 top-1/2 h-full w-full z-20"
        />
      </div>

      {/* Name Animation */}
      <motion.h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-wider drop-shadow-lg name-container scroll-text z-30">
        <span className="hidden lg:inline">
          {"Kshirod".split("").map((letter, index) => (
            <span
              key={index}
              className="letter inline-block transition-all duration-500 hover:scale-110 hover:transition-all"
            >
              {letter}
            </span>
          ))}
          <span className="inline-block ml-6"></span>
          {"Mahala".split("").map((letter, index) => (
            <span
              key={index}
              className="letter inline-block transition-all duration-500 hover:scale-110 hover:transition-all"
            >
              {letter}
            </span>
          ))}
        </span>
        <span className="lg:hidden block">
          {"Kshirod".split("").map((letter, index) => (
            <span
              key={index}
              className="letter inline-block transition-all duration-500 hover:scale-110 hover:transition-all"
            >
              {letter}
            </span>
          ))}
          <br />
          {"Mahala".split("").map((letter, index) => (
            <span
              key={index}
              className="letter inline-block transition-all duration-500 hover:scale-110 hover:transition-all"
            >
              {letter}
            </span>
          ))}
        </span>
      </motion.h1>

      {/* Subtitle with Gradient Effect */}
      <motion.h2 className="subtitle font-bold text-xl md:text-2xl lg:text-3xl leading-[100%] tracking-wide lg:max-w-3xl md:max-w-lg max-w-xs mx-auto drop-shadow-sm scroll-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Turning challenges into opportunities through full stack innovation.
      </motion.h2>
    </div>
  );
};

export default Herosection;
