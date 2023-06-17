import React from "react";
import { Images, Links } from "../assets/data";
import "../assets/css/socialMedia.css";

function SocialMedia() {
  const socialLinks = [
    {
      code: "github",
      link: Links.Github,
      image: Images.Github,
    },
    {
      code: "linkedin",
      link: Links.LinkedIn,
      image: Images.LinkedIn,
    },
    {
      code: "leetcode",
      link: Links.LeetCode,
      image: Images.LeetCode,
    },
    {
      code: "hackerrank",
      link: Links.HackerRank,
      image: Images.HackerRank,
    },
    {
      code: "mail",
      link: Links.Gmail,
      image: Images.Gmail,
    },
    {
      code: "youtube",
      link: Links.Youtube,
      image: Images.Youtube,
    },
    {
      code: "twitter",
      link: Links.Twitter,
      image: Images.Twitter,
    },
    {
      code: "instagram",
      link: Links.Instagram,
      image: Images.Instagram,
    },
    {
      code: "facebook",
      link: Links.Facebook,
      image: Images.Facebook,
    },
  ];

  return (
    <div className="flex  flex-wrap gap-2">
      {socialLinks.map((item) => {
        return (
          <a href={item.link} className="flex justify-content-center" alt={`Gokul's ${item.code}`} key={item.code} target="_blank" rel="noreferrer">
            <img align="left" alt={item?.alt} className="logo-img" src={item.image} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialMedia;
