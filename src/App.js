import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar.js'
import Landing from './components/Landing.js'
import Icons from './components/Icons.js'
import About from './components/About.js'

function App() {
  return (
    <>
      <Icons></Icons>
      <Navbar></Navbar>
      <Landing></Landing>
      <About></About>
    </>
  );
}

export default App;
