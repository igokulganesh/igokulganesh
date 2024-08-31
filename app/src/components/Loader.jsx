import React from "react";
import "../assets/css/loading.css";

export const Loader = () => {
  return (
    <div className="content">
      <div className="loading">
        <p>Loading...</p>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
