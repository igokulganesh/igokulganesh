import React, { useEffect, useState } from "react";
import { Images, Links } from "../assets/data";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Accordion, AccordionTab } from "primereact/accordion";
import "../assets/css/Experience.css";

const experience = [
  {
    company: "Microchip Technology",
    location: "Chennai, Tamil Nadu, India",
    logo: Images.Microchip,
    startDate: new Date(2022, 2, 1),
    endDate: new Date(),
    roles: [
      {
        title: "Software Engineer",
        startDate: new Date(2022, 7, 1),
        endDate: new Date(),
        skills: [
          "Java",
          "Python",
          "React",
          "Cryptography",
          "Redux",
          "TypeScript",
        ],
        description: (
          <div className="text-sm">
            <p>
              As a software developer at Microchip Technology, I have been
              working on Development of Trust Platform Design Suite (TPDS) using
              Java, Python and React to demonstrate Crypto product features and
              usage.
            </p>
            <b>Projects executed/executing:</b>
            <ul className="list-disc">
              <li>
                Developed React app for Secure Provisioning Services for
                Microchip Crypto Products through TPDS.
              </li>
              <li>
                Developed multiple Interactive Usecases and configurators for
                Microchip Crypto devices using Python and React.
              </li>
              <li>
                Developed the Python SDK for Azure IoT to enable seamless
                interaction with Azure cloud services, utilized in cloud based
                Usecases.
              </li>
              <li>
                Design and developed various utility tools for the TPDS
                Application to support factory programming for microchip boards,
                an X509 certificate parser, and a Microchip manifest file
                decoder.
              </li>
              <li>
                Designed and implemented a React-based generic framework for
                configuring CEC devices.
              </li>
              <li>
                Developed a project for AES-GCM encryption and decryption,
                crucial for ACVP certifications.
              </li>
              <li>
                Implemented Package manager to the TPDS Application for managing
                the installation of packages.
              </li>
            </ul>
          </div>
        ),
        collapse: false,
      },
      {
        title: "Intern",
        startDate: new Date(2022, 1, 1),
        endDate: new Date(2022, 6, 1),
        collapse: false,
        description: (
          <div className="text-sm">
            <ul className="list-disc">
              <li>
                Enhanced the user experience on TPDS by integrating PrimeReact
                Components and addded Redux and Formik for state management and
                streamlining user forms.
              </li>
              <li>
                Created Symmetric and Asymmetric Authentication use cases for
                Secure Devices
              </li>
              <li>
                Developed WPC (Wireless Power Consortium) Qi 1.3 application
                usecase and configurator
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    company: "Zoho Corporation",
    location: "Chennai, Tamil Nadu, India",
    logo: Images.Zoho,
    startDate: new Date(2021, 5, 1),
    endDate: new Date(2021, 7, 1),
    description: undefined,
    roles: [
      {
        title: "Summer Internship",
        startDate: new Date(2021, 5, 1),
        endDate: new Date(2021, 7, 1),
        skills: ["Java", "JDBC", "Database Design", "PostgreSql"],
        description: (
          <p className="text-sm">
            Completed the internship program offered by Zoho Corporation, During
            this period, I developed a banking application using Java, JDBC, and
            PostgreSQL.
          </p>
        ),
        collapse: false,
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
  if (diff.years) duration += `${diff.years}yrs `;
  if (diff.months) duration += `${diff.months} mos`;

  return duration;
}

function Description({ description, defaultToggle = false, collapse = true }) {
  const [toggle, setToggle] = useState(defaultToggle);
  return (
    <>
      {description && collapse && (
        <Button
          label={toggle ? "View less" : "View more"}
          onClick={() => setToggle(!toggle)}
          size="small"
          className="p-button-text more-button"
          icon={toggle ? "pi pi-angle-up" : "pi pi-angle-down"}
          iconPos="right"
        />
      )}
      {toggle || collapse === false ? (
        <div className="card overflow-auto max-h-20rem">{description}</div>
      ) : (
        <></>
      )}
    </>
  );
}

function Roles({ role }) {
  const duration = calculateDuration(role.startDate, role.endDate);
  const startMonth = role.startDate.toLocaleString("default", {
    month: "short",
  });
  const endMonth = role.endDate.toLocaleString("default", { month: "short" });
  const startYear = role.startDate.getFullYear();
  const endYear = role.endDate.getFullYear();
  const startDate = `${startMonth} ${startYear}`;
  const endDate =
    endMonth !== new Date().getMonth() && endYear !== new Date().getFullYear()
      ? `${endMonth} ${endYear}`
      : "Present";

  const timeLine = `${startDate} - ${endDate} · ${duration}`;

  const showSkill = (skills) => {
    return (
      <p>
        <span className="font-semibold">Skills:</span>
        {skills.map((skill, index) => (
          <span className="text-sm font-italic" key={skill}>{` ${skill} ${
            index !== role.skills.length - 1 ? " · " : ""
          }`}</span>
        ))}
      </p>
    );
  };

  return (
    <div key={role.title}>
      <h3 className="font-bold">{role.title}</h3>
      <p className="font-light text-sm">{timeLine}</p>
      {role?.skills && showSkill(role.skills)}
      <Description description={role?.description} collapse={role?.collapse} />
      <Divider />
    </div>
  );
}

function Experience() {
  const [totalExp, setTotalExp] = useState("");

  useEffect(() => {
    let years = 0,
      months = 0;
    experience.forEach((exp) => {
      const start = exp.startDate;
      const end = exp.endDate;
      const diff = getDiff(start, end);

      years += diff.years;
      months += diff.months;
    });

    years += Math.floor(months / 12);
    months = months % 12;
    let sum = `${years} years`;
    if (months) sum += ` ${months} months`;
    setTotalExp(sum);
  }, []);

  const eachAccordion = experience.map((exp) => {
    const duration = calculateDuration(exp.startDate, exp.endDate);
    const header = (
      <div className="flex flex-wrap">
        <img src={exp?.logo} alt={exp?.company} height="50px" />
        <div className="pl-3 text-white">
          <h3 className="text-lg font-bold">{exp.company}</h3>
          <p className="text-sm font-light">
            {exp.roles.length > 1 ? (
              <>
                {duration}
                <br />
              </>
            ) : (
              ""
            )}
            {exp.location}
          </p>
        </div>
      </div>
    );

    return (
      <AccordionTab headerTemplate={header} key={exp.company}>
        <Description description={exp?.description} />
        {exp.roles.map((role) => (
          <Roles role={role} key={role.title} />
        ))}
      </AccordionTab>
    );
  });

  return (
    <div id="experience" className="card-section">
      <div className="flex justify-content-center text-gradient">
        <h2 className="flex justify-content-center align-items-center font-bold text-light-blue mt-5 mb-0">
          Experience
        </h2>
      </div>
      <div className="flex flex-wrap justify-content-center align-items-center">
        <p className="flex flex-wrap justify-content-center align-items-center text-white font-light">
          As a professional, I have over &nbsp;
          <span className="font-bold"> {totalExp} </span> &nbsp; of experience
        </p>
      </div>
      <Accordion activeIndex={[0]} multiple={true}>
        {eachAccordion}
      </Accordion>
    </div>
  );
}

export default Experience;
