import React from "react";

function SocialMedia() {
  const socialLinks = [
    {
      code: "github",
      link: "https://github.com/igokulganesh/",
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      code: "linkedin",
      link: "https://www.linkedin.com/in/igokulganesh/",
      image: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      code: "leetcode",
      link: "https://leetcode.com/igokulganesh/",
      image: "https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png",
    },
    {
      code: "hackerrank",
      link: "https://www.hackerrank.com/igokulganesh",
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png",
    },
    {
      code: "mail",
      link: "mailto:igokulganesh@gmail.com",
      image: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
    },
    {
      code: "youtube",
      link: "https://www.youtube.com/@igokulganesh",
      image: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    },
    {
      code: "twitter",
      link: "https://twitter.com/IGokulGanesh",
      image: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
    },
    {
      code: "instagram",
      link: "https://www.instagram.com/igokulganesh/",
      image: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
    },
    {
      code: "facebook",
      link: "https://www.facebook.com/GokulGaneshI/",
      image: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
    },
  ];

  return (
    <div className="flex m-2">
      {socialLinks.map((item) => {
        return (
          <a href={item.link} className="m-2" alt={`Gokul's ${item.code}`} key={item.code} target="_blank" rel="noreferrer">
            <img align="left" alt={item?.alt} width="30px" src={item.image} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialMedia;
