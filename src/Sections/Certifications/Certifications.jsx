/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Certificates } from './Certificates';
import { Link } from 'react-router-dom';

const Certifications = () => {
  return (
    <div className="w-screen h-fit bg-black flex flex-col justify-center">
      <div className="title m-auto">
        <h1 className="poppins-extrabold text-[70px] text-[lightcoral] textSize">
          LICENSE & CERTIFICATIONS
        </h1>
        <h3 className="text-[20px] mt-[5px]">
          As a student, I have made a lot of commitments to continuous learning
          and professional development through various certifications and
          training programs.
        </h3>
      </div>

      <div className="title m-auto projectsGridLayout mt-[30px] max-w-[80%] fadeIn">
        {Certificates.map((item, index) => {
          const [isHovering, setHovering] = useState(false);

          const handleMouseEnter = () => {
            setHovering(true);
          };

          const handleMouseLeave = () => {
            setHovering(false);
          };

          const className = isHovering
            ? "flex w-full h-full flex-col justify-center items-center animation blur"
            : "flex w-full h-full flex-col justify-center items-center animation";

          return (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="min-w-[250px] rounded-[20px] h-[150px] flex flex-col justify-center items-center parent bg-[#232323]"
              key={index}
            >
              <div className={className}>
                <div className="h-[70px] rounded-[10px] z-10">
                  <img
                    src={item.image}
                    className="h-[70px] rounded-[5px] z-10"
                  />
                </div>
                <h4 className="poppins-bold mt-[10px] text-[15px] z-10">
                  {item.title}
                </h4>
              </div>

              {isHovering && (
                <button
                  className="text-[lightcoral] py-[5px] px-[10px] rounded-[10px] mt-[10px] absolute bottom-0 mb-[10px] z-20 font-bold drop-up"
                  onClick={(event) => {
                    window.open(item.link);
                  }}
                >
                  View Certificate
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Certifications
