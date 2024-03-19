import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      setLoading(false);
    });

    window.addEventListener("load", () => {
      setLoading(false);
    });

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setLoading(true);
  }, []);

  const components = (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );

  return (
    <div className="w-full overflow-hidden">
      {loading ? <Loader /> : components}
    </div>
  );
}

export default App;
