import WhatsAppButton from './components/WhatsAppButton';
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';


import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Analytics />
      <SpeedInsights />
      <Contact />
      <WhatsAppButton />
      
    </div>
  );
}

export default App;