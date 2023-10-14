"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";
import TransitionEffect from "../../components/TransitionEffect";
import Footer from "../footer";
import { Teko } from "next/font/google";
import { useTheme } from "../../context/ThemeContext";
import "./contact.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faLocationPin,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineMinus } from "react-icons/ai";
import { ImGithub, ImLinkedin, ImTwitter, ImInstagram } from "react-icons/im";
library.add(faEnvelope, faLocationPin, faShareNodes);

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
  const onButtonClick = () => {
    const pdfUrl = "./resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [over, setOver] = useState(false);
  const [over1, setOver1] = useState(false);
  const [over2, setOver2] = useState(false);
  const [over3, setOver3] = useState(false);
  return (
    <>
      <div className="h-full min-h-full flex flex-col">
        <TransitionEffect />
        <div id="cursor" className="hide1:hidden"></div>
        <div id="cursor2" className="hide1:hidden"></div>
        <Navbar />
        <div className="grid grid-cols-1 hide1:grid-rows-1 md:grid-cols-5 lg:grid-cols-6 md:translate-y-1/4 lg:translate-y-2/4 md:mt-14">
          <div
            className="hide1:row-span-1 md:col-span-1 md:justify-self-end hide1:px-4"
            style={teko2.style}
          >
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
                  Contact
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
          <div
            className="md:col-span-2 hide1:justify-self-start hide1:px-6 hide1:mt-20 self-start"
            style={teko2.style}
          >
            <p
              className={
                isDarkmode
                  ? " text-white text-[2.5rem] mr-4"
                  : "mr-4 text-[2.5rem]"
              }
              style={teko1.style}
            >
              {" "}
              Want to work together for a project? Need to reach out?
            </p>
            <p className="text-gray text-[1.5rem]">
              Feel free to reach out and let me know if I can help. Looking to
              hire me for a project? You can download my CV from the button
              below.
            </p>
            <div className="mt-4 hide1:mb-4 justify-self-center place-content-start">
              <button
                onClick={onButtonClick}
                className={
                  isDarkmode
                    ? "px-4 py-2 lg:px-7 lg:py-2 text-white text-[1.5rem] font-semibold border border-white rounded cursor-pointer hover:bg-white hover:text-black"
                    : "lg:px-7 lg:py-2 px-4 py-2 text-black text-[1.5rem] font-semibold border border-dark-bg rounded cursor-pointer hover:bg-dark-bg hover:text-white"
                }
              >
                Download CV
              </button>
            </div>
          </div>
          <div
            className="hide1:row-span-2 md:col-span-2 lg:col-span-3 mt-4 hide1:justify-self-start hide1:ml-6 justify-self-center lg:col-start-4 grid grid-cols-1"
            style={teko2.style}
          >
            <div className="justify-center gap-x-5">
              <div className="justify-self-end text-[1.1rem]">
                <FontAwesomeIcon
                  className="fa-xl"
                  color={isDarkmode ? "#2ECC71" : "#333333"}
                  icon={"location-pin"}
                />
                <span className="text-[1.5rem] ml-2">
                  Address:{" "}
                  <span className="ml-2 text-gray">Karnal, Haryana, India</span>
                </span>
              </div>
            </div>
            <div className="justify-center hide1:mt-3 gap-x-5">
              <div className="justify-self-end text-[1.1rem]">
                <FontAwesomeIcon
                  className="fa-xl"
                  color={isDarkmode ? "#2ECC71" : "#333333"}
                  icon={"envelope"}
                />
                <span className="text-[1.5rem] ml-2">
                  Email:{" "}
                  <span className="ml-2 text-gray">
                    kshitijthareja03@gmail.com
                  </span>
                </span>
              </div>
            </div>
            <div>
              <div className="justify-self-start hide1:mt-3 grid grid-cols-2">
                <div className="justify-self-start text-[1.1rem]">
                  <FontAwesomeIcon
                    className="fa-xl"
                    color={isDarkmode ? "#2ECC71" : "#333333"}
                    icon={"share-nodes"}
                  />
                  <span className="px-2 text-[1.5rem]">Social Handles:</span>
                </div>
                <div className="z-0 flex">
                  <div
                    className=""
                    onMouseOver={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}
                  >
                    <Link
                      href="https://github.com/KshitijThareja"
                      target="_blank"
                      passHref
                    >
                      <ImGithub
                        size="30px"
                        color={
                          over ? "#2ECC71" : isDarkmode ? "white" : "black"
                        }
                      />
                    </Link>
                  </div>
                  <div
                    className="ml-3"
                    onMouseOver={() => setOver1(true)}
                    onMouseLeave={() => setOver1(false)}
                  >
                    <Link
                      href="https://www.linkedin.com/in/kshitijthareja/"
                      target="_blank"
                      passHref
                    >
                      <ImLinkedin
                        size="30px"
                        color={
                          over1 ? "#2ECC71" : isDarkmode ? "white" : "black"
                        }
                      />
                    </Link>
                  </div>
                  <div
                    className="ml-3"
                    onMouseOver={() => setOver2(true)}
                    onMouseLeave={() => setOver2(false)}
                  >
                    <Link
                      href="https://twitter.com/TharejaKshitij"
                      target="_blank"
                      passHref
                    >
                      {" "}
                      <ImTwitter
                        size="30px"
                        color={
                          over2 ? "#2ECC71" : isDarkmode ? "white" : "black"
                        }
                      />
                    </Link>
                  </div>
                  <div
                    className="ml-3"
                    onMouseOver={() => setOver3(true)}
                    onMouseLeave={() => setOver3(false)}
                  >
                    <Link
                      href="https://www.instagram.com/kshitijthareja/"
                      target="_blank"
                      passHref
                    >
                      {" "}
                      <ImInstagram
                        size="30px"
                        color={
                          over3 ? "#2ECC71" : isDarkmode ? "white" : "black"
                        }
                      />
                    </Link>
                  </div>
                </div>
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
