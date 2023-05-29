import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";
import imageSkill from "../assets/images/skills.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/css/skills.css";

const skills = [
  { group: "Programming Languages", color: "blue", items: ["C", "C++", "Python", "Rust", "Java Script", "Java", "SQL"] },
  { group: "Concepts", color: "green", items: ["Cryptography", "Data Structure", "Algorithm", "Database design", "Object Oriented Programming"] },
  { group: "Web Designing Languages", color: "red", items: ["React JS", "Redux", "HTML", "CSS", "Jquery", "Bootstrap & Grid System"] },
  { group: "Frameworks", color: "yellow", items: ["Fast Api", "Django", "Rest Api"] },
  { group: "Tools & Utilities", color: "teal", items: ["Git", "VS Code", "Visual Studio", "Jira", "Bitbucket", "Shell Script", "Jupyter Notebook"] },
  { group: "Database System", color: "pink", items: ["PostgreSQL", "MySQL", "MS SQL Server"] },
  { group: "Operating System", color: "orange", items: ["Linux", "Windows"] },
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
                      <div className={`p-5 bg-${skill.color}-100 skill-card-height`}>
                        <p className={`flex font-bold text-lg text-${skill.color}-700`}>{skill.group}</p>
                        <div className="flex flex-wrap gap-2 skill-card-width">
                          {skill.items.map(item => {
                            return (
                              <div key={item}>
                                <Button label={item} raised outlined size="small" className={`text-${skill.color}-500`} />
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
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;