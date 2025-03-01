/* eslint-disable no-unused-vars */
import Particles from '@tsparticles/react';
import React, { useEffect, useRef } from 'react'
import Introduction from "../Sections/Introduction/Introduction";
import Description from "../Sections/Description/Description";
import Skills from "../Sections/Skills/Skills";
import ResumeSection from "../Sections/Resume/Resume.jsx";
import Projects from "../Sections/Projects/Projects.jsx";
import Certifications from '../Sections/Certifications/Certifications.jsx';
import Journey from '../Sections/My Journey/Journey.jsx';
import Reference from '../Sections/References/Reference.jsx';
import GetInTouch from '../Sections/Get In Touch/GetInTouch.jsx';

const Home = () => {

  const lastDiv = useRef(null);

  useEffect(() => {
    if (window.location.search === "?contact-me") {
      lastDiv.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  
  return (
    <div>
      <div className="poppins-bold">
        <Introduction />
      </div>

      {/* extra div for scroll spacing */}
      <div className="w-screen h-[400px]"></div>
      <div className="w-screen h-[400px]"></div>
      <div className="w-screen h-[400px]"></div>
      <div className="w-screen h-[400px]"></div>
      <div className="w-screen h-[400px]"></div>

      <Description />

      <div className="w-screen h-[250px] bg-black"></div>
      <div className="w-screen h-[400px] bg-black"></div>
      <div className="w-screen h-[400px] bg-black"></div>
      <div className="w-screen h-[400px] bg-black"></div>
      <div className="w-screen h-[400px] bg-black"></div>


      <Skills />

      <div className="w-screen h-[200px] bg-black"></div>

      <ResumeSection />

      <div className="w-screen h-[200px] bg-black"></div>

      <Projects />

      <div className="w-screen h-[150px] bg-black"></div>

      <Certifications />

      <div className="w-screen h-[150px] bg-black"></div>

      <Journey />

      <div className="w-screen h-[150px] bg-black"></div>

      <Reference />

      <div ref={lastDiv} className="w-screen h-[150px] bg-black"></div>

      <GetInTouch />

      <div className="w-screen h-[300px] bg-black"></div>

      <div className="w-screen h-[100px] bg-[#000000] flex items-center justify-center ">
        <p>&copy; 2024 Nigel Jacob</p>
      </div>
    </div>
  );
}

export default Home
