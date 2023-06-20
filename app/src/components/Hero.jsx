import React from "react";
import { Link } from "react-scroll";
import { Button } from "primereact/button";
import SocialMedia from "./SocialMedia";
import igokulganesh from "../assets/images/igokulganesh.png";
import resume from "../assets/Gokul Ganesh I (Resume).pdf";
import "../assets/css/Hero.css";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="flex flex-wrap justify-content-center gap-3">
        <div className="flex justify-content-center flex-wrap card-container">
          <img
            className="hero-image"
            src={igokulganesh}
            alt="Gokul Ganesh I"
          />
        </div>
        <div className="flex flex-column align-content-center justify-content-center flex-wrap card-container">
          <div className="hero-container">
            <h1 className="font-bold typing-animation" style={{ color: "#0098e5" }}>
              Gokul Ganesh I
            </h1>
            <br />
            <p className="font-light">
              Software Engineer of Secure Product Groups at Microchip
            </p>
            <p className="mt-2 font-normal white-space-normal">
              Highly motivated and results-driven professional with strong
              problem-solving skills. Adaptable and innovative, I excel in
              program development and thrive in new environments. A proactive
              team player with a keen eye for detail, I make quick decisions to
              achieve team goals. Leveraging technical expertise, I drive
              profitability and exceed targets by identifying and capitalizing
              on growth opportunities.
            </p>
            <SocialMedia />
            <div className="flex flex-wrap gap-1 mt-3">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={10}
              >
                <Button
                  label="Explore More"
                  size="small"
                  className="border-noround"
                />
              </Link>
              <a
                href={resume}
                download="Gokul Ganesh I (Resume)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  label="Download Resume"
                  className="border-noround"
                  size="small"
                  outlined
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
