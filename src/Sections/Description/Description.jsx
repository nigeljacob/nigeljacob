/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./Description.css";

const Description = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // Trigger animation when element is 50% in view
  });

  useEffect(() => {
    const handleScroll = () => {
      console.log("hh");
      const p1 = document.getElementById("p1");
      const p2 = document.getElementById("p2");
      const p3 = document.getElementById("p3");
      const p4 = document.getElementById("p4");
      const p5 = document.getElementById("p5");

      const p1Position = p1.getBoundingClientRect().top;
      const p2Position = p2.getBoundingClientRect().top;
      const p3Position = p3.getBoundingClientRect().top;
      const p4Position = p4.getBoundingClientRect().top;
      const p5Position = p5.getBoundingClientRect().top;

      if (
        p1Position < window.innerHeight * 0.9 &&
        p1Position > window.innerHeight * 0.6
      ) {
        p1.style.opacity = 1;
      } else {
        p1.style.opacity = 0.1;
      }

      if (
        p2Position < window.innerHeight * 0.7 &&
        p2Position > window.innerHeight * 0.4
      ) {
        p2.style.opacity = 1;
      } else {
        p2.style.opacity = 0.1;
      }

      if (
        p3Position < window.innerHeight * 0.5 &&
        p3Position > window.innerHeight * 0.2
      ) {
        p3.style.opacity = 1;
      } else {
        p3.style.opacity = 0.1;
      }

      if (
        p4Position < window.innerHeight * 0.4 &&
        p4Position > window.innerHeight * 0.1
      ) {
        p4.style.opacity = 1;
      } else {
        p4.style.opacity = 0.1;
      }

      if (p5Position < window.innerHeight * 0.3) {
        p5.style.opacity = 1;
      } else {
        p5.style.opacity = 0.1;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-black z-[1000]">
      <div className="w-full h-full flex flex-col justify-center items-center scroll-reveal">
        <p id="aboutMeDesc">
          <span id="p1" ref={ref}>
            As a software Engineering Student!{" "}
          </span>
          <span id="p2" ref={ref}>
            with a passion for building excellent software,{" "}
          </span>
          <span id="p3" ref={ref}>
            I'm eager to contribute meaningfully to projects{" "}
          </span>
          <span id="p4" ref={ref}>
            Learn more from expereinced Professionals{" "}
          </span>
          <span id="p5" ref={ref}>
            And drive innovations in the software Industry{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Description;
