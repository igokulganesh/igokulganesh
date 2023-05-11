import React from "react";
import { Link } from "react-scroll";
import SocialMedia from "./SocialMedia";
import igokulganesh from "../assets/images/igokulganesh.png";
import resume from "../assets/Gokul Ganesh I (Resume).pdf"
import "./Hero.css";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="container">
        <div>
          <img className="image" src={igokulganesh} alt="Gokul Ganesh I" height={600} />
        </div>
        <div className="content">
          <div className="">
            <h2 className="typing-header font-bold text-bluegray-800">Gokul Ganesh I</h2>
            <p className="font-light">
              Software Engineer of Secure Product Groups at Microchip
            </p>
            <p className="mt-2 font-normal white-space-normal">
              I'm a highly motivated and results-driven professional with a keen
              eye for detail and natural problem-solving, program development, and
              adapting to new environments. I'm innovative, proactive, and a quick
              decision-maker who works effectively towards team goals. I leverage
              my technical expertise and dynamic skill set to drive optimal
              profitability for organizations, identifying and capitalizing on
              growth opportunities to exceed targets. Let's connect and
              collaborate for exciting opportunities!
            </p>
            <SocialMedia />
            <div className="flex gap-3">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-120}
                duration={50}
              >
                <button className="button">Explore More</button>
              </Link>
              <a href={resume} download="Gokul Ganesh I (Resume)">
                <button className="download bg-primary-reverse">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* What I do? */}
    </div>
  );
}

export default Hero;
