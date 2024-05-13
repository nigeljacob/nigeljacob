/* eslint-disable no-unused-vars */
import React from 'react'
import { JourneyData } from './Journey';
import AnimateOnView from '../../Components/AnimateOnView';

const Journey = () => {
  return (
    <div className="w-screen h-fit bg-black flex flex-col justify-center">
      <div className="title m-auto">
        <h1 className="poppins-extrabold text-[70px] text-[lightcoral] textSize">
          MY JOURNEY SO FAR
        </h1>
        <h3 className="text-[20px] mt-[5px]">
          A Summary of My Journey till Today
        </h3>
      </div>

      <div className="flex items-top overflow-y-scroll journeyWidth m-auto mt-[20px] fadeIn">
        {JourneyData.map((item, index) => {
          return (
            <div key={index} className="mr-[30px] max-w-[200px] flex-shrink-0">
              <AnimateOnView>
                <div>
                  <div className="w-full max-w-[200px] relative">
                    <h1 className="text-[30px]">
                      <b>{item.year}</b>
                    </h1>
                    <div className="min-h-[3px] top-5 right-0 w-[100px] absolute linearWhite"></div>
                  </div>
                  <p className="text-[#A7A7A7]">{item.description}</p>
                </div>
              </AnimateOnView>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Journey
