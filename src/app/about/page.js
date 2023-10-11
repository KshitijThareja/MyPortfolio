"use client";
import React from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";
import TransitionEffect from "../../components/TransitionEffect";
import Footer from "../footer";
import { useTheme } from "../../context/ThemeContext";
const about = () => {
  const { isDarkmode } = useTheme();
  return (
    <>
      <div className="h-full">
        <TransitionEffect />
        <Navbar />
        <div>
          
        </div>
        <Footer />
      </div>
    </>
  );
};

export default about;
