import { useState, useEffect, useRef } from "react";
import "./App.css";
import Introduction from "./Sections/Introduction/Introduction";
import Description from "./Sections/Description/Description";
import Skills from "./Sections/Skills/Skills";
import Particles from "./Components/Particles";
import ResumeSection from "./Sections/Resume/Resume.jsx";
import Projects from "./Sections/Projects/Projects";

function App() {
  return (
    <>
      <div className="z-[-2000] absolute opacity-[50%] fade_in">
        <Particles />
      </div>

      <div className="poppins-bold">
        <Introduction />
      </div>

      {/* extra div for scroll spacing */}
      <div className="w-screen h-[400px]"></div>
      <div className="w-screen h-[400px]"></div>
      <div className="w-screen h-[400px]"></div>
      <div className="w-screen h-[400px]"></div>

      <Description />

      <div className="w-screen h-[200px] bg-black"></div>

      <Skills />

      <div className="w-screen h-[200px] bg-black"></div>

      <ResumeSection />

      <div className="w-screen h-[200px] bg-black"></div>

      <Projects />
    </>
  );
}

export default App;
