import React from 'react';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
