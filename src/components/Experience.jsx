import React from "react";
import "./Experience.css";
import skills from "./skills.json";
import { useTheme } from "../context/ThemeContext";
import Tilt from "react-parallax-tilt";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
const Experience = () => {
  const { isDarkmode } = useTheme();
  return (
    <section className={"container"} id="experience">
      <div className={"content"}>
        <div className={"skills"}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={"skill"}>
                <Tilt
                  glareEnable={true}
                  tiltMaxAngleX={20}
                  scale={1.2}
                  tiltMaxAngleY={20}
                  perspective={1500}
                  glareColor={isDarkmode ? "black" : "white"}
                >
                  <div className={"skillImageContainer bg-white"}>
                    <img src={skill.imageSrc} alt={skill.title} />
                  </div>
                </Tilt>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Experience;
