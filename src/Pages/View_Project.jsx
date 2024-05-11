/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const View_Project = (props) => {

  const {filename} = useParams();

  const location = useLocation();
  const state = location.state;

  const [project, setProject] = useState(state["Project"]);

  const [current, setCurrent] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className="w-screen p-[30px] px-[50px] relative bg-[#0b0b0b] min-h-screen">
      <div
        className={
          current === null ? "w-full h-full" : "w-full h-full opacity-[20%]"
        }
      >
        <div className="m-auto ml-[10px] mt-[20px]">
          <h1 className="ml-[5px] mb-[-10px] text-[#00ffff]">
            HOME / {project.title}
          </h1>
          <div className="flex items-center">
            <h1 className="poppins-extrabold text-[70px] text-[lightcoral] textSize flex-1">
              {project.title}
            </h1>
            <img
              src={project.image}
              alt=""
              className="w-[70px] h-[70px] mr-[10px] rounded-[10px]"
            />
          </div>
        </div>

        <div className="ml-[10px] mt-[40px]">
          <h1 className="text-[30px] poppins-extrabold">ABOUT</h1>
          <p className="text-[#A7A7A7] text-[17px]">{project.description}</p>
        </div>

        <div className="ml-[10px] mt-[40px]">
          <h1 className="text-[30px] poppins-extrabold">Tech Used</h1>
          <div className="flex items-center mt-[10px] projectImagesWidth overflow-y-scroll">
            {project.tech.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mr-[10px] px-[10px] py-[5px] bg-[#3de8ff] rounded-[10px]"
                >
                  <p className="text-[#000000] poppins-bold text-[14px]">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {project.images.length > 0 && (
          <div className="ml-[10px] mt-[40px]">
            <h1 className="text-[30px] poppins-extrabold">Images</h1>
            <div className="flex items-center w-full projectImagesWidth overflow-y-scroll mt-[10px]">
              {project.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 mr-[20px]"
                    onClick={(event) => {
                      setCurrent(image);
                    }}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-[200px] rounded-[10px] flex-shrink-0"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="ml-[10px] mt-[40px]">
          <h1 className="text-[30px] poppins-extrabold">Link to Project</h1>
          <button
            className=""
            onClick={(event) => {
              window.open(project.link);
            }}
          >
            ↗️ Open Project
          </button>
        </div>

        {project.video !== "" && (
          <div className="ml-[10px] mt-[40px]">
            <h1 className="text-[30px] poppins-extrabold mb-[10px]">Video</h1>
            <iframe
              width="300px"
              src="https://www.youtube.com/embed/JF-MRp2CAXY"
              title="Synk [ SE -30 ] - Team Clulessjellybeans"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowfullscreen={true}
            ></iframe>
          </div>
        )}
      </div>

      {current !== null && (
        <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
          <div className="flex w-full h-full items-center justify-center relative animateIn">
            <div className="w-[80%] h-[80%] bg-[#000000] rounded-[10px] flex items-center justify-center">
              <img src={current} className="max-h-full" alt="" />
            </div>
            <button
              className="absolute left-0 ml-[50px] bg-[#000000] w-[40px] h-[40px] rounded-[50%]"
              disabled={currentIndex == 0}
              onClick={(event) => {
                setCurrent(project.images[currentIndex - 1]);
                setCurrentIndex(currentIndex - 1);
              }}
            >
              ←
            </button>
            <button
              className="absolute right-0 mr-[50px] bg-[#000000] w-[40px] h-[40px] rounded-[50%]"
              disabled={currentIndex == project.images.length}
              onClick={(event) => {
                setCurrent(project.images[currentIndex + 1]);
                setCurrentIndex(currentIndex + 1);
              }}
            >
              →
            </button>

            <button
              className="absolute right-0 top-0 mt-[30px] mr-[50px] bg-[#000000] w-[40px] h-[40px] rounded-[50%] hover:bg-[red]"
              onClick={(event) => {
                setCurrent(null);
              }}
            >
              &#10006;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default View_Project
