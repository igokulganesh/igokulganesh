import React from 'react';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ background: "#f5f9fa" }}>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
