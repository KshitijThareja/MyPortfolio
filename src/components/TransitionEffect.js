import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const TransitionEffect = () => {
  return (
    <>
    <AnimatePresence mode="wait">
      <motion.div
        className="first fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-green "
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{x:["0%", "100%"], width:["0%", "100%"]}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="second fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white "
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{delay:0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="third fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark-gray "
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{delay:0.4, duration: 0.8, ease: "easeInOut" }}
      /></AnimatePresence>
    </>
  );
};

export default TransitionEffect;
