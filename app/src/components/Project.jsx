import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Images, Links } from "../assets/data";
import { classNames } from 'primereact/utils';
import { ArrowComponent } from "../assets/ArrowComponent";

// Slider
import Slider from "react-slick";

// PrimeReact components
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { ScrollPanel } from 'primereact/scrollpanel';

// css
import "../assets/css/Project.css";

const projects = [
  {
    title: "Multithreaded File Transfer",
    subTitle: "File Transfer Protocol using Multithreads concept in Java",
    description:
      `Multithreaded file transfer is a technique that uses multiple threads to copy files
      from one location to another. This can significantly improve the speed of file transfer,
      especially for large files. Each thread can be responsible for copying a different part
      of the file. This allows the file to be copied in parallel, which can significantly reduce
      the overall time it takes to complete the transfer.`,
    source: Links.MutiThreadFTP_Src,
    img: Images.MutiThreadFTP,
    tech: ["Java", "Threads"],
  },
  {
    title: "Connect Four Game",
    subTitle: "Classic Connect Four Game: Compete with Friends and AI Opponents",
    description:
      `Connect four is a two player connection board game, in which the players choose a color
      and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid.
      The pieces fall straight down, occupying the lowest available space within the column.
      The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.`,
    website: Links.ConnectFour_Web,
    source: Links.ConnectFour_Src,
    img: Images.ConnectFour,
    tech: ["JavaScript", "HTML5", "CSS"],
  },
  {
    title: "EasyExam",
    subTitle: "Evaluating Descriptive Answer using Cosine-Similarity Algorithm",
    description:
      `EasyExam provides an automatic evaluation of answer based on the keyword provided to the application
      in form of the input by the teacher which will provide equal distribution of marks and will reduce errors also.
      The Nlp checks for grammatical errors and linguistic analysis will be performed. The score of each process will
      be used to determine the final score of the student. Evaluating Descriptive Answer using Cosine-Similarity Algorithm. `,
    source: Links.EasyExam_Src,
    demo: Links.EasyExamDemo,
    website: Links.EasyExamDemo,
    img: Images.EasyExam,
    tech: ["Python", "Django", "ML"]
  },
];

const ProjectComponent = ({ project }) => {
  const header = (
    <img alt={project.title} src={project.img} style={{ maxHeight: "200px" }} />
  );

  const footer = (
    <>
      <Tooltip target=".tooltip1" />
      <Tooltip target=".tooltip2" />
      <Tooltip target=".tooltip3" />
      <div className='grid'>
        <div className='col-7'>
          <div className='flex flex-row flex-wrap card-container gap-2'>
            {
              project.tech.map((item => (<span className='p-badge bg-blue-900' key={item}>{item}</span>)))
            }
          </div>
        </div>
        <div className='col-5'>
          <div className="flex flex-row-reverse flex-wrap card-container gap-2">
            {
              project.source &&
              <a href={project.source} target="_blank" rel="noreferrer">
                <i
                  className='pi pi-github text-blue-800 tooltip1 text-2xl'
                  data-pr-tooltip="Source Code"
                  data-pr-position="top"
                />
              </a>
            }
            {
              project.demo &&
              <a href={project.demo} target="_blank" rel="noreferrer">
                <i
                  className='pi pi-youtube text-blue-800 tooltip2 text-2xl'
                  data-pr-tooltip="Demo"
                  data-pr-position="top"
                />
              </a>
            }
            {
              project.website &&
              <a href={project.website} target="_blank" rel="noreferrer">
                <i
                  className='pi pi-globe text-blue-800 tooltip3 text-2xl'
                  data-pr-tooltip="Website"
                  data-pr-position="top"
                />
              </a>
            }
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex justify-content-center m-3">
      <Card
        title={<span>{project?.title}</span>}
        subTitle={<span>{project?.subTitle}</span>}
        footer={footer}
        header={header}
        className="w-25rem shadow-6"
        style={{}}
      >
        <ScrollPanel style={{ width: '100%', height: '200px' }} className='scrollStyle'>
          <p className="m-0 overflow-auto">
            {project.description}
          </p>
        </ScrollPanel>
      </Card>
    </div>
  );
}

function Project() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: !isMobile,
    nextArrow: <ArrowComponent />,
    prevArrow: <ArrowComponent />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="projects" className={classNames({ "p-5": !isMobile }, 'pt-0 pb-0')}>
      <h3 className='flex align-items-center justify-content-center font-bold text-blue-900 underline mb-3'>Projects</h3>
      <Slider {...sliderSettings}>
        {
          projects.map(project => (
            <div className='col-auto' key={project.title}>
              <ProjectComponent project={project} />
            </div>
          ))
        }
      </Slider>
      <br />
      <div className='flex align-content-center justify-content-center'>
        <a href={Links.GithubRepo} target="_blank" rel="noreferrer">
          <Button
            className="text-black-alpha-90 hover:bg-black-alpha-10 border-black-alpha-90"
            label='View All Projects'
            outlined
            icon={<img alt="github" src={Images.Github} className="h-2rem mr-2" />}
            size="small"
          />
        </a>
      </div>
      <div className='card mt-6'></div>
    </div>
  );
}

export default Project;