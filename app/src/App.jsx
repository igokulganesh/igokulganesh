import React from 'react';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
