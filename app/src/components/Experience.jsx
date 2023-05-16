import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Divider } from 'primereact/divider';
import microchip from "../assets/images/microchip.png";
import zoho from "../assets/images/zoho.png";
import '../assets/css/Experience.css';


const experience = [
  {
    company: "Microchip Technology",
    location: "Chennai, Tamil Nadu, India",
    logo: microchip,
    link: "https://www.microchip.com/",
    startDate: new Date(2022, 2, 1),
    endDate: new Date(),
    roles: [
      {
        title: "Software Engineer",
        startDate: new Date(2022, 8, 1),
        endDate: new Date(),
        skills: ["C", "Embedded C", "Python", "Cryptography", "React JS"],
        description: "",
      },
      {
        title: "Intern",
        startDate: new Date(2022, 2, 1),
        endDate: new Date(2022, 8, 1),
        skills: ["Python", "React JS", "FastApi", "Embedded C", "Redux JS"],
        description: "",
      },
    ],
  },
  {
    company: "Zoho Corporation",
    location: "Chennai, Tamil Nadu, India",
    logo: zoho,
    startDate: new Date(2021, 5, 1),
    endDate: new Date(2021, 7, 1),
    link: "https://www.zoho.com/",
    roles: [
      {
        title: "Summer Internship",
        startDate: new Date(2021, 5, 1),
        endDate: new Date(2021, 7, 1),
        skills: ["Java", "Object-Oriented Programming (OOP)", "Database Design"],
        description: "",
      },
    ],
  },
];

function getDiff(startDate, endDate) {
  let months;
  months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += endDate.getMonth();
  let years = Math.floor(months / 12);
  months = months % 12;
  if (endDate.getDate() >= startDate.getDate()) {
    months += 1;
  }
  years += Math.floor(months / 12);
  months = months % 12;

  return { years: years, months: months };
}

function calculateDuration(startDate, endDate) {
  const diff = getDiff(startDate, endDate);

  let duration = "";
  if (diff.years)
    duration += `${diff.years}yrs `;
  if (diff.months)
    duration += `${diff.months} mos`;

  return duration;
}

function roles(role) {

  const duration = calculateDuration(role.startDate, role.endDate);
  const startMonth = role.startDate.toLocaleString('default', { month: 'short' });
  const endMonth = role.endDate.toLocaleString('default', { month: 'short' });
  const startYear = role.startDate.getFullYear();
  const endYear = role.endDate.getFullYear();
  const startDate = `${startMonth} ${startYear}`;
  const endDate = ((endMonth !== new Date().getMonth() && endYear !== new Date().getFullYear()) ? `${endMonth} ${endYear}` : "Present");

  const timeLine = `${startDate} - ${endDate} · ${duration}`

  return (
    <div style={{ width: "200%" }}>
      <h6>{role.title}</h6>
      <p className='text-sm text-gray-700'>
        {timeLine}
      </p>
      {role.description}
      <p>
        <span className='font-medium'>Skills:</span>
        {role.skills.map((skill, index) => ` ${skill} ${index !== role.skills.length - 1 ? " · " : ""}`)}
      </p>
      <br />
    </div>
  );
}

function Experience() {
  return (
    <div id="experience" className='bg-green-50 p-5'>
      <div className="card" >
        <h4 className="m-3">Experience</h4>
        {
          experience.map((exp, index) => {

            const duration = calculateDuration(exp.startDate, exp.endDate);

            return (
              <div key={exp.company}>
                <div className="grid card-container gap-3">
                  <div className="col-1">
                    <div className="flex align-content-center justify-content-center flex-wrap card-container">
                      <a href={exp?.link} target="_blank" rel="noreferrer">
                        <img src={exp?.logo} align="left" alt={exp?.company} width="75px" className='align-items-center  ml-5 mt-3' />
                      </a>
                    </div>
                  </div>
                  <div className="col m-2">
                    <h3 className="text-lg font-bold">
                      <a href={exp?.link} target="_blank" rel="noreferrer" className='no-underline text-bluegray-700'>
                        {exp.company}
                      </a>
                    </h3>
                    <p className='text-sm text-gray-700'>
                      {exp.roles.length > 1 ? <>{duration}<br /></> : ""}
                      {exp.location}
                    </p>
                  </div>
                </div>
                <div className='flex' style={{ width: "100%" }}>
                  <Timeline className='timeline' value={exp.roles} content={roles} />
                </div>
                {
                  (index !== experience.length - 1) ? <Divider /> : <></>
                }
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Experience;
