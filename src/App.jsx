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
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create blobs with slower movement speeds
    const blobs = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 250 + 150,
      xSpeed: (Math.random() - 0.5) * 0.4,
      ySpeed: (Math.random() - 0.5) * 0.4,
      hue: Math.random() * 360,
      hueShift: Math.random() * 0.2 + 0.05,
      opacity: Math.random() * 0.25 + 0.02,
    }));

    let lastTime = 0;
    // Animation loop with time delta for smooth animation
    const animate = (timestamp) => {
      const deltaTime = timestamp - lastTime || 0;
      lastTime = timestamp;
      
      // Clear canvas with black background
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw blobs
      blobs.forEach(blob => {
        // Move blob with time-based movement
        // Reduced movement speed by using a smaller multiplier (0.05 instead of 0.1)
        blob.x += blob.xSpeed * (deltaTime * 0.5);
        blob.y += blob.ySpeed * (deltaTime * 0.5);

        // Shift hue over time for color cycling (slowed down)
        blob.hue = (blob.hue + blob.hueShift * (deltaTime * 0.005)) % 360;
        
        // Bounce off edges with slight randomization
        if (blob.x < -blob.radius || blob.x > canvas.width + blob.radius) {
          blob.xSpeed *= -1;
          // Add slight variation to speed after bounce
          blob.xSpeed *= 0.95 + Math.random() * 0.1;
        }
        if (blob.y < -blob.radius || blob.y > canvas.height + blob.radius) {
          blob.ySpeed *= -1;
          // Add slight variation to speed after bounce
          blob.ySpeed *= 0.95 + Math.random() * 0.1;
        }

        // Ensure blobs don't slow down too much (reduced minimum speed)
        const minSpeed = 0.05;
        if (Math.abs(blob.xSpeed) < minSpeed) {
          blob.xSpeed = minSpeed * Math.sign(blob.xSpeed);
        }
        if (Math.abs(blob.ySpeed) < minSpeed) {
          blob.ySpeed = minSpeed * Math.sign(blob.ySpeed);
        }

        // Draw blob with gradient
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        
        // Create more vibrant gradients
        gradient.addColorStop(0, `hsla(${blob.hue}, 100%, 70%, ${blob.opacity})`);
        gradient.addColorStop(0.6, `hsla(${(blob.hue + 30) % 360}, 100%, 60%, ${blob.opacity * 0.6})`);
        gradient.addColorStop(1, `hsla(${(blob.hue + 60) % 360}, 100%, 50%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

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
      <div className="fixed top-0 left-0 w-full h-full z-[-1000]">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full -z-20"
        />
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

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:fileName" element={<View_Project />} />
            <Route path="/404" element={<Error />} />
            <Route path="/Skills/:skillName" element={<SkillProjects />} />
          </Routes>
        </div>
        <div ref={lastDiv}></div>
      </BrowserRouter>
    </>
  );
}

export default App;
