import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, EffectCreative } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import "../assets/css/skills.css";


let COLOR_INDEX = 0;

const getColor = () => {
  const colors = ["secondary", "success", "info", "warning", "help", "danger"];
  COLOR_INDEX = (COLOR_INDEX + 1) % colors.length;
  return colors[COLOR_INDEX];
}

const skills = [
  { group: "Programming Languages", items: ["C", "C++", "Python", "Rust", "Java Script", "Java", "SQL"] },
  { group: "Concepts", items: ["Cryptography", "Data Structure", "Algorithm", "Database design", "Object Oriented Programming"] },
  { group: "Web Designing Languages", items: ["React JS", "Redux", "HTML", "CSS", "Jquery", "Bootstrap & Grid System"] },
  { group: "Frameworks", items: ["Fast Api", "Django", "Rest Api"] },
  { group: "Tools & Utilities", items: ["Git", "VS Code", "Visual Studio", "Jira", "Bitbucket", "Shell Script", "Jupyter Notebook"] },
  { group: "Database System", items: ["PostgreSQL", "MySQL", "MS SQL Server"] },
  //{ group: "Operating System", items: ["Linux", "Windows"] },
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
    <div id="skills" className="m-5" style={{ minHeight: "55vh" }}>
      <h4 className="mt-6 mb-3 flex align-items-center justify-content-center font-bold text-blue-900 underline">Relevant Skills</h4>
      <br />
      <>
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
          modules={[Autoplay, Pagination, Navigation, Keyboard, EffectCreative]}
          className="mySwiper"
          keyboard={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: false,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
        >
          {
            skills.map(skill => {
              return (
                <SwiperSlide key={skill.group}>
                  <div>
                    <div className="card p-3 align-items-center justify-content-center" style={{ minHeight: "350px", width: "350px" }}>
                      <div className="m-2 flex font-medium text-lg text-gray-800">
                        {skill.group}
                      </div>
                      <div className="flex flex-wrap justify-content-center gap-2">
                        {skill.items.map(item => {
                          return (
                            <div key={item}>
                              <Button label={item} raised outlined severity={getColor()} size="small" />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <br /><br />
                  </div>
                </SwiperSlide>
              );
            })
          }
        </Swiper>
      </>
    </div>
  );
}

export default Skills;