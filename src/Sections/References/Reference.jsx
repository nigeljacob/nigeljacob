/* eslint-disable no-unused-vars */
import React from 'react'
import { ReferencesData } from './ReferencesData';

const Reference = () => {
  return (
    <div className="w-screen h-fit bg-black flex flex-col justify-center ">
      <div className="title m-auto">
        <h1 className="poppins-extrabold text-[70px] text-[lightcoral] textSize">
          REFERENCES
        </h1>
        <h3 className="text-[20px] mt-[5px]">
          These are few of the people who recommend me
        </h3>
      </div>

      <div className="flex items-center referencewidth m-auto fadeIn">
        {ReferencesData.map((reference, index) => {
          return (
            <div
              className="flex-1 bg-[#171717] rounded-[10px] m-[20px] p-[20px] w-full"
              key={index}
            >
              <h1 className="text-[20px] mb-[5px]">
                <b>{reference.Name}</b>
              </h1>
              <hr></hr>
              <p className="text-[#D7D7D7] text-[15px] mt-[5px]">
                {reference.Post}
              </p>
              <p className="text-[#D7D7D7] text-[15px] mt-[5px]">
                {reference.Company}
              </p>
              <p className="text-[#D7D7D7] text-[15px] mt-[5px]">
                {reference.Phone}
              </p>
              <p className="text-[#D7D7D7] text-[15px] mt-[5px]">
                {reference.Email}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reference
