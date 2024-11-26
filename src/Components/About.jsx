import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import reactjs from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import framer from "../assets/framer.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  const imageContainerRef = useRef(null);
  const tools = [html, css, js, reactjs, tailwind, framer];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textLines = document.querySelectorAll(".text-paragraph");
    textLines.forEach((line, index) => {
      gsap.fromTo(
        line,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          delay: index * 0.5,
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });

    tools.forEach((tool, index) => {
      gsap.fromTo(
        `.tool-icon-${index}`,
        { y: 50 * index, opacity: 0 },
        {
          y: 0,
          opacity: 1 - index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });
  }, [tools]);

  const splitWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className="inline-block transition-all duration-300 hover:text-blue-500"
      >
        {word}
        {index < text.split(" ").length - 1 && "\u00A0"}
      </span>
    ));
  };

  return (
    <div
      id="about"
      className="about-section bg-[#0d1117] h-auto min-h-screen p-6 sm:p-8 lg:p-12 overflow-hidden flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-12 items-center lg:flex-row lg:gap-20 lg:justify-center lg:items-center">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-left space-y-6">
            <motion.div
              className="text-paragraph"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-blue-300 font-semibold text-3xl sm:text-4xl">
                I’m
              </h1>
              <h2 className="text-blue-500 font-bold text-4xl sm:text-5xl">
                Kshirod Mahala
              </h2>
              <p className="text-xl sm:text-2xl tracking-wider leading-relaxed mt-4 text-white">
                {splitWords(
                  "A creative Frontend Developer who thrives on turning imaginative ideas into user-friendly digital experiences. Driven by curiosity and a passion for learning, I design and code solutions that are as functional as they are visually captivating."
                )}
              </p>
            </motion.div>
          </div>

          {/* Tool Icons */}
          <div
            ref={imageContainerRef}
            className="w-full lg:w-[40%] flex flex-wrap justify-center items-center gap-6 md:gap-8 "
          >
            {tools.map((tool, index) => (
              <motion.img
                key={index}
                src={tool}
                alt={`Tool-${index}`}
                className={`tool-icon-${index} h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full transform hover:scale-125 transition-shadow duration-500 ease-in-out`}
                whileHover={{
                  scale: 1.2,
                  boxShadow:
                    "0 0 15px 5px rgba(0, 170, 255, 0.5), 0 0 30px 10px rgba(0, 170, 255, 0.5)",
                }}
                transition={{
                  duration: 0.5,
                  ease: "ease-in-out",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
