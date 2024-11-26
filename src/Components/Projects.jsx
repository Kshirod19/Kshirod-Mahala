import React from "react";
import { motion } from "framer-motion";
import bookify from "../Portfolio-photos/Logo.png";
import passmgr from "../Portfolio-photos/Password-Manager.png";
import arialsecurity from "../Portfolio-photos/Arial.png";
import weatherapp from "../Portfolio-photos/Weather App.png";

const items = [
  {
    id: 1,
    title: "Bookify",
    img: bookify,
    desc: "Bookify is a platform built with ReactJS and Tailwind CSS, enabling users to list, buy, and sell books. It integrates Firebase for real-time database and user authentication, offering seamless book transactions.",
    link: "https://kshirod19.github.io/Bookify/",
  },
  {
    id: 2,
    title: "Arial Security & Escort Services",
    img: arialsecurity,
    desc: "Developed a static website for Arial Security & Escort Services using ReactJS and Tailwind CSS. The project focuses on modern design principles and responsiveness.",
    link: "https://kshirod19.github.io/Arial-Security-Escort/",
  },
  {
    id: 3,
    title: "Password Manager Website",
    img: passmgr,
    desc: "Developed a secure Password Manager UI using the MERN stack with features like user authentication, encrypted storage, and responsive design.",
  },

  {
    id: 4,
    title: "Weather Report Website",
    img: weatherapp,
    desc: "A Weather Report App built with ReactJS, TailwindCSS, and WeatherAPI that provides real-time weather updates.",
    link: "https://kshirod19.github.io/Weather-Report-App/",
  },
  {
    id: 5,
    title: "Pokemon-List",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XhP6bWIl0-RDr7Jn3XI2cacVTJVRNz8AaA&s",
    desc: "Pokemon-List is a ReactJS-based website styled with Tailwind CSS that fetches Pokémon data via an API, displaying a comprehensive list of all available Pokémon, offering a smooth and responsive user experience.",
    link: "https://kshirod19.github.io/Pokemon-List/",
  },
];

function ProjectItem({ title, img, desc, link }) {
  return (
    <section className="scroll-snap-center flex flex-col md:flex-row items-center justify-center w-full px-6 py-10 gap-20">
      <motion.div
        className="flex justify-center items-center w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 1.2 }} // Initial scale larger
        whileInView={{ opacity: 1, scale: 1 }} // Scale down to normal on scroll
        transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
      >
        <img
          src={img}
          alt={title}
          className="object-cover w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-lg shadow-lg"
        />
      </motion.div>
      <motion.div
        className="flex flex-col items-start max-w-sm gap-6 text-white"
        initial={{ opacity: 0, scale: 1.2 }} // Initial scale larger
        whileInView={{ opacity: 1, scale: 1 }} // Scale down to normal on scroll
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl font-bold text-gray-100 md:text-3xl lg:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-base md:text-lg lg:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {desc}
        </motion.p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform">
              Visit
            </button>
          </a>
        )}
      </motion.div>
    </section>
  );
}

export default function Projects() {
  return (
    <div
      id="projects"
      className="scroll-snap-type-y-mandatory h-auto overflow-y-scroll bg-[#0d1117] w-full flex flex-col items-center justify-center py-10 px-10 "
      style={{ scrollSnapType: "y mandatory" }}
    >
      <span className="head justify-center items-center flex text-white text-4xl py-6">
        Projects
      </span>
      {items.map((item) => (
        <ProjectItem
          key={item.id}
          title={item.title}
          img={item.img}
          desc={item.desc}
          link={item.link}
        />
      ))}
    </div>
  );
}
