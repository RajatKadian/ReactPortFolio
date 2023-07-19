import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header'

//App Components
import About from './components/About';
import Work from './components/work';
import Contact from './components/contact';
import Projects from './components/projects';




function App() {
  return (
    <div className="App">
      <Header />  
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    

    </div>
  );
}

export default App;
