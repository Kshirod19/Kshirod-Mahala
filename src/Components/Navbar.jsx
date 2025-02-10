import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const navLinks = ["home", "about", "projects", "contact"];
  const sectionsRef = useRef({});

  const observer = useRef(null);

  useEffect(() => {
    sectionsRef.current = navLinks.reduce((acc, link) => {
      acc[link] = document.getElementById(link);
      return acc;
    }, {});

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      if (observer.current) {
        Object.values(sectionsRef.current).forEach((section) =>
          observer.current.unobserve(section)
        );
      }
    };
  }, [navLinks]);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const handleSmoothScroll = (section) => {
    setIsScrolling(true); // Activate blur effect
    setTimeout(() => setIsScrolling(false), 1200); // Remove blur after scrolling

    gsap.to(window, {
      scrollTo: { y: `#${section}` },
      duration: 1.2,
      ease: "power3.out",
    });

    setTimeout(() => closeMenu(), 600); // Keep menu open briefly before closing
  };

  return (
    <motion.div
    initial={{ y: "-100%", opacity: 0 }}
    animate={{ y: "0%", opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut", delay: 1 }}
    className={`fixed z-30 w-full ${
      click ? "bg-opacity-95" : "bg-opacity-10"
    } bg-[#2253bc] transition-colors duration-500 shadow-lg backdrop-blur-lg box-border`}
  >
  
      <nav className="flex justify-between px-4 py-3 mx-auto max-w-5xl lg:px-8 box-border">
        {/* Logo */}
        <div className="flex items-center z-20">
          <div className="text-2xl font-bold cursor-pointer">
            <span className="text-white font-logoname">Kshirod</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden z-20 cursor-pointer"
          onClick={handleClick}
          aria-expanded={click}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: click ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {click ? (
              <IoClose size={30} className="text-white" />
            ) : (
              <CgMenuGridR size={30} className="text-white" />
            )}
          </motion.div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {click && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="lg:hidden absolute inset-0 w-full h-screen bg-[#111827] bg-opacity-95 flex flex-col gap-10 items-center justify-center"
            >
              {navLinks.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    delay: 0.6 + index * 0.08, // Start revealing AFTER dropdown completes
                    duration: 0.6,
                  }}
                  className="overflow-hidden"
                >
                  <motion.button
                    className={`text-white text-3xl block relative transition-colors duration-300 ${
                      activeLink === item ? "text-blue-500" : "hover:text-blue-400"
                    }`}
                    onClick={() => handleSmoothScroll(item)}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </motion.span>
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-8">
          {navLinks.map((item, index) => (
            <motion.li
              key={item}
              className={`text-lg relative transition-colors duration-300 ${
                activeLink === item ? "text-blue-500" : "text-white hover:text-blue-400"
              }`}
            >
              <motion.button
                onClick={() => handleSmoothScroll(item)}
              >
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.3 + index * 0.05, // Speed-up effect
                  }}
                  className="inline-block"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.span>
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Blur effect when scrolling */}
      {isScrolling && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
    </motion.div>
  );
};

export default Navbar;
