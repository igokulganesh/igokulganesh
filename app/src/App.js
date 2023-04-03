import React from 'react';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Hero from './components/Hero';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <NavigationBar /> */}
      <Resume />
      <Contact />
    </>
  );
}

export default App;
