"use client";
import Navbar from "../components/navbar";
import Link from "next/link";
import {useEffect, useState } from "react"; 
import Footer from "./footer";
import { AnimatePresence, motion,useScroll } from "framer-motion";
import { Teko} from "next/font/google";
import { useTheme } from "../context/ThemeContext";
import "./home.css"
import TransitionEffect from "../components/TransitionEffect";
import AnimatedText from "../components/AnimatedText";
const teko = Teko({
  subsets: ["latin"],
  weight: ["600"],
});
const teko2 = Teko({
  subsets: ["latin"],
  weight: ["500"],
});
function LandingPage() {
  const { isDarkmode} = useTheme();
  useEffect(() => {
    var cursor = document.querySelector("#cursor");
    var cursor2 = document.querySelector("#cursor2");

    document.addEventListener("mousemove", function (e) {
      cursor.style.cssText = cursor2.style.cssText =
        "left:" + e.clientX + "px;" + "top:" + e.clientY + "px;";
    });
  }, []);
  
  return (
    <>
    <div className="h-full">
    <Navbar />
    <div id="cursor"></div>
      <div id="cursor2"></div>
      <TransitionEffect/>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 hide1:justify-items-center md:justify-items-center lg:justify-items-start">
      <div className="blob mt-9 md:mt-0 md:translate-y-1/4 lg:translate-y-2/4 lg:translate-x-1/2 hide1:w-[17rem] hide1:h-[17rem] md:w-[23rem] md:h-[23rem] lg:w-[25rem] lg:h-[25rem]">
      </div>
  
      <div className="intro hide1:mt-10 hide1:px-5 md:translate-y-1/4 lg:translate-y-2/4 hide1:text-center md:text-center lg:text-start lg:ml-4" style={teko.style}>
        <div className="flex flex-col">
      <AnimatedText text="Welcome to my Portfolio" className={isDarkmode?" text-white md:mt-9 lg:mt-4 lg:text-start hide1:text-[3.5rem] text-[4rem]":"md:mt-9 lg:mt-4 hide1:text-[3.5rem] lg:text-start text-[4rem]"}/></div>
              
            <p className="mt-8 mb-4 md:ml-2 hide1:text-[1.5rem] text-[2rem]" style={teko2.style}>
              I am a passionate developer, who is also secretly a wanna-be researcher ; )
            </p>
            <div className="md:mt-2 hide1:mb-4 justify-self-center place-content-start ml-2 md:ml-0 lg:ml-2">
            <Link href="/about" passHref>
              <button className={isDarkmode?"px-4 py-2 lg:px-7 lg:py-2 text-white text-[1.5rem] font-semibold border border-white rounded cursor-pointer hover:bg-white hover:text-black":"lg:px-7 lg:py-2 px-4 py-2 text-black text-[1.5rem] font-semibold border border-dark-bg rounded cursor-pointer hover:bg-dark-bg hover:text-white"}>
                About me
              </button>
            </Link>
          </div>
          </div>
          
      </div>
      
    </div>
    <Footer/>
    </>
  );
}

export default LandingPage;
