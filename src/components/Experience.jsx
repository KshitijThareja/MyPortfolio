import React from "react";
import "./Experience.css";
import skills from "./skills.json";

const Experience = () => {
  return (
    <section className={"container"} id="experience">
      <div className={"content"}>
        <div className={"skills"}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={"skill"}>
                <div className={"skillImageContainer"}>
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