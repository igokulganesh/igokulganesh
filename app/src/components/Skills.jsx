import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "primereact/button";
import { Images } from "../assets/data";
import { ArrowComponent } from "../assets/ArrowComponent";

// Slider
import Slider from "react-slick";
import { classNames } from "primereact/utils";
import "../assets/css/skills.css";

const skills = [
  {
    group: "Programming Languages",
    color: "blue",
    bgImg: Images.Programming,
    items: [
      "Rust",
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "C",
      "Java",
      "SQL",
    ],
  },
  {
    group: "Concepts",
    color: "green",
    bgImg: Images.Concept,
    items: [
      "Cryptography",
      "Data Structure",
      "Algorithm",
      "Database design",
      "Object Oriented Programming",
    ],
  },
  {
    group: "Web Designing Languages",
    color: "red",
    bgImg: Images.Website,
    items: [
      "React JS",
      "Redux",
      "HTML",
      "CSS",
      "Jquery",
      "Bootstrap & Grid System",
    ],
  },
  {
    group: "Frameworks",
    color: "yellow",
    bgImg: Images.Framework,
    items: ["Fast Api", "Django", "Rest Api"],
  },
  {
    group: "Tools & Utilities",
    color: "teal",
    bgImg: Images.Tools,
    items: [
      "Git",
      "Jenkins",
      "Docker",
      "VS Code",
      "Visual Studio",
      "Jira",
      "Bitbucket",
      "Shell Script",
      "Jupyter Notebook",
    ],
  },
  {
    group: "Database System",
    color: "pink",
    bgImg: Images.Database,
    items: ["PostgreSQL", "MySQL", "MS SQL Server", "SQLite"],
  },
  {
    group: "Operating System",
    color: "orange",
    bgImg: Images.Os,
    items: ["Linux", "Windows"],
  },
];

function SkillCard({ skill }) {
  return (
    <>
      <div
        className={`skill-card bg-${skill.color}-900 p-5`}
        style={{ backgroundImage: `url(${skill?.bgImg})` }}
      >
        <div className="flex">
          <p className={`font-bold text-lg text-${skill.color}-200`}>
            {skill.group}
          </p>
        </div>
        <div className={`flex flex-wrap gap-2`}>
          {skill.items.map((item) => {
            return (
              <div key={item}>
                <Button
                  label={item}
                  raised
                  outlined
                  size="small"
                  className={`text-${skill.color}-300`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <br />
    </>
  );
}

function Skills() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !isMobile,
    nextArrow: <ArrowComponent />,
    prevArrow: <ArrowComponent />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

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
          className={classNames({ "col-5": !isMobile }, { "col-12": isMobile })}
        >
          <Slider {...sliderSettings}>
            {skills.map((skill) => {
              return (
                <div
                  className="flex justify-content-center flex-wrap"
                  key={skill.group}
                >
                  <SkillCard skill={skill} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Skills;
