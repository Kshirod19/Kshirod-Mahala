import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin"; // Import ScrollToPlugin

gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const controls = useAnimation();

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
    setTimeout(closeMenu, 200); // Slight delay for a smoother closing transition
  };

  // Smooth scroll to section
  const handleSmoothScroll = (section) => {
    gsap.to(window, {
      scrollTo: { y: `#${section}`, offsetY: 50 }, // Offset to prevent overlap with fixed navbar
      duration: 1.5, // Scroll duration for smoothness
      ease: "power3.out", // Easing function for smooth scroll
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!click) {
      if (isScrolling) {
        controls.start({ y: -100 });
      } else {
        controls.start({ y: 0 });
      }
    } else {
      controls.start({ y: 0 });
    }
  }, [isScrolling, click, controls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({ opacity: 1, y: 0 });
    }, 1000);
    return () => clearTimeout(timer);
  }, [controls]);

  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [click]);

  // Variants for nav link animation
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const navLinks = ["home", "about", "projects", "contact"];

  // Animation for fading in the navbar on page load
  const fadeInVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`fixed z-30 w-full ${
        isScrolling ? "bg-[#111827] bg-opacity-90" : "bg-transparent"
      } transition-colors duration-500 shadow-lg backdrop-blur-lg box-border`}
      id="navbar"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="flex justify-between px-4 py-3 mx-auto max-w-5xl transition-transform duration-300 lg:px-8 box-border">
        <div className="flex items-center z-20">
          <div className="text-2xl font-bold cursor-pointer">
            <span className="text-white font-logoname">Kshirod</span>
          </div>
        </div>
        <div
          className="lg:hidden z-20 cursor-pointer"
          onClick={handleClick}
          aria-expanded={click}
        >
          <motion.div
            animate={{ rotate: click ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {click ? (
              <IoClose
                size={30}
                className="text-white transition-colors duration-300"
              />
            ) : (
              <CgMenuGridR
                size={30}
                className="text-white transition-colors duration-300"
              />
            )}
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.ul
          className={`${
            click ? "translate-x-0" : "-translate-x-full"
          } lg:hidden absolute inset-0 w-full h-screen bg-[#111827] bg-opacity-95 gap-8 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out`}
          initial={{ opacity: 0, y: -20 }}
          animate={click ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {navLinks.map((item, index) => (
            <motion.li
              key={item}
              className={`nav-item ${activeLink === item ? "active" : ""}`}
              variants={navItemVariants}
              initial="hidden"
              animate={click ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="text-white text-3xl hover:text-blue-500 transition-colors duration-300"
                onClick={() => {
                  handleSmoothScroll(item);
                  handleSetActive(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-8">
          {navLinks.map((item, index) => (
            <motion.li
              key={item}
              className={`nav-item ${activeLink === item ? "active" : ""}`}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="text-white text-lg hover:text-blue-400 transition-colors duration-300"
                onClick={() => {
                  handleSmoothScroll(item);
                  handleSetActive(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
