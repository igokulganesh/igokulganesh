import React from "react";
import { Link } from "react-scroll";
import SocialMedia from "./SocialMedia";
import igokulganesh from "../assets/images/igokulganesh.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="mt-7" id="hero">
      <div className="grid p-5">
        <div className="col-5">
          <img src={igokulganesh} alt="john" height={600} />
        </div>
        <div className="col-5">
          <div className="pt-6">
            <h2 className="mt-6 H2 font-bold">Gokul Ganesh I</h2>
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
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <button className="button">Explore More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
