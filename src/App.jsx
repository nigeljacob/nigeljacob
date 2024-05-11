/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./Pages/Home.jsx";
import View_Project from "./Pages/View_Project.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import video from "./assets/video.mp4"

function App() {
  return (
    <>
      <div className="w-screen h-screen z-[-2000] fixed opacity-[100%] fade_in">
        <video autoPlay muted loop controls={false} className="min-w-full min-h-full w-auto h-auto object-cover">
          <source src={video} />
        </video>
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
