import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonInfo from "./components/personInfo/PersonInfo";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Language from "./components/language/Language";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import React, { useState } from "react";

import "../src/App.css";

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={isActive ? "App-lightTheme" : "App"}>
      <Header />

      <NavBar isActive={isActive} setIsActive={setIsActive} />
      <PersonInfo />
      <Skills />
      <Experience />
      <Education />
      <Language />
      <Projects />
      <Contact />
      <Router>
        <Routes>
          <Route exact path="/"></Route>
          <Route path="/PersonInfo" element={<PersonInfo />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Experience" element={<Experience />}></Route>
          <Route path="/Education" element={<Education />}></Route>
          <Route path="/Language" element={<Language />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
