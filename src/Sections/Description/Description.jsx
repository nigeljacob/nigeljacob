import React, { useEffect, useState, useRef } from "react";
import "./Description.css";

const Description = () => {

return (
    <div className="h-screen w-screen bg-black z-[1000]">
        <div className="w-full h-full flex flex-col justify-center items-center scroll-reveal">
            <p id="aboutMeDesc">
                <span id="p1">As a software Engineering Student! </span>
                <span id="p2">with a passion for building excellent software, </span>
                <span id="p3">I'm eager to contribute meaningfully to projects </span>
                <span id="p4">Learn more from expereinced Professionals </span>
                <span id="p5">And drive innovations in the software Industry </span>
            </p>
        </div>
    </div>
);
};

export default Description;
