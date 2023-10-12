"use client";
import React,{Suspense, useEffect} from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";
import TransitionEffect from "../../components/TransitionEffect";
import Footer from "../footer";
import { Teko } from "next/font/google";
import AnimatedText from "../../components/AnimatedText";
import { useTheme } from "../../context/ThemeContext";
import "./about.css"
import TypewriterComponent from "typewriter-effect";
const teko = Teko({
  subsets: ["latin"],
  weight: ["600"],
});
const teko2 = Teko({
  subsets: ["latin"],
  weight: ["500"],
});
const about = () => {
  const { isDarkmode } = useTheme();
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
        {/* <TransitionEffect /> */}
        <div id="cursor"></div>
      <div id="cursor2"></div>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 md:translate-y-3/4">
       <div className="grid grid-cols-1" style={teko.style}>
       <div><AnimatedText text="Hi, I'm Kshitij" className={isDarkmode?" text-white hide1:text-[3.5rem] text-[4rem]":" hide1:text-[3.5rem] text-[4rem]"}/></div>
       <div className={isDarkmode?" text-green mt-5 text-center hide1:text-[3.5rem] text-[4rem]":" text-green hide1:text-[3.5rem] mt-5 text-center text-[4rem]"}>
       <TypewriterComponent
       options={{
        strings:['A Designer', 'A Developer', 'An ML Enthusiast'],
        autoStart:true,
        loop:true,
        delay:90,
       }}
       />
       </div></div>
        
      </div></div>
      <Footer />
    </>
  );
};

export default about;
