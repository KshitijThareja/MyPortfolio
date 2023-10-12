"use client";
import React from "react";
import { Teko, Saira_Stencil_One } from "next/font/google";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";

const teko = Teko({
  subsets: ["latin"],
  weight: ["500"],
});
const saira = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
});
const Footer = () => {
  const { isDarkmode } = useTheme();
  const [over, setOver] = useState(false);
  const [over1, setOver1] = useState(false);
  const [over2, setOver2] = useState(false);
  return (
    <footer className={"w-full text-black text-[1.2rem]"} style={teko.style}>
      <div
        className={
          isDarkmode
            ? "w-full grid grid-cols-1 md:grid-cols-3 bg-gray-nav py-8 items-center"
            : "w-full grid grid-cols-1 md:grid-cols-3 bg-white py-8 items-center"
        }
      >
        <div className="text-center p-0 m-0 z-0">
          <p
            style={saira.style}
            className={
              isDarkmode
                ? "z-0 text-3xl text-white uppercase"
                : "text-3xl text-black uppercase sm:ml-4 md:ml-8"
            }
          >
            KSHITIJ<span className=" text-green"> .</span>
          </p>
        </div>
        <div className="text-center text-[1.4rem] mt-3 z-0">
          <p className={isDarkmode ? "text-white" : "text-dark-bg"}>
            Created with love, by{" "}
            <span className="text-green">
              <a href="/">Kshitij Thareja</a>
            </span>
          </p>
        </div>
        <div className="z-0 flex flex-row space-x-7 hide1:mt-2 justify-self-center">
         <div className="" onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}>
          <Link href="https://github.com/KshitijThareja" target="_blank" passHref><ImGithub size="30px" color={over?"#2ECC71":(isDarkmode?"white":"black")}/></Link>
         </div>
         <div onMouseOver={() => setOver1(true)}
        onMouseLeave={() => setOver1(false)}>
          <Link href="https://www.linkedin.com/in/kshitijthareja/" target="_blank" passHref><ImLinkedin size="30px" color={over1?"#2ECC71":(isDarkmode?"white":"black")}/></Link>
         </div>
         <div className="" onMouseOver={() => setOver2(true)}
        onMouseLeave={() => setOver2(false)}>
         <Link href="https://twitter.com/TharejaKshitij" target="_blank" passHref> <ImTwitter size="30px" color={over2?"#2ECC71":(isDarkmode?"white":"black")}/></Link>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
