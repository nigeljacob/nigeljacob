/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";
import { SkillsData } from "./SkillsData";
import SkillComponent from "../../Components/SkillComponent";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="h-fit w-screen bg-black flex flex-col justify-center">
      <div className="m-auto title">
        <h1 className="poppins-extrabold text-[lightcoral] textSize">
          WHAT AM I GOOD AT ?
        </h1>
        <h3 className="mt-[10px] ml-[10px]">
          As a full stack developer, I've gained experience working with a
          variety of technologies, continuously learning and updating my skills
          to meet project demands.
        </h3>

        <div>
          {SkillsData.map((skill, index) => {

            return (
              <div className="mt-[30px] ml-[10px]" key={index}>
                <h2 className="text-[25px] font-mono text-[#e676e6] font-bold">
                  {skill.skillCategpry}
                </h2>
                {skill.skillSet.map((sets, index) => {
                  return (
                    <div
                      id="element"
                      className="mt-[20px] font-mono text-[20px] fadeIn"
                      key={index}
                    >
                      {sets.setName != "" && sets.setName}

                      <div className="gridLayout mb-[40px]">
                        {sets.Skills.map((skill, index) => {
                          return (
                            <SkillComponent
                              icon={skill.Icon}
                              name={skill.SkillName}
                              key={index}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
