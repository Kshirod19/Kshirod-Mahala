import { motion, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({ index, project, progress, range, targetScale }) => {
  const { title, description, skills, link, img } = project;
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(progress, [0, 1], [1.1, 1]);

  return (
    <div
      ref={container}
      className="flex items-center justify-center sticky lg:top-[20%] md:top-[15%] top-[10%] p-4 font-bodyfont"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.4)" }}
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
        className="flex flex-col relative h-auto max-w-4xl w-full rounded-lg p-4 sm:p-6 md:p-10 bg-gradient-to-b from-[#202020] to-[#404040] shadow-lg transition-all border border-[#303030] hover:border-[#505050]"
      >
        <div className="flex flex-col h-full gap-6 justify-evenly sm:flex-row">
          {/* Project Image */}
          <div className="relative flex justify-center items-center h-[220px] sm:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
            <motion.img
              src={img}
              alt={`${title} preview`}
              style={{ scale: imageScale }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Project Details */}
          <div className="flex flex-col w-full space-y-4 sm:w-[40%] justify-center items-start text-start sm:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl font-bold text-white md:text-2xl lg:text-3xl"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm leading-relaxed text-gray-300 md:text-base lg:text-lg"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-base font-bold text-white md:text-lg">Skills:</h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Animated "View Project" Button */}
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "#2563EB", color: "#ffffff" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-white transition duration-300 ease-out bg-blue-600 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                View Project
                <motion.svg
                  width="14"
                  height="14"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="currentColor"
                  />
                </motion.svg>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
