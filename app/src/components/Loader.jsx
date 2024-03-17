import React from "react";
import "../assets/css/loading.css";

export const Loader = () => {
  return (
    <div className="content">
      <div className="loading">
        <p>loading</p>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;

/* 

 useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        handleImageLoad();
      } else {
        image.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

*/
