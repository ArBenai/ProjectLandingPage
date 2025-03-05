import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Contacts from './components/Contacts';
import Projects from './components/Projects';


const App = () => {
  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} /> 
        </Routes>
      </div>
    </Router>
  );
};


export default App;
