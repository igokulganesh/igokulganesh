import React from "react";
import { Button } from 'primereact/button';

let COLOR_INDEX = 0;

const getColor = () => {
  const colors = ["secondary", "success", "info", "warning", "help", "danger"];
  COLOR_INDEX = (COLOR_INDEX + 1) % colors.length;
  return colors[COLOR_INDEX];
}

function Skills() {
  const skills = [
    { group: "Programming Languages", items: ["C", "C++", "Python", "Rust", "Java Script", "Java", "SQL"] },
    { group: "Concepts", items: ["Cryptography", "Data Structure", "Algorithm", "Database design", "Object Oriented Programming"] },
    { group: "Web Designing Languages", items: ["React JS", "Redux", "HTML", "CSS", "Jquery", "Bootstrap & Grid System"] },
    { group: "Frameworks", items: ["Fast Api", "Django", "Rest Api"] },
    { group: "Tools & Utilities", items: ["Git", "VS Code", "Visual Studio", "Jira", "Bitbucket", "Shell Script", "Jupyter Notebook"] },
    { group: "Database System", items: ["PostgreSQL", "MySQL", "MS SQL Server"] },
    //{ group: "Operating System", items: ["Linux", "Windows"] },
  ]

  return (
    <div id="skills" className="bg-blue-50 card m-5" style={{ minHeight: "75vh" }}>
      <h4 className="mt-6 mb-3 flex align-items-center justify-content-center font-bold">Technical Expertise</h4>
      <div className="grid gap-3 m-4 justify-content-center" >
        {
          skills.map(skill => {
            return (
              <div className="col-4 card p-3 align-items-center justify-content-center p-card shadow-3 PopCard" key={skill.group} style={{ minHeight: "300px", maxWidth: "350px", minWidth: "240px" }}>
                <div className="m-2 flex font-medium text-lg text-gray-800">
                  {skill.group}
                </div>
                <div className="flex flex-wrap justify-content-center card-container gap-2">
                  {skill.items.map(item => {
                    return (
                      <div key={item}>
                        <Button label={item} rounded raised outlined severity={getColor()} size="small" />
                      </div>
                    )
                  })}
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Skills;