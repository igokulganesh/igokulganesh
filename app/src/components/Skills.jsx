import React from "react";
import { useMediaQuery } from "react-responsive";
import { Images } from "../assets/data";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";

// Slider
import { classNames } from "primereact/utils";
import "../assets/css/skills.css";

const skillSet = [
  {
    name: "Programming Languages",
    color: "blue",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C", "Rust"],
  },
  {
    name: "Backend Frameworks",
    color: "pink",
    items: [
      "Spring Boot",
      "Spring Framework",
      "Hibernate",
      "JPA",
      "Fast Api",
      "Django",
      "MVC",
      "Microservice",
    ],
  },
  {
    name: "Frontend tools",
    color: "green",
    items: ["React", "Redux", "HTML5", "CSS5", "Bootstrap & Grid System"],
  },
  {
    name: "Concepts",
    color: "teal",
    items: [
      "Data Structure",
      "Algorithm",
      "Cryptography",
      "Database design",
      "Object Oriented Programming",
    ],
  },
  {
    name: "Tools & Utilities",
    color: "white",
    items: ["Git", "Jenkins", "Docker", "Maven"],
  },
  {
    name: "Database System",
    color: "red",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    name: "Operating System",
    color: "yellow",
    items: ["Linux", "Windows"],
  },
];

function Skills() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const header = (
    <>
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
    </>
  );

  const ImageSection = () => {
    return (
      <img src={Images.Skills} alt="skill" style={{ maxHeight: "250px" }} />
    );
  };

  const skillSection = () => {
    const responsiveOptions = [
      {
        breakpoint: "1400px",
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: "1199px",
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: "767px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "575px",
        numVisible: 1,
        numScroll: 1,
      },
    ];

    const skillTemplate = (skill) => {
      return (
        <div
          className="border-1 surface-border border-round m-2 text-center py-5 px-3"
          style={{ minHeight: "300px" }}
        >
          <div className="mb-3">
            <div className="flex">
              <p className={`font-bold text-lg text-${skill.color}-200`}>
                {skill.name}
              </p>
            </div>
          </div>
          <div>
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
        </div>
      );
    };

    return (
      <div className="card">
        <Carousel
          value={skillSet}
          circular
          numVisible={4}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          autoplayInterval={3000}
          itemTemplate={skillTemplate}
        />
      </div>
    );
  };

  return (
    <div id="skills" className={classNames({ "m-5": !isMobile }, "m-2 mt-2")}>
      {header}
      <div className="flex justify-content-center">{ImageSection()}</div>
      <div className="mt-6 justify-content-center">{skillSection()}</div>
    </div>
  );
}

export default Skills;
