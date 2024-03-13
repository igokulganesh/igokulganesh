import React from "react";
import { Images, Links } from "../assets/data";
import { Tooltip } from "primereact/tooltip";
import "../assets/css/socialMedia.css";

function SocialMedia() {
  const socialLinks = [
    {
      code: "Github",
      link: Links.Github,
      image: Images.Github,
    },
    {
      code: "LeetCode",
      link: Links.LeetCode,
      image: Images.LeetCode,
    },
    {
      code: "HackerRank",
      link: Links.HackerRank,
      image: Images.HackerRank,
    },
    {
      code: "WakaTime",
      link: Links.WakaTime,
      image: Images.WakaTime,
    },
    {
      code: "LinkedIn",
      link: Links.LinkedIn,
      image: Images.LinkedIn,
    },
    {
      code: "Gmail",
      link: Links.Gmail,
      image: Images.Gmail,
    },
    // {
    //   code: "Youtube",
    //   link: Links.Youtube,
    //   image: Images.Youtube,
    // },
    // {
    //   code: "Twitter",
    //   link: Links.Twitter,
    //   image: Images.Twitter,
    // },
    // {
    //   code: "Instagram",
    //   link: Links.Instagram,
    //   image: Images.Instagram,
    // },
    // {
    //   code: "Facebook",
    //   link: Links.Facebook,
    //   image: Images.Facebook,
    // },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {socialLinks.map((item) => {
        return (
          <div key={item.code}>
            <Tooltip target={`.tooltip-${item.code}`} />
            <div
              className={`tooltip-${item.code}`}
              data-pr-tooltip={item.code}
              data-pr-position="top"
            >
              <a
                href={item.link}
                className="flex justify-content-center"
                alt={`Gokul's ${item.code}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  align="left"
                  alt={item?.alt}
                  className="logo-img"
                  src={item.image}
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SocialMedia;
