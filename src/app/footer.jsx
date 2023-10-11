"use client";
import React from "react";
import { Teko, Saira_Stencil_One } from "next/font/google";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
const teko = Teko({
  subsets: ["latin"],
  weight: ["500"],
});
const saira = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
});
const Footer = () => {
  const {isDarkmode} = useTheme();
  return (
   
    <footer
      className={"w-full text-black text-[1.2rem]"}
      style={teko.style}
    >
      
        <div className={isDarkmode?"w-full grid grid-cols-1 md:grid-cols-2 bg-gray-nav py-8 items-center":"w-full grid grid-cols-1 md:grid-cols-2 bg-white py-8 items-center"}>
        <div className="text-center z-0">
        <p style={saira.style} className={isDarkmode? "z-0 text-3xl text-white uppercase" : "text-4xl text-black uppercase sm:ml-4 md:ml-8"}>
              KSHITIJ<span className=" text-green"> .</span>
            </p>
      </div>
          <div className="text-center text-[1.4rem] mt-3 z-0">
          <p className={isDarkmode?"text-white":"text-dark-bg"}>
            Created with love, by{" "}
            <span className="text-green">
              <a href="/">Kshitij Thareja</a>
            </span>
          </p>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;