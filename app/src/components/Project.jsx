import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ftp from "../assets/images/FTP.png";
import connect4 from "../assets/images/connect4.jpg";
import exam from "../assets/images/exam.png"

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
    tech: [],
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
    tech: [],
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
    tech: []
  },
];


function Project() {



  const ProjectCard = ({ project }) => {

    const header = (
      <img alt={project.title} src={project.img} style={{ maxHeight: "200px" }} />
    );

    const footer = (
      <div className="flex flex-wrap justify-content-end">
        <a href={project.link} className=' no-underline text-white' target="_blank" rel="noreferrer">
          <Button icon="pi pi-arrow-up-right" size="small" />
        </a>
      </div>
    );

    return (
      <div className="flex justify-content-center m-3">
        <Card title={project?.title} subTitle={project?.subTitle} footer={footer} header={header} className="md:w-25rem">
          <p className="m-0">
            {project.description}
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div id="projects" className='bg-blue-900 p-5' style={{ minHeight: "96vh" }}>
      <h3 className='text-white'>Projects</h3>
      <div className='card'></div>
      <div className='grid'>
        {
          projects.map(project => (
            <div className='col-auto'>
              <ProjectCard project={project} />
            </div>
          ))
        }
      </div>

    </div>
  );
}

export default Project;