import React, { useRef } from 'react';
import './App.css';

import Navbar from './components/Navbar.js'
import Landing from './components/Landing.js'
import Icons from './components/Icons.js'
import About from './components/About.js'
import Countdown from './components/Countdown.js'
import Tickets from './components/Tickets.js'
import FAQ from './components/FAQ.js'
import Venue from './components/Venue.js';

function App() {
  const ticketsRef = useRef(null);

  const scrollToTickets = () => {
    ticketsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Icons />
      <Navbar />
      <Landing scrollToTickets={scrollToTickets} />
      <About />
      <Countdown />
      <div ref={ticketsRef}>
        <Tickets />
      </div>
      <FAQ />
      <Venue />
    </>
  );
}

export default App;
