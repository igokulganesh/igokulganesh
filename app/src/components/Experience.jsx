import React, { useState } from 'react';
import { Timeline } from 'primereact/timeline';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
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
        description: (
          <div className='text-black-alpha-90'>
            <p>I have been working on Trust Platform Design Suit (TPDS) Application and CryptoAuthLib within the Secure Product Groups.
            </p>
            <b>Responsibilities includes:</b>
            <ul className='list-disc'>
              <li>
                Development of Trust Platform Design Suite (TPDS) using Python and React applications to
                demonstrate Crypto product features and usage.
              </li>
              <li>
                Development of library support for Microchip Crypto Products.
              </li>
              <li>
                Development of Secure Provisioning Services for Microchip Crypto Products through TPDS.
              </li>
            </ul>
            <b>Projects executed/executing:</b>
            <ul className='list-disc'>
              <li>Developed WPC (Wireless Power Consortium) Qi 1.3 application usecase and firmware project for
                Microchip secure elements using Python, C, Reactjs and cryptographic library.</li>
              <li>Created Symmetric and Asymmetric Authentication use cases for Secure Devices</li>
              <li>
                Design and developed various utility tools for the TPDS Application to support factory programming for
                microchip boards, an X509 certificate parser, and a Microchip manifest file decoder.
              </li>
              <li>
                Developed the Configurators to Generate the Provisioning Package for Secure Provisioning Services.
              </li>
              <li>
                Added support for Proto Provisioning the Microchip secure devices in the TPDS Application.

              </li>
              <li>
                Enhanced the user experience by integrating Redux and Formik for state management and
                streamlining user forms.
              </li>
              <li>Added Package manager to the TPDS Application for managing the installation of packages.</li>
            </ul>
          </div>
        ),
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
    description: (undefined),
    roles: [
      {
        title: "Summer Internship",
        startDate: new Date(2021, 5, 1),
        endDate: new Date(2021, 7, 1),
        skills: ["Java", "Object-Oriented Programming (OOP)", "Database Design"],
        description: (
          <p className='text-black-alpha-90'>
            Completed the internship program offered by Zoho Corporation,
            during which I developed a banking application using Java and PostgreSql
          </p>
        ),
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

function Description({ description }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {
        description && (
          <Button
            label={toggle ? "View less" : "View more"}
            onClick={() => setToggle(!toggle)}
            size='small'
            className='mb-3 p-button-text more-button'
            icon={toggle ? "pi pi-angle-up" : "pi pi-angle-down"} iconPos='right'
          />
        )
      }
      {
        toggle ? description : <></>
      }
    </>
  );
}

function Roles({ role }) {

  const duration = calculateDuration(role.startDate, role.endDate);
  const startMonth = role.startDate.toLocaleString('default', { month: 'short' });
  const endMonth = role.endDate.toLocaleString('default', { month: 'short' });
  const startYear = role.startDate.getFullYear();
  const endYear = role.endDate.getFullYear();
  const startDate = `${startMonth} ${startYear}`;
  const endDate = ((endMonth !== new Date().getMonth() && endYear !== new Date().getFullYear()) ? `${endMonth} ${endYear}` : "Present");

  const timeLine = `${startDate} - ${endDate} · ${duration}`;

  return (
    <div style={{ width: "200%" }} key={role.title}>
      <h6 className='text-blue-900'>{role.title}</h6>
      <p className='text-sm text-black-alpha-90'>
        {timeLine}
      </p>
      <p>
        <span className='font-medium text-black-alpha-90'>Skills:</span>
        {role.skills.map((skill, index) => <span className='text-black-alpha-90' key={skill}>{` ${skill} ${index !== role.skills.length - 1 ? " · " : ""}`}</span>)}
      </p>
      <Description description={role?.description} />
    </div>
  );
}

function Experience() {
  return (
    <div id="experience" className='p-5'>
      <div className="card" >
        <h4 className="mt-6 mb-3 flex align-items-center justify-content-center font-bold text-blue-900 underline">Relevant Experience</h4>
        {
          experience.map((exp, index) => {

            const duration = calculateDuration(exp.startDate, exp.endDate);

            return (
              <div key={exp.company}>
                <div className="grid card-container gap-3">
                  <div className="col-1">
                    <div className="flex align-content-center justify-content-center flex-wrap card-container">
                      <a href={exp?.link} target="_blank" rel="noreferrer">
                        <img src={exp?.logo} align="left" alt={exp?.company} width="75px" className='align-items-center ml-5 mt-3' />
                      </a>
                    </div>
                  </div>
                  <div className="col m-2">
                    <h3 className="text-lg font-bold">
                      <a href={exp?.link} target="_blank" rel="noreferrer" className='no-underline text-blue-900'>
                        {exp.company}
                      </a>
                    </h3>
                    <p className='text-sm text-black-alpha-90'>
                      {exp.roles.length > 1 ? <>{duration}<br /></> : ""}
                      {exp.location}
                    </p>
                  </div>
                </div>
                <div className='flex' style={{ width: "100%" }}>
                  <Timeline className='timeline' value={exp.roles} content={(item) => <Roles role={item} />} />
                </div>
                <div className='card-container ml-5'>
                  <Description description={exp?.description} />
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
