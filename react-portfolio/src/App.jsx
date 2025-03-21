import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <br />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <br />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
