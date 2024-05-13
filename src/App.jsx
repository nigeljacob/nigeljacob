/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./Pages/Home.jsx";
import View_Project from "./Pages/View_Project.jsx";
import { FaDownload, FaPhone } from "react-icons/fa";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import video from "./assets/video.mp4"
import {motion} from 'framer-motion'
import resume from "./assets/CV.pdf"

function App() {

  const lastDiv = useRef(null)

  return (
    <>
      <div className="w-screen h-screen z-[-2000] fixed opacity-[100%] fade_in">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="min-w-full min-h-full w-auto h-auto object-cover"
        >
          <source src={video} />
        </video>
      </div>
      <BrowserRouter>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="fixed top-0 right-0"
        >
          <button className="m-[20px] bg-[#39c4ab] px-[10px] py-[5px] rounded-[5px] text-[#000] float flex items-center">
            <FaDownload />
            <a href={resume} download="NigelJacob-CV.pdf" className="ml-[5px]">
              <b>My Resume</b>
            </a>
          </button>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="fixed bottom-0 right-0"
          onClick={(event) => {
            lastDiv.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <button className="m-[20px] w-[40px] h-[40px] bg-[#39c4ab] px-[10px] py-[5px] rounded-[50%] text-[#000] float flex items-center justify-center">
            <FaPhone className="rotate-90" />
          </button>
        </motion.div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:fileName" element={<View_Project />} />
        </Routes>
        <div ref={lastDiv}></div>
      </BrowserRouter>
    </>
  );
}

export default App;
