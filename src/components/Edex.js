import React, { use, useRef } from "react";
import { useScroll,motion } from "framer-motion";
import LiIcon from "./LiIcon"
import { useTheme } from "../context/ThemeContext";
const Details=({heading, time, address, work})=>{
  const ref= useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] flex flex-col items-center justify-between ">
          <LiIcon reference={ref} />
            <div>
                <h3 className="capitalize font-bold text-[2.3rem]">{heading}</h3>
                <span className="capitalize font-medium text-[1.6rem] text-gray ">
                    {time} | {address} 
                </span>
                <p className="font-medium text-[1.6rem] w-full">
                    {work}
                </p>
            </div>
        </li>
    )
}
const Edex = () => {
  const {isDarkmode}=useTheme()
  const ref= useRef(null);
  const {scrollYProgress}= useScroll(
    {
      target:ref,
      offset:["start end", "center start"]
    }
  )
  return (
    <div className="mb-24">
      <div ref={ref} className="md:w-[40rem] lg:w-[50rem] hide1:pt-6 px-12 mx-auto relative">
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        style={{scaleY:scrollYProgress}}
        className={isDarkmode?"absolute left-9 top-0 w-[4px] h-full bg-white origin-top":"absolute left-9 top-0 w-[4px] h-full bg-black origin-top"}/>
        <ul className="ml-14 w-full flex flex-col items-start justify-between">
            <Details
            heading="Middle School" time="2020" address="Karnal, Haryana" work="I completed my middle schooling from Montfort World School with major focus on my problem solving skills in mathematics and physics."
            />
            <Details
            heading="High School" time="2022" address="Karnal, Haryana" work="I completed my high school year from Montfort World School with most of my time devoted to competitive examinations. I achieved a lot of recognition for my academic record."
            />
            <Details
            heading="BTech in Computer Science" time="2022-Present" address="Amritapuri, Kerala" work="I am currently in my sophomore year at Amrita Vishwa Vidyapeetham, Amritapuri. I have been quite consistent in maintaing my academics and other interests like programming simultaneously"
            />
            <Details
            heading="Member @amFOSS" time="2023" address="Amritapuri, Kerala" work="I was selected as a member of team amFOSS, one of the best FOSS clubs from India. Here, I spend time working on various projects and honing my skills, both technical and non-technical."
            />
        </ul>
      </div>
    </div>
  );
};

export default Edex;
