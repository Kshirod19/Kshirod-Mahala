import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IconCloud } from "./IconCloud"; // import the IconCloud component

const Footer = () => {
  const iconSlugs = ["linkedin", "github", "instagram", "facebook"]; // Add the icons you want to display in the cloud

  return (
    <div
      id="contact"
      className="relative h-screen w-full bg-slate-700 text-white py-8 px-4 sm:px-8 md:px-12 flex justify-center items-center"
    >
      <div className="flex w-full flex-col md:flex-row justify-around items-center gap-20">
        {/* Left Section */}
        <div className="footer_left text-xl md:text-2xl flex flex-col gap-3 font-paragraph z-10">
          <div className="email flex items-center gap-3 md:gap-5 hover:text-gray-300 transition">
            <MdOutlineEmail className="text-2xl" /> rakeshkshirod88@gmail.com
          </div>
          <div className="address flex items-center gap-3 md:gap-5 hover:text-gray-300 transition">
            <IoLocationSharp className="text-2xl" /> Sonpur, Odisha, India
          </div>
          <div className="call flex items-center gap-3 md:gap-5 hover:text-gray-300 transition">
            <IoCall className="text-2xl" /> 9337212914
          </div>
        </div>

        {/* Right Section */}
        <div className="footer_right flex gap-6 md:gap-9 text-3xl md:text-4xl mt-4 md:mt-0 z-10">
          <a
            href="https://www.linkedin.com/in/kshirod-mahala-548b49273"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/Kshirod19" aria-label="GitHub">
            <IoLogoGithub />
          </a>
          <a
            href="https://www.instagram.com/kshirod.mahala/"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/kshirod.mahala.3?mibextid=ZbWKwL"
            aria-label="Facebook"
          >
            <FaFacebookSquare />
          </a>
        </div>
      </div>

      {/* Cloud Effect */}
      <div className="cloud-effect absolute bottom-0 left-0 w-full z-0">
        <IconCloud iconSlugs={iconSlugs} />
      </div>
    </div>
  );
};

export default Footer;
