import React from 'react'
import './index.js';
import Home from './Components/Home';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Level1 from './Components/Level1.js';
import Level2 from './Components/Level2.js';
import Level3 from './Components/Level3.js';
import Level4 from './Components/Level4.js';
import Level5 from './Components/Level5.js';
import Level6 from './Components/Level6.js';
import Level8 from './Components/Level8.js';
import Level9 from './Components/Level9.js';
import Level10 from './Components/Level10.js';
import Level7 from './Components/Level7.js';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/level1" element={<Level1/>}/>
        <Route path="/level2" element={<Level2/>}/>
        <Route path="/level3" element={<Level3/>}/>
        <Route path="/level4" element={<Level4/>}/>
        <Route path="/level5" element={<Level5/>}/>
        <Route path="/level6" element={<Level6/>}/>
        <Route path="/level7" element={<Level7/>}/>
        <Route path="/level8" element={<Level8/>}/>
        <Route path="/level9" element={<Level9/>}/>
        <Route path="/level10" element={<Level10/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
