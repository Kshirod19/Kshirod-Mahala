import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import ProjectCard from "./ProjectCard"; // Import the individual card component
import bookify from "../Portfolio-photos/Logo.png";
import arialsecurity from "../Portfolio-photos/Arial.png";
import passmgr from "../Portfolio-photos/Password-Manager.png";
import weatherapp from "../Portfolio-photos/Weather App.png";
import portfolio from "../Portfolio-photos/Photo1.png";
const projects = [
  {
    title: "Bookify",
    img: bookify,
    description:
      "Bookify is an intuitive platform enabling seamless book transactions like listing, buying, and selling. Built with ReactJS, Tailwind CSS, and Firebase for real-time updates and user authentication, it offers a user-friendly interface and high responsiveness.",
    skills: ["ReactJS", "Tailwind CSS", "Firebase"],
    link: "https://kshirod19.github.io/Bookify/",
  },
  {
    title: "Arial Security & Escort Services",
    img: arialsecurity,
    description:
      "A professionally designed static website for Arial Security & Escort Services. The project integrates modern design principles and fully responsive layouts to ensure usability across devices.",
    skills: ["ReactJS", "Tailwind CSS", "Responsive Design"],
    link: "https://kshirod19.github.io/Arial-Security-Escort/",
  },
  {
    title: "Password Manager Website",
    img: passmgr,
    description:
      "A secure Password Manager UI with features like encrypted password storage, authentication, and account management. Developed using the MERN stack, this project emphasizes security and user accessibility.",
    skills: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
  },
  {
    title: "Weather Report Website",
    img: weatherapp,
    description:
      "An interactive Weather Report App delivering real-time weather updates using WeatherAPI. Built with ReactJS and Tailwind CSS, it ensures a smooth user experience with an appealing design.",
    skills: ["ReactJS", "Tailwind CSS", "WeatherAPI"],
    link: "https://kshirod19.github.io/Weather-Report-App/",
  },
  {
    title: "Bhavya Bansal's Portfolio (CTO Persist Ventures)",
    img: portfolio,
    description:
      "An interactive Weather Report App delivering real-time weather updates using WeatherAPI. Built with ReactJS and Tailwind CSS, it ensures a smooth user experience with an appealing design.",
    skills: ["ReactJS", "Tailwind CSS", "WeatherAPI"],
    link: "https://kshirod19.github.io/Bhavya-Bansal-Portfolio/",
  },
];

const ProjectList = () => {
  const container = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });

    const handleAnimationFrame = (time) => {
      lenis.raf(time);
      requestAnimationFrame(handleAnimationFrame);
    };
    requestAnimationFrame(handleAnimationFrame);

    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
    id="projects"
      ref={container}
      className="bg-gradient-to-b from-[#303030] to-[#404040] w-full h-auto box-border "
    >
      <div className="relative w-full lg:h-[70vh] md:h-[50vh] h-[30vh] grid place-content-center text-white">
        <h1 className="text-3xl font-semibold text-center md:text-5xl">
          My Projects
        </h1>
      </div>

      <div className="box-border w-full py-10 text-white ">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={`p_${i}`}
              index={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
