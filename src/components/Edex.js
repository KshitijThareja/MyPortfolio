import React, { use, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon"
import { useTheme } from "../context/ThemeContext";
const Details = ({ heading, time, address, work }) => {
  const ref = useRef(null);
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
  const { isDarkmode } = useTheme()
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className="mb-24">
      <div ref={ref} className="md:w-[40rem] lg:w-[50rem] hide1:pt-6 px-12 mx-auto relative">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          style={{ scaleY: scrollYProgress }}
          className={isDarkmode ? "absolute -inset-0.5 left-9 top-0 blur opacity-75 w-[4px] h-full bg-gradient origin-top" : "absolute left-9 top-0 w-[2px] h-full bg-black origin-top"} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          style={{ scaleY: scrollYProgress }}
          className={isDarkmode ? "absolute left-9 top-0 w-[2px] h-full bg-gradient origin-top" : "absolute left-9 top-0 w-[3px] h-full bg-black origin-top"} />
        <ul className="ml-14 hide1:ml-7 w-full flex flex-col items-start justify-between">
          <Details
            heading="SDE Intern @Galaxy.ai" time="2025" address="Dwarka, Delhi" work="Worked as an SDE Intern at Galaxy.ai, where I helped optimize existing workﬂows, refactored codebase and fixed existing issues. Also worked on creating new tools and features for their platform."
          />
          <Details
            heading="GSoC Contributor @Learning Equality" time="2024" address="Remote" work="Selected as a GSoC contributor for Learning Equality, a non-profit organization that works on creating open-source educational tools. I worked on creating a visual regression testing mechanism for Kolibri Design System, and integrating it to their CI pipeline."
          />
          <Details
            heading="Member @amFOSS" time="2023" address="Amritapuri, Kerala" work="Selected as a member of team amFOSS, the leading FOSS and Computer Science club from India. Here, I spend time working on various projects and honing my skills, both technical and non-technical."
          />
          <Details
            heading="BTech in Computer Science" time="2022-Present" address="Amritapuri, Kerala" work="I am currently in my final year at Amrita Vishwa Vidyapeetham, Amritapuri. I have been quite consistent in maintaining my academics and other interests like programming simultaneously"
          />
        </ul>
      </div>
    </div>
  );
};

export default Edex;
