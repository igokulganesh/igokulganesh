import React from 'react';
import ftp from "../assets/images/FTP.png";
import connect4 from "../assets/images/connect4.png";
import exam from "../assets/images/exam.png"

const projects = [
  {
    title: "Multithreaded File Transfer",
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
  return (
    <div id="projects" className='bg-blue-900 p-5' style={{ minHeight: "96vh" }}>
      <h3 className='text-white'>Projects</h3>
      <div className='card'></div>
      <div className='p-card'>
        {
          projects.map(project => (
            <div className='p-card'>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Project;