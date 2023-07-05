import React, { useState } from 'react';
import { Images, Links } from "../assets/data";
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Accordion, AccordionTab } from 'primereact/accordion';
import '../assets/css/Experience.css';


const experience = [
  {
    company: "Microchip Technology",
    location: "Chennai, Tamil Nadu, India",
    logo: Images.Microchip,
    link: Links.Microchip,
    startDate: new Date(2022, 2, 1),
    endDate: new Date(),
    roles: [
      {
        title: "Software Engineer",
        startDate: new Date(2022, 8, 1),
        endDate: new Date(),
        skills: ["C", "Embedded C", "Python", "Cryptography", "React JS"],
        description: (
          <div className='text-sm'>
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
    logo: Images.Zoho,
    startDate: new Date(2021, 5, 1),
    endDate: new Date(2021, 7, 1),
    link: Links.Zoho,
    description: (undefined),
    roles: [
      {
        title: "Summer Internship",
        startDate: new Date(2021, 5, 1),
        endDate: new Date(2021, 7, 1),
        skills: ["Java", "Object-Oriented Programming (OOP)", "Database Design"],
        description: (
          <p className='text-sm'>
            Completed the internship program offered by Zoho Corporation,
            during which I developed a banking application using Java and PostgreSql.
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
            className='p-button-text more-button'
            icon={toggle ? "pi pi-angle-up" : "pi pi-angle-down"} iconPos='right'
          />
        )
      }
      {
        toggle ? <div className='card p-3 overflow-auto max-h-20rem'>{description}</div> : <></>
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
    <div className="" key={role.title}>
      <h6 className='font-bold'>{role.title}</h6>
      <p className='font-light text-sm'>{timeLine}</p>
      <p>
        <span className='font-semibold text-black-alpha-80'>Skills:</span>
        {role.skills.map((skill, index) => <span className='text-sm font-italic' key={skill}>{` ${skill} ${index !== role.skills.length - 1 ? " · " : ""}`}</span>)}
      </p>
      <Description description={role?.description} />
      <Divider />
    </div>
  );
}

function Experience() {

  return (
    <div id="experience" className="card-section">
      <Accordion activeIndex={0} expandIcon="pi" collapseIcon="pi">
        <AccordionTab header={<span className="font-bold text-blue-900 text-xl">Relevant Experience</span>}>
          <Accordion activeIndex={0} expandIcon="pi" collapseIcon="pi">
            {
              experience.map((exp) => {
                const duration = calculateDuration(exp.startDate, exp.endDate);
                const header = (
                  <div className="flex w-30rem">
                    <a href={exp?.link} target="_blank" rel="noreferrer" className='pt-2'>
                      <img src={exp?.logo} alt={exp?.company} width="75px" />
                    </a>
                    <div className="pl-3">
                      <h3 className="text-lg font-bold">
                        {exp.company}
                      </h3>
                      <p className='text-sm font-light'>
                        {exp.roles.length > 1 ? <>{duration}<br /></> : ""}
                        {exp.location}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <AccordionTab header={header} key={exp.company}>
                    <Description description={exp?.description} />
                    {
                      exp.roles.map(role => <Roles role={role} />)
                    }
                  </AccordionTab>
                );
              })
            }
          </Accordion>
        </AccordionTab>
      </Accordion>

    </div>
  );
};

export default Experience;
