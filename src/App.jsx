/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./Pages/Home.jsx";
import View_Project from "./Pages/View_Project.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import Particles from "@tsparticles/react";

function App() {
  return (
    <>
      <div className="w-screen h-screen z-[-2000] absolute opacity-[50%] fade_in">
        <Particles />
      </div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:fileName" element={<View_Project />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
