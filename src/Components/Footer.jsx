import React from "react";
import { FloatingDock } from "./FloatingDock";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  const links = [
    {
      title: "Email",
      icon: (
        <TbMailFilled className="w-full h-full text-neutral-500 dark:text-neutral-300 " />
      ),
      href: "mailto:rakeshkshirod88@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/kshirod-mahala-548b49273",
    },
    {
      title: "GitHub",
      icon: (
        <IoLogoGithub className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Kshirod19",
    },
    {
      title: "Instagram",
      icon: (
        <FaInstagram className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/kshirod.mahala/",
    },
    {
      title: "Facebook",
      icon: (
        <FaFacebookSquare className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/kshirod.mahala.3?mibextid=ZbWKwL",
    },
  ];

  return (
      <div
        id="contact"
        className="relative flex items-center justify-center bg-gradient-to-b from-[#404040] to-[#606060] w-full h-screen box-border"
      >
        <div className="absolute overflow-hidden left-0 w-full  h-full z-20">
          
        </div>
        <FloatingDock
          items={links.map((link) => ({
            ...link,
            href: link.href, // Map to include original href
            target: "_blank", // Open in a new tab
            rel: "noopener noreferrer", // Security addition
          }))}
          mobileClassName="translate-y-20"
        />
      </div>
  );
};

export default Footer;
