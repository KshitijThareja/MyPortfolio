"use client";
import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";
import TransitionEffect from "../../components/TransitionEffect";
import Footer from "../footer";
import { Teko } from "next/font/google";
import { useTheme } from "../../context/ThemeContext";
import "./projects.css";
import { AiOutlineMinus } from "react-icons/ai";
import Tilt from "react-parallax-tilt";

const teko1 = Teko({
  subsets: ["latin"],
  weight: ["400"],
});
const teko2 = Teko({
  subsets: ["latin"],
  weight: ["300"],
});

const projects = () => {
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
        <div id="cursor" className="hide1:hidden"></div>
        <div id="cursor2" className="hide1:hidden"></div>
        <Navbar />
        <div className="grid grid-cols-1 hide1:grid-rows-2 md:grid-cols-5 lg:grid-cols-6 md:mt-14">

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
                  My Projects
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
          <div className="md:col-span-2 lg:col-span-1 hide1:justify-self-start pt-6 hide1:px-6 self-start h-full" style={teko2.style}>
            <p
              className={
                isDarkmode
                  ? " text-white text-[2.5rem] mr-4"
                  : "mr-4 text-[2.5rem]"
              } style={teko1.style}
            >
              {" "}
              What All Projects Have I Worked On?
            </p>
            <p className="text-gray text-[1.5rem]">
              Over the last 4 years, I've worked on quite a few projects, both individually and as a part of a team. Some of them are shown here.
            </p>
          </div>
          <div className="hide1:row-span-1 md:col-span-3 lg:col-span-4 mt-9 justify-self-center flex flex-column md:col-start-2 lg:col-start-4 nlg:w-[45rem]" style={teko2.style}>
            <div className="flex items-center justify-center bg-neutral-800">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <Tilt
                  glareEnable={true}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1500}
                  glareColor={isDarkmode ? "black" : "white"}
                >
                  <div className="group relative cursor-pointer items-center rounded-xl justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                      <img className="h-full w-full object-cover transition-transform rounded-xl duration-500 group-hover:rotate-3 group-hover:scale-125" src="./marsman.png" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent rounded-xl via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 className="font-dmserif text-3xl font-bold text-white">Marsman</h1>
                      <p className="mb-3 text-[1.4rem] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A GUI application to fetch pictures from Nasa's curiosity rover for any given timeperiod.</p>
                      <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><Link href="https://github.com/KshitijThareja/TheMartianChronicles" passHref target="_blank">See More</Link></button>
                    </div>
                  </div></Tilt>
                <Tilt
                  glareEnable={true}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1500}
                  glareColor={isDarkmode ? "black" : "white"}
                >
                  <div className="group relative cursor-pointer items-center rounded-xl justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                      <img className="h-full w-full object-cover transition-transform rounded-xl duration-500 group-hover:rotate-3 group-hover:scale-125" src="./spazzai.png" alt="SpazzAI" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent rounded-xl via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 className="font-dmserif text-3xl font-bold text-white">SpazzAI</h1>
                      <p className="mb-3 text-[1.2rem] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Developed a platform for hospitals to evaluate spasticity levels. Led backend development with AWS and sst.dev, and created a seamless UI.</p>
                      {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><Link href="#" passHref target="_blank">See More</Link></button> */}
                    </div>
                  </div></Tilt>
                <Tilt
                  glareEnable={true}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1500}
                  glareColor={isDarkmode ? "black" : "white"}
                >
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                      <img className="h-full w-full object-fit transition-transform duration-500 group-hover:rotate-3 rounded-xl group-hover:scale-125" src="./hci.png" alt="HCI Application" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-xl group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 className="font-dmserif text-3xl font-bold text-white">HCI Application</h1>
                      <p className="mb-3 text-[1.2rem] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Web app for measuring human-computer interaction. Implemented backend with Django, dockerized the API, and deployed for 500+ volunteers.</p>
                      <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><Link href="https://github.com/kirtisikka1211/QuizProject_Backend" passHref target="_blank">See More</Link></button>
                    </div>
                  </div></Tilt>
                <Tilt
                  glareEnable={true}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1500}
                  glareColor={isDarkmode ? "black" : "white"}
                >
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                      <img className="h-full w-full object-fit transition-transform duration-500 group-hover:rotate-3 rounded-xl group-hover:scale-125" src="./orbyq.png" alt="Orbyq" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-xl group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 className="font-dmserif text-3xl font-bold text-white">Orbyq</h1>
                      <p className="mb-3 italic text-white text-[1.2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100">Desktop app for task tracking and productivity charts. Built with Spring Boot, Electron, Next.js, and features smart activity linking.</p>
                      <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><Link href="https://github.com/KshitijThareja/Orbyq" passHref target="_blank">See More</Link></button>
                    </div>
                  </div></Tilt>
                <Tilt
                  glareEnable={true}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1500}
                  glareColor={isDarkmode ? "black" : "white"}
                >
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                      <img className="h-full w-full object-fit transition-transform duration-500 group-hover:rotate-3 rounded-xl group-hover:scale-125" src="./amfoss.png" alt="amFOSS Website" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-xl group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 className="font-dmserif text-3xl font-bold text-white">amFOSS Website</h1>
                      <p className="mb-3 italic text-white text-[1.2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100">Developed and maintained the club webpage. Enhanced user experience with Next.js, Tailwind, and Framer Motion.</p>
                      <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><Link href="https://amfoss.in/" passHref target="_blank">See More</Link></button>
                    </div>
                  </div></Tilt>

                <Tilt
                  glareEnable={true}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1500}
                  glareColor={isDarkmode ? "black" : "white"}
                >
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-72">
                      <img className="h-full w-full object-fit transition-transform duration-500 group-hover:rotate-3 rounded-xl group-hover:scale-125" src="./portfolio.png" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-xl group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex hide1:mb-4 md:mb-4 lg:mb-0 translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 className="font-dmserif text-3xl font-bold text-white">My Portfolio</h1>
                      <p className="mb-3 italic text-white text-[1.4rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100">This is my personal portfolio, which you can see to get to know more about me.</p>
                      <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><Link href="/" passHref target="_blank">See More</Link></button>
                    </div>
                  </div></Tilt>

              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>

    </>
  );
};

export default projects;
