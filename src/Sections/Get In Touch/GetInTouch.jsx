/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Links } from "./Links";
import AnimateOnView from "../../Components/AnimateOnView";

const GetInTouch = () => {

  
  return (
    <div className="w-screen h-fit bg-black flex flex-col justify-center">
      <div className="title m-auto">
        <h1 className="poppins-extrabold text-[70px] text-[lightcoral] textSize">
          GET IN TOUCH
        </h1>
        <h3 className="text-[20px] mt-[5px]">
          Please do get in touch if you have any queries
        </h3>
      </div>
      <div className="flex items-center justify-center mt-[10px]">
        <div className="title m-auto contactGridLayout mt-[30px] max-w-[80%] fadeIn">
          {Links.map((item, index) => {
            return (
              <AnimateOnView key={index}>
                <div
                  className="min-w-[250px] rounded-[20px] h-[100px] flex flex-col justify-center bg-[#140909] p-[20px] text-left"
                >
                  <h3 className="text-left text-[18px]">
                    <b>{item.title}</b>
                  </h3>
                  <p
                    className="text-[#f57070] text-[14px] mt-[5px] cursor-pointer hover:opacity-[60%]"
                    onClick={(event) => {
                      window.open(item.link);
                    }}
                  >
                    ↗️ {item.text}
                  </p>
                </div>
              </AnimateOnView>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
