import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiFramer,
} from "react-icons/si";
import ScrollReveal from "scrollreveal";
import ContainerScroll from "./ContainerScroll";

const About = () => {
  const tools = [
    { Icon: FaHtml5, name: "HTML5", color: "#E44D26" },
    { Icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
    { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
    { Icon: FaReact, name: "React", color: "#61DAFB" },
    { Icon: SiTailwindcss, name: "TailwindCSS", color: "#38BDF8" },
    { Icon: SiExpress, name: "ExpressJS", color: "#000000" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { Icon: SiFramer, name: "Framer Motion", color: "#000000" },
  ];

  useEffect(() => {
    const scrollRevealConfig = {
      reset: true,
      duration: 1200,
      distance: "50px",
    };

    ScrollReveal().reveal(".icon", {
      ...scrollRevealConfig,
      origin: "bottom",
      interval: 100,
    });
  }, []);

  return (
    <div
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-[#202020] to-[#303030] flex flex-col items-center justify-center px-5 py-10  md:py-10 lg:px-16 box-border font-bodyfont"
    >
      <ContainerScroll>

        <h2
          id="heading"
          className="mb-6 text-4xl font-extrabold text-blue-500 md:text-5xl lg:text-6xl font-namefont"
          >
          <span className="hidden lg:inline">I’m Kshirod Mahala,</span>
          <span className="lg:hidden">
            I’m <br /> Kshirod Mahala
          </span>
        </h2>

        <p
          id="description"
          className="mb-8 text-lg text-gray-300 sm:text-xl lg:text-2xl lg:max-w-3xl text-start"
        >
          I’m passionate about crafting dynamic, responsive web interfaces,
          striving to deliver impactful digital solutions with seamless
          interactivity, creativity, and a user-friendly approach.
        </p>

        {/* Tools Section */}
        <div className="flex flex-wrap items-center justify-around w-full gap-4 lg:justify-center md:justify-center sm:gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <div
            key={index}
              className="flex items-center justify-center w-16 h-16 rounded-full icon bg-gradient-to-br from-gray-600 to-blue-900"
            >
              <tool.Icon style={{ color: tool.color }} className="w-8 h-8" />
            </div>
          ))}
          </div>
      </ContainerScroll>
    </div>
  );
};

export default About;
