import React from "react";
import "./Experience.css";
import skills from "./skills.json";
import { useTheme } from "../context/ThemeContext";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {EffectCoverflow, Pagination, Navigation} from "swiper";
const Experience = () => {
  const {isDarkmode}=useTheme()
  return (
    <section className={"container"} id="experience">
      <div className={"content"}>
        <div className={"skills"}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={"skill"}>
                <div className={"skillImageContainer bg-white"}>
                  <img src={(skill.imageSrc)} alt={skill.title} />
                </div>
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