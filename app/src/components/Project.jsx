import React from "react";
import { useMediaQuery } from "react-responsive";
import { Images, Links } from "../assets/data";
import { Carousel } from "primereact/carousel";

// PrimeReact components
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { ScrollPanel } from "primereact/scrollpanel";
import { Badge } from "primereact/badge";

// css
import "../assets/css/Project.css";

const projects = [
  {
    title: "Multithreaded File Transfer",
    subTitle: "File Transfer Protocol using Multithreads concept in Java",
    description: `The project aims to enhance network file transfer speed by 
    utilizing multiple threads to handle independent Read/Write operations concurrently, 
    thereby maximizing CPU utilization. Additionally, files are compressed to minimize 
    data size, expediting transfer, and encrypted to ensure security.`,
    source: Links.MutiThreadFTP_Src,
    img: Images.MutiThreadFTP,
    tech: ["Java", "Multithreading", "Socket"],
  },
  {
    title: "EasyExam",
    subTitle: "Evaluating Descriptive Answer using Cosine-Similarity Algorithm",
    description: `EasyExam provides an automatic evaluation of answer based on the keyword provided to the application
      in form of the input by the teacher which will provide equal distribution of marks and will reduce errors also.
      The Nlp checks for grammatical errors and linguistic analysis will be performed. The score of each process will
      be used to determine the final score of the student. Evaluating Descriptive Answer using Cosine-Similarity Algorithm. `,
    source: Links.EasyExam_Src,
    demo: Links.EasyExamDemo,
    img: Images.EasyExam,
    tech: ["Python", "Django", "ML"],
  },
  {
    title: "Global Industry",
    subTitle: "Inventory management system for manufacturing companies",
    description: `
      Global Industry is a web-based administrative tool that enables small-scale manufacturing companies
      to manage their operations more efficiently. The tool provides a centralized platform for companies
      to maintain stock and production details, manage employees and their salaries and track customer orders.
      Each company is assigned a separate database schema, which ensures their data is secure and protected
      from unauthorized access.
    `,
    source: Links.GlobalInventory_src,
    img: Images.GlobalInventory,
    tech: ["Python", "Django", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    subTitle: "Website for Showcasing My Skills & Experience",
    description: `
      I've always wanted to develop a platform to professionally present myself, and I'm proud to finally bring this project to life. 
      The website is built using ReactJS, ensuring it is responsive and adapts seamlessly to all screen sizes.
    `,
    source: Links.portfolio_src,
    img: Images.Portfolio,
    tech: ["ReactJS", "PrimeReact", "Webpack"],
  },
  {
    title: "Connect Four Game",
    subTitle: "Connect Four Game: Compete with Friends and AI Opponents",
    description: `Connect four is a two player connection board game, in which the players choose a color
      and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid.
      The pieces fall straight down, occupying the lowest available space within the column.
      The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.`,
    website: Links.ConnectFour_Web,
    source: Links.ConnectFour_Src,
    img: Images.ConnectFour,
    tech: ["JavaScript", "HTML5", "CSS"],
  },
  {
    title: "Tic Tac Toe",
    subTitle: "Classic Tic Tac Toe Game using Solar2D Engine",
    description: `The classic Tic Tac Toe game was developed in Lua and Solar2D for Android and Windows platforms.
      It has two modes of play: Play with friends and Play with the computer using the Min-Max Algorithm, which is unbeatable.`,
    img: Images.TicTacToe,
    tech: ["Lua", "Solar2D"],
    source: Links.TicTacToe_Src,
    website: Links.TicTacToe_Web,
  },
];

function Project() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const header = (
    <div className="flex justify-content-center">
      <h2 className="flex justify-content-center align-items-center font-bold text-light-blue mt-5 mb-0">
        Personal Projects
      </h2>
    </div>
  );

  const description = (
    <div className="flex flex-wrap justify-content-center align-items-center">
      <p className="flex flex-wrap justify-content-center align-items-center text-white font-light ">
        These are some of my personal projects that I have worked on
      </p>
    </div>
  );

  const projectGroups = () => {
    const projectTemplate = (project) => {
      const header = (
        <img
          alt={project.title}
          src={project.img}
          style={{ maxHeight: "200px" }}
        />
      );

      const footer = (
        <>
          <Tooltip target=".tooltip1" />
          <Tooltip target=".tooltip2" />
          <Tooltip target=".tooltip3" />
          <div className="grid">
            <div className="col-auto">
              <div className="flex flex-row flex-wrap card-container gap-2">
                {project.tech.map((item) => (
                  <Badge key={item} value={item} className="bg-blue-300" />
                ))}
              </div>
            </div>
            <div className="col">
              <div className="flex flex-row-reverse flex-wrap card-container gap-2">
                {project.source && (
                  <a href={project.source} target="_blank" rel="noreferrer">
                    <i
                      className="pi pi-github text-blue-300 tooltip1 text-2xl"
                      data-pr-tooltip="Source Code"
                      data-pr-position="top"
                    />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <i
                      className="pi pi-youtube text-blue-300 tooltip2 text-2xl"
                      data-pr-tooltip="Demo"
                      data-pr-position="top"
                    />
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noreferrer">
                    <i
                      className="pi pi-globe text-blue-300 tooltip3 text-2xl"
                      data-pr-tooltip="Website"
                      data-pr-position="top"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      );

      return (
        <div className="m-2">
          <Card
            title={<span>{project?.title}</span>}
            subTitle={<span>{project?.subTitle}</span>}
            footer={footer}
            header={header}
            className="hadow-6"
          >
            <ScrollPanel style={{ width: "100%", height: "200px" }}>
              <p className="m-0 overflow-auto font-light text-color text-sm text-justify">
                {project.description}
              </p>
            </ScrollPanel>
          </Card>
        </div>
      );
    };

    const responsiveOptions = [
      {
        breakpoint: "1200px",
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: "1000px",
        numVisible: 2,
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

    return (
      <div className="justify-content-cente">
        <div className="card">
          <Carousel
            value={projects}
            circular
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            autoplayInterval={3000}
            itemTemplate={projectTemplate}
            showNavigators={isMobile ? false : true}
          />
        </div>
      </div>
    );
  };

  const footer = (
    <div className="flex align-content-center justify-content-center mt-2">
      <a href={Links.GithubRepo} target="_blank" rel="noreferrer">
        <Button
          className="text-white bg-black-alpha-10 border-black-alpha-90 hover:surface-50"
          label="View All Projects"
          outlined
          icon={
            <img alt="github" src={Images.Github} className="h-2rem mr-2" />
          }
          size="small"
        />
      </a>
    </div>
  );

  return (
    <div id="projects" className="card-section">
      {header}
      {description}
      {projectGroups()}
      {footer}
    </div>
  );
}

export default Project;
