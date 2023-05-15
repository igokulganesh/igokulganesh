import React from 'react';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
