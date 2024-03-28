import React, { Component } from "react";
import ResumeComponent from "../../Components/ResumeComponent";
import ResumeComponent_Collapsed from "../../Components/ResumeComponent_Collapsed";
import { ResumeData } from "./Resume";
import "./Resume.css";

class ResumeSection extends Component {

   state = {
    matches: window.matchMedia("(min-width: 768px)").matches
  };

  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 1000px)").addEventListener('change', handler);
  }

  componentWillUnmount() {
    window.matchMedia("(min-width: 1000px)").removeEventListener('change', this.handler);
  }


  render() {
    return (
      <div className="w-screen h-fit bg-black flex flex-col justify-center">
        <div className="title m-auto">
          <h1 className="poppins-extrabold text-[70px] text-[lightcoral]">
            RESUME
          </h1>
          <h3 className="text-[20px] mt-[10px] ml-[5px]">
            An Induviual Passionate about technology and dedicated to hard work.
          </h3>

          {this.state.matches ? (
            <div className="flex flex-col items-center justify-center h-fit relative mt-[30px]">
              <div className="absolute w-[5px] bg-[#A7A7A7] h-[100%] "></div>

              {ResumeData.map((data, index) => {
                return (
                  <ResumeComponent
                    key={index}
                    type={data.type}
                    title={data.title}
                    content={data.content}
                    side={index % 2 === 0 ? "left" : "right"}
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col h-fit relative mt-[30px]">
              <div className="absolute w-[5px] bg-[#A7A7A7] h-[100%]"></div>

              {ResumeData.map((data, index) => {
                return (
                  <ResumeComponent_Collapsed
                    key={index}
                    type={data.type}
                    title={data.title}
                    content={data.content}
                    side="right"
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default ResumeSection;
