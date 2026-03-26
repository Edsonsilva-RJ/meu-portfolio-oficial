import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';


import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <WhatsAppButton />
      <SpeedInsights />
    </div>
  );
}

export default App;