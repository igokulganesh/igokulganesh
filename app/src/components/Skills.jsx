import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";

/* ******** Image Files ******** */
import imageSkill from "../assets/images/Skills/skills.png";
import imgProgram from "../assets/images/Skills/programming.jpg";
import imgConcept from "../assets/images/Skills/concept.png";
import imgWeb from "../assets/images/Skills/web.jpg";
import imgFrame from "../assets/images/Skills/Frames.jpg";
import imgTools from "../assets/images/Skills/tool.png";
import imgDB from "../assets/images/Skills/db.jpg";
import imgOS from "../assets/images/Skills/os.jpg";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/css/skills.css";

const skills = [
  { group: "Programming Languages", color: "blue", bgImg: imgProgram, items: ["C", "C++", "Python", "Rust", "Java Script", "Java", "SQL"] },
  { group: "Concepts", color: "green", bgImg: imgConcept, items: ["Cryptography", "Data Structure", "Algorithm", "Database design", "Object Oriented Programming"] },
  { group: "Web Designing Languages", color: "red", bgImg: imgWeb, items: ["React JS", "Redux", "HTML", "CSS", "Jquery", "Bootstrap & Grid System"] },
  { group: "Frameworks", color: "yellow", bgImg: imgFrame, items: ["Fast Api", "Django", "Rest Api"] },
  { group: "Tools & Utilities", color: "teal", bgImg: imgTools, items: ["Git", "VS Code", "Visual Studio", "Jira", "Bitbucket", "Shell Script", "Jupyter Notebook"] },
  { group: "Database System", color: "pink", bgImg: imgDB, items: ["PostgreSQL", "MySQL", "MS SQL Server"] },
  { group: "Operating System", color: "orange", bgImg: imgOS, items: ["Linux", "Windows"] },
];

function Skills() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the value according to your definition of a small screen
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="skills" className="m-5">
      <h4 className="flex align-items-center justify-content-center font-bold text-blue-900 underline">Relevant Skills</h4>
      <div className='flex justify-content-center flex-wrap  align-items-center gap-3'>
        <div className=''>
          <img src={imageSkill} alt='skill' height={"100px"} className='responsive-image' />
        </div>
        <div>
          <div className="skill-outer-width">
            <br />
            <Swiper
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              slidesPerView={1}
              navigation={!isSmallScreen}
              modules={[Autoplay, Pagination, Navigation, Keyboard]}
              className="mySwiper"
              keyboard={true}
            >
              {
                skills.map(skill => {
                  return (
                    <SwiperSlide key={skill.group}>
                      <div className={`p-5 bg-${skill.color}-900 skill-card-height MyCard`} style={{ backgroundImage: `url(${skill?.bgImg})` }}>
                        <p className={`flex font-bold text-lg text-${skill.color}-200`}>{skill.group}</p>
                        <div className="flex flex-wrap gap-2 skill-card-width">
                          {skill.items.map(item => {
                            return (
                              <div key={item}>
                                <Button label={item} raised outlined size="small" className={`text-${skill.color}-300`} />
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <br />
                    </SwiperSlide>
                  );
                })
              }
              <br /><br />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;