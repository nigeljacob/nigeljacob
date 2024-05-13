/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ProjectsData } from "./ProjectsData";
import "./Projects.css";
import { Link } from "react-router-dom";
import AnimateOnView from "../../Components/AnimateOnView";

const Projects = () => {

  return (
    <div className="w-screen h-fit bg-black flex flex-col justify-center">
      <div className="title m-auto">
        <h1 className="poppins-extrabold text-[70px] text-[lightcoral] textSize">
          PROJECTS WORKED ON
        </h1>
        <h3 className="text-[20px] mt-[5px]">
          As a software developer, I have worked on a variety of projects,
          utilizing different technologies and frameworks.
        </h3>
      </div>

      <div className="title m-auto projectsGridLayout mt-[30px] max-w-[80%] fadeIn">
        {ProjectsData.map((item, index) => {
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
            <AnimateOnView>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="min-w-[250px] rounded-[20px] h-[150px] flex flex-col justify-center items-center parent bg-[#232323]"
              >
                <div className={className}>
                  <div className="w-[60px] h-[60px] rounded-[10px] z-10">
                    <img
                      src={item.image}
                      className="w-[60px] h-[60px] rounded-[10px] z-10"
                    />
                  </div>
                  <h4 className="poppins-bold mt-[10px] text-[15px] z-10">
                    {item.title}
                  </h4>
                </div>

                {isHovering && (
                  <Link
                    to={"/" + item.premalink}
                    state={{ Project: item }}
                    className="text-[lightcoral] py-[5px] px-[10px] rounded-[10px] mt-[10px] absolute bottom-0 mb-[10px] z-20 font-bold drop-up"
                  >
                    <button>View Project</button>
                  </Link>
                )}
              </div>
            </AnimateOnView>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
