import React from 'react';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Hero from './components/Hero';
import NavigationBar from "./components/NavigationBar";
import Experience from './components/Experience';

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Experience />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
