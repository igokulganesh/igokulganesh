import React from "react";
import { Link } from "react-scroll";
import { Button } from "primereact/button";
import SocialMedia from "./SocialMedia";
import { Images } from "../assets/data";
import resume from "../assets/Gokul Ganesh I (Resume).pdf";
import "../assets/css/Hero.css";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="flex flex-wrap justify-content-center gap-3">
        <div className="flex justify-content-center flex-wrap card-container">
          <img
            className="hero-image"
            src={Images.igokulganesh}
            alt="Gokul Ganesh I"
          />
        </div>
        <div className="hero-container">
          <div className="flex flex-column align-content-center justify-content-center flex-wrap card-container">
            <div className="flex align-items-center flex-wrap gap-2">
              <p className="flex align-items-center justify-content-center m-0">
                Hi, I'm
              </p>
              <h1
                className="flex align-items-center justify-content-center font-bold m-0"
                style={{ color: "#0098e5" }}
              >
                Gokul Ganesh I
              </h1>
            </div>
            <p className="text-white mt-2">
              Software Engineer at Microchip Technology
            </p>
            <p className="font-light mt-2 mb-5 text-white">
              Highly motivated and results-driven professional with strong
              problem-solving skills.
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
                  style={{ background: "#0098e5" }}
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
                  style={{ color: "#0098e5" }}
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
