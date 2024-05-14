/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./Pages/Home.jsx";
import View_Project from "./Pages/View_Project.jsx";
import { FaDownload, FaPhone } from "react-icons/fa";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import video from "./assets/video.mp4";
import { motion } from "framer-motion";
import resume from "./assets/CV.pdf";
import Error from "./Pages/404.jsx";
import { useLocation } from "react-router-dom";
import SkillProjects from "./Pages/SkillProjects.jsx";

function App() {
  const lastDiv = useRef(null);

  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", resume, true);
    xhr.responseType = "blob";

    xhr.onload = (event) => {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "NigelJacob-CV.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        setDownloadComplete(true);
        setTimeout(() => {
          setDownloadComplete(false);
        }, 2000); // Reset download complete state after 2 seconds
      }
    };

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        setDownloadProgress(percentage.toFixed(2));
      }
    };

    xhr.send();
  };

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
          <button
            className="m-[20px] bg-[#39c4ab] px-[10px] py-[5px] rounded-[5px] text-[#000] float flex items-center"
            onClick={handleDownload}
          >
            <FaDownload />
            {downloadProgress > 0 ? (
              <b>
                <span className="ml-[5px]">{downloadProgress}%</span>
              </b>
            ) : (
              <span className="ml-[5px]">
                <b>{downloadProgress === 100 ? "Downloaded!" : "My Resume"}</b>
              </span>
            )}
          </button>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="fixed bottom-0 right-0"
          onClick={(event) => {
            console.log(window.location.pathname);
            if (
              window.location.pathname === "/" ||
              window.location.pathname === "/?contact-me"
            ) {
              lastDiv.current.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = "/?contact-me";
            }
          }}
        >
          <button className="m-[20px] w-[40px] h-[40px] bg-[#39c4ab] px-[10px] py-[5px] rounded-[50%] text-[#000] float flex items-center justify-center">
            <FaPhone className="rotate-90" />
          </button>
        </motion.div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:fileName" element={<View_Project />} />
          <Route path="/404" element={<Error />} />
          <Route path="/Skills/:skillName" element={<SkillProjects />} />
        </Routes>
        <div ref={lastDiv}></div>
      </BrowserRouter>
    </>
  );
}

export default App;
