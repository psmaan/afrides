import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar.js'
import Landing from './components/Landing.js'
import Icons from './components/Icons.js'
import About from './components/About.js'
import FAQ from './components/FAQ.js'
import Venue from './components/Venue.js';

function App() {
  return (
    <>
      <Icons></Icons>
      <Navbar></Navbar>
      <Landing></Landing>
      <About></About>
      <FAQ></FAQ>
      <Venue></Venue>
    </>
  );
}

export default App;
