import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Slider
import Slider from "react-slick";

// PrimeReact components
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

// images
import ftp from "../assets/images/FTP.png";
import connect4 from "../assets/images/connect4.jpg";
import exam from "../assets/images/exam.png";

// css
import "../assets/css/Project.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { classNames } from 'primereact/utils';

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
    link: "https://github.com/igokulganesh/Multithreaded-File-Transfer",
    img: ftp,
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
    link: "https://igokulganesh.github.io/Connect-Four/computer",
    img: connect4,
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
    link: "https://github.com/igokulganesh/EasyExam",
    img: exam,
    tech: ["Python", "Django", "ML"]
  },
];

function ArrowComponent(props) {
  const { className, onClick } = props;
  return (
    <span
      className={className}
      onClick={onClick}
    />
  );
}

const ProjectComponent = ({ project }) => {
  const header = (
    <img alt={project.title} src={project.img} style={{ maxHeight: "200px" }} />
  );

  const footer = (
    <div className="container">
      <div className='elements'>
        {
          project.tech.map((item => (<span className='element p-badge bg-blue-900' key={item}>{item}</span>)))
        }
      </div>
      <a href={project.link} className='button-container' target="_blank" rel="noreferrer">
        <Button icon="pi pi-arrow-up-right" size="small" />
      </a>
    </div>
  );

  return (
    <div className="flex justify-content-center m-3">
      <Card title={project?.title} subTitle={project?.subTitle} footer={footer} header={header} className="w-25rem shadow-6" style={{ height: "630px" }}>
        <p className="m-0 overflow-auto" style={{ height: "200px" }}>
          {project.description}
        </p>
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
      <h3 className='flex align-items-center justify-content-center font-bold text-blue-900 underline mb-3'>Personal Projects</h3>
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
        <a href="https://github.com/igokulganesh?tab=repositories" target="_blank" rel="noreferrer">
          <Button label='View All Projects' outlined />
        </a>
      </div>
      <div className='card mt-6'></div>
    </div>
  );
}

export default Project;