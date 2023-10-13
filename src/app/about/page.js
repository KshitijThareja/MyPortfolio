"use client";
import React, { Suspense, useEffect } from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";
import skills from "../../components/skills.json";
import TransitionEffect from "../../components/TransitionEffect";
import Footer from "../footer";
import { Teko } from "next/font/google";
import AnimatedText from "../../components/AnimatedText";
import { useTheme } from "../../context/ThemeContext";
import Experience from "../../components/Experience"
import "./about.css";
import { AiOutlineMinus } from "react-icons/ai";
import TypewriterComponent from "typewriter-effect";
const teko = Teko({
  subsets: ["latin"],
  weight: ["600"],
});
const teko1 = Teko({
  subsets: ["latin"],
  weight: ["400"],
});
const teko2 = Teko({
  subsets: ["latin"],
  weight: ["300"],
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
      <div className="h-full min-h-full flex flex-col">
        <TransitionEffect />
        <div id="cursor"></div>
        <div id="cursor2"></div>
        <Navbar />
        <div className="grid grid-cols-1 hide1:grid-rows-2 md:grid-cols-5 md:translate-y-1/4 nlg:translate-y-1/4 md:mt-5">
          <div className="grid grid-cols-1 hide1:row-span-1 md:col-span-2" style={teko.style}>
            <div className="text-center">
              <AnimatedText
                text="Hi, I'm Kshitij"
                className={
                  isDarkmode
                    ? " text-white hide1:text-[3.5rem] text-[4rem]"
                    : " hide1:text-[3.5rem] text-[4rem]"
                }
              />
            </div>
            <div
              className={
                isDarkmode
                  ? " text-green hide1:mt-5 md:mb-5 text-center hide1:text-[3.5rem] nlg:mt-5 text-[4rem]"
                  : " text-green hide1:text-[3.5rem] md:mb-5 hide1:mt-5 text-center nlg:mt-5 justify-items-start text-[4rem]"
              }
            >
              <TypewriterComponent
                options={{
                  strings: ["A Designer", "A Developer", "An ML Enthusiast"],
                  autoStart: true,
                  loop: true,
                  delay: 90,
                }}
              />
            </div>
          </div>
          <div className="hide1:row-span-1 md:col-span-1 md:justify-self-end hide1:px-4 hide1:py-0" style={teko2.style}>
            <div className="md:-rotate-90 grid md:grid-cols-2  md:w-[10rem] translate-y-3/4">
              <div className="hide1:hidden">
                <span className="">
                  <AiOutlineMinus
                    size="50px"
                    color={isDarkmode ? "gray" : "gray"}
                  />{" "}
                </span>
              </div>
              <div className="justify-self-start">
                <p
                  className={
                    isDarkmode
                      ? "text-gray  text-[1.8rem] w-[10rem]"
                      : "w-[10rem] text-gray text-[1.8rem]"
                  }
                >
                  About me
                </p>
              </div>
              <div className="md:hidden hide1:justify-self-start hide1:mb-1">
                <span className="">
                  <AiOutlineMinus
                    size="50px"
                    color={isDarkmode ? "gray" : "gray"}
                  />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 px-6 self-start h-full" style={teko2.style}>
            <p
              className={
                isDarkmode
                  ? " text-white text-[2.5rem] mr-4"
                  : "mr-4 text-[2.5rem]"
              } style={teko1.style}
            >
              {" "}
              Transforming Curiosity into Code and Meaningful Solutions{" "}
            </p>
            <p className="text-gray text-[1.5rem] ">
              Hello, I'm Kshitij Thareja, a developer and a student. My journey
              began with a relentless curiosity to unravel the mysteries of
              code. Over the years, I've honed my skills in software development
              and also dived into machine learning. My passion lies in creating
              intelligent systems that can adapt and solve real-world
              challenges. Along with working solo on various projects, I've had
              the privilege of collaborating within diverse teams, harnessing
              collective creativity to deliver innovative solutions.
            </p>
          </div>
        </div>
          <div className="grid grid-cols-1 hide1:grid-rows-2 md:grid-cols-5 lg:grid-cols-6 md:translate-y-1/4 nlg:translate-y-1/4 md:mt-9">
          
          <div className="hide1:row-span-1 md:col-span-1 md:justify-self-end hide1:px-4 hide1:py-0" style={teko2.style}>
            <div className="md:-rotate-90 grid md:grid-cols-2  md:w-[10rem] translate-y-3/4">
              <div className="hide1:hidden">
                <span className="">
                  <AiOutlineMinus
                    size="50px"
                    color={isDarkmode ? "gray" : "gray"}
                  />{" "}
                </span>
              </div>
              <div className="justify-self-start">
                <p
                  className={
                    isDarkmode
                      ? "text-gray  text-[1.8rem] w-[10rem]"
                      : "w-[10rem] text-gray text-[1.8rem]"
                  }
                >
                  My Skills
                </p>
              </div>
              <div className="md:hidden hide1:justify-self-start hide1:mb-1">
                <span className="">
                  <AiOutlineMinus
                    size="50px"
                    color={isDarkmode ? "gray" : "gray"}
                  />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 hide1:justify-self-start pt-6 hide1:px-6 self-start h-full" style={teko2.style}>
            <p
              className={
                isDarkmode
                  ? " text-white text-[2.5rem] mr-4"
                  : "mr-4 text-[2.5rem]"
              } style={teko1.style}
            >
              {" "}
              What Does My Skillset Include?
            </p>
            <p className="text-gray text-[1.5rem]">
            I've worked with a quite a few range of tools and frameworks, some of which include:
            </p>
          </div>
          <div className="hide1:row-span-1 md:col-span-3 justify-self-center flex flex-column w-[20rem] nmd:w-[38rem] md:w-[30rem] md:col-start-2 lg:col-start-4 nlg:w-[38rem]" style={teko.style}>
            <div className="" >
              <Experience/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default about;
