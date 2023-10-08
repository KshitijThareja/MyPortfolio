"use client";
import React from "react";
import DarkMode from "./darkmode";
import { useState, useEffect } from "react";
import { Saira_Stencil_One, Amatic_SC } from "next/font/google";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBarsStaggered, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import "./globals.scss";
// import "../components/cursor.css";
library.add(faBarsStaggered, faClose);
const saira = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
});
const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: ["700"],
});
const navlinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/" },
  { title: "Skills", href: "/" },
  { title: "Projects", href: "/" },
  { title: "Contact", href: "/" },
];

function Navbar() {
  const { isDarkmode, toggleTheme } = useTheme();
  console.log(isDarkmode, toggleTheme);
  const [open, setOpen] = useState(false);
  const [mopen, setMopen] = useState(false);
  const toggleMenu = () => {
    setMopen((prevOpen) => !prevOpen);

  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars={
    initial:{
      transition:{
        staggerChildren:0.09,
        staggerDirection:-1,
     },
    },
    open:{
      transition:{
        delayChildren:0.3,
        staggerChildren:0.09,
        staggerDirection:1,
     },
    }
  }
  return (
    <>
      <div className="w-full h-20 lg:h-28 text-black lg:bg-transparent">
        <div className="max-w-screen-2xl h-full mx-auto px-17 flex items-center justify-between">
          <main style={saira.style}>
            <h1 className={isDarkmode? "text-4xl text-white uppercase ml-8" : "text-4xl text-black uppercase ml-8"}>
              KSHITIJ<span className=" text-green"> .</span>
            </h1>
          </main>

          <nav
            className={`w-full lg:flex md:items-center md:px-3 md:w-[34rem] ml-7 hide1:hidden `}
          >
            <ul
              id="links"
              className="text-base text-gray-400 md:flex md:justify-between list-none"
            >
              <li className="lg:px-6 py-2 block hover:text-white text-lg ml-9 font-semibold hover:scale-110 ease-in duration-300">
                <Link id="Link" className={isDarkmode?"":"text-black hover:text-black"} href="/">
                  Home
                </Link>
              </li>
              <li className="lg:px-6 py-2 block hover:text-white text-lg font-semibold hover:scale-110 ease-in duration-300">
              <Link id="Link" className={isDarkmode?"":"text-black hover:text-black"} href="/">
                  About
                </Link>
              </li>
              <li className="lg:px-6 py-2 block hover:text-white text-lg font-semibold hover:scale-110 ease-in duration-300">
              <Link id="Link" className={isDarkmode?"":"text-black hover:text-black"} href="/">
                  Skills
                </Link>
              </li>
              <li className="lg:px-6 py-2 block hover:text-white text-lg font-semibold hover:scale-110 ease-in duration-300">
              <Link id="Link" className={isDarkmode?"":"text-black hover:text-black"} href="/">
                  Projects
                </Link>
              </li>
              <li className="lg:px-6 py-2 block hover:text-white text-lg font-semibold hover:scale-110 ease-in duration-300">
              <Link id="Link" className={isDarkmode?"":"text-black hover:text-black"} href="/">
                  Contact
                </Link>
              </li>
              <li></li>
            </ul>
          </nav>

          <div></div>

          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <DarkMode />
            </div>
            <div className="col-span-1 "></div>
            <div className="col-span-1 mt-1" onClick={toggleMenu}>
              <FontAwesomeIcon
                className="fa-xl"
                color={isDarkmode ? "white" :"#333333"}
                icon={"bars-staggered"}
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
    
        {mopen && (
          
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={isDarkmode?"fixed left-0 top-0 w-full origin-top h-screen bg-gray-nav text-white p-10 " :"fixed left-0 top-0 w-full origin-top h-screen bg-white-nav text-black p-10 "}>
            <div className="flex h-full flex-col">
              <div className="flex justify-between lg:px-20">
              <main style={saira.style}>
            <h1 className={isDarkmode? "text-4xl text-white uppercase" : "text-4xl text-black uppercase ml-8"}>
              KSHITIJ<span className=" text-green"> .</span>
            </h1>
          </main>
                <div
                  className="text-2xl font-bold cursor-pointer"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon
                className="fa-xl"
                color={isDarkmode ? "white" :"#333333"}
                icon={"close"}
              />
                </div>
              </div>
              <motion.div variants={containerVars} initial="initial" animate="open" exit="initial" className="flex flex-col h-full justify-center items-center md:hidden">
                {navlinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                    <MobileNavLink
                      key={index}
                      title={link.title}
                      href={link.href}
                    /></div>
                  );
                })}
              </motion.div>
              <div className="flex flex-col mb-10 h-full justify-center items-center hide1:hidden">
              <main style={amatic.style}>
              <p
            className={`font-montserrat md:text-[3rem] lg:text-[4rem] text-center `}
          >
              Hello there 👋
            </p>
            <p
            className={`font-montserrat md:text-[3rem] lg:text-[4rem] text-center hide1:hidden`}
          >
              I see that you are here, but I'd have to ask you to go back and explore my portfolio further.
            </p>
            <p
            className={`font-montserrat md:text-[3rem] lg:text-[4rem] text-center hide1:hidden`}
          >
          Now head back! 😎  
          </p>
            </main>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease:[0.37,0,0.63,1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease:[0,0.55,0.45,1],
      duration: 0.7,
    },
  },
};
export default Navbar;
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-4xl uppercase py-4"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
