import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./routes/Jobs";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Login from "./routes/Login";
 



function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
