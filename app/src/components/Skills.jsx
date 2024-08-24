import React from "react";
import { useMediaQuery } from "react-responsive";
import { Images } from "../assets/data";

// Slider
import { classNames } from "primereact/utils";
import "../assets/css/skills.css";
import { Tooltip } from "primereact/tooltip";

const techStack = [
  {
    name: "Java",
    icon: Images.Java,
  },
  {
    name: "Python",
    icon: Images.Python,
  },
  {
    name: "Spring Framework",
    icon: Images.Spring,
  },
  {
    name: "React",
    icon: Images.React,
  },
  {
    name: "Java Script",
    icon: Images.JavaScript,
  },
  {
    name: "Type Script",
    icon: Images.TypeScript,
  },
  {
    name: "PostgreSQL",
    icon: Images.PostgreSQL,
  },
  {
    name: "MySQL",
    icon: Images.MySQL,
  },
  {
    name: "Maven",
    icon: Images.Maven,
  },
  {
    name: "Jenkins",
    icon: Images.Jenkins,
  },
  {
    name: "Docker",
    icon: Images.Docker,
  },
  {
    name: "Git",
    icon: Images.Git,
  },
];

function Skills() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div id="skills" className={classNames({ "m-5": !isMobile }, "m-2 mt-2")}>
      <div className="flex justify-content-center text-gradient">
        <h2 className="flex justify-content-center align-items-center font-bold text-light-blue mt-5 mb-0">
          Technical Expertise
        </h2>
      </div>
      <div className="flex flex-wrap justify-content-center align-items-center">
        <p className="flex flex-wrap justify-content-center align-items-center text-white font-light">
          Over the course of my career, I have gained extensive experience in
          these areas
        </p>
      </div>
      <div className="grid flex justify-content-center flex-wrap">
        {!isMobile && (
          <div className="col-4">
            <img src={Images.Skills} alt="skill" height={"250px"} />
          </div>
        )}
        <div
          className={classNames(
            { "col-4": !isMobile },
            { "col-12": isMobile },
            "bg-white border-round m-5"
          )}
        >
          <div className="card flex flex-row flex-wrap gap-2">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex align-items-center justify-content-center"
              >
                <Tooltip target=".ImgToolTip" event="both" position="top" />
                <img
                  align="left"
                  data-pr-tooltip={tech.name}
                  alt={tech.name}
                  className="ImgToolTip w-4rem m-1 border-round"
                  src={tech.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
