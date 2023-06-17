import React from "react";
import { useMediaQuery } from 'react-responsive';
import { Button } from 'primereact/button';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";
import { Images } from "../assets/data";

// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/skills.css";

const skills = [
  { group: "Programming Languages", color: "blue", bgImg: Images.Programming, items: ["C", "C++", "Python", "Rust", "Java Script", "Java", "SQL"] },
  { group: "Concepts", color: "green", bgImg: Images.Concept, items: ["Cryptography", "Data Structure", "Algorithm", "Database design", "Object Oriented Programming"] },
  { group: "Web Designing Languages", color: "red", bgImg: Images.Website, items: ["React JS", "Redux", "HTML", "CSS", "Jquery", "Bootstrap & Grid System"] },
  { group: "Frameworks", color: "yellow", bgImg: Images.Framework, items: ["Fast Api", "Django", "Rest Api"] },
  { group: "Tools & Utilities", color: "teal", bgImg: Images.Tools, items: ["Git", "VS Code", "Visual Studio", "Jira", "Bitbucket", "Shell Script", "Jupyter Notebook"] },
  { group: "Database System", color: "pink", bgImg: Images.Database, items: ["PostgreSQL", "MySQL", "MS SQL Server"] },
  { group: "Operating System", color: "orange", bgImg: Images.Os, items: ["Linux", "Windows"] },
];

function Skills() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div id="skills" className="m-5">
      <h4 className="flex align-items-center justify-content-center font-bold text-blue-900 underline">Relevant Skills</h4>
      <div className='flex justify-content-center flex-wrap  align-items-center gap-3'>
        <div className=''>
          <img src={Images.Skills} alt='skill' height={"100px"} className='responsive-image' />
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
              navigation={!isMobile}
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