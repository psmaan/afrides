import logo from './logo.svg';
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
  return (
    <>
      <Icons></Icons>
      <Navbar></Navbar>
      <Landing></Landing>
      <About></About>
      <Countdown></Countdown>
      <Tickets></Tickets>
      <FAQ></FAQ>
      <Venue></Venue>
    </>
  );
}

export default App;
