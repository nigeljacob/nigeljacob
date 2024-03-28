import React from "react";
import "../Sections/Resume/Resume.css";
import { IoMdArrowDropright } from "react-icons/io";

const ResumeComponent = (props) => {
  var borderCustom = null;

  switch (props.title) {
    case "Summary":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[90%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "Education":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[90%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "Projects":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[90%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "Certifications":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[90%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "Achievements & Compertitions":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[90%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "References":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[90%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "Links":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[90%] mt-[30px] min-h-[250px] text-black relative";
      break;
    default:
      break;
  }

  if (props.type === "summary") {
    return (
      <div className="w-full h-full flex flex-col justify-center items-end resumeComponent_right">
        <div className={borderCustom}>
          <h2 className="text-[25px]">{props.title.toUpperCase()}</h2>
          <IoMdArrowDropright className="h-8 w-8 ml-[-40px] rotate-180 absolute left-0 text-[#A7A7A7]" />
          <div className="mt-[15px]">
            {props.content.map((data, index) => {
              return (
                <div>
                  <p className="mt-[5px] text-[19px]">
                    <span className="font-bold">{data.split(":")[0]}</span> :
                    <span>{data.split(":")[1]}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full flex flex-col justify-center items-end resumeComponent_right">
        <div className={borderCustom}>
          <h2 className="resumeTitle">
            {props.title.toUpperCase()}
          </h2>
          <IoMdArrowDropright className="h-8 w-8 ml-[-40px] rotate-180 absolute left-0 text-[#A7A7A7]" />

          <div className="mt-[15px]">
            {props.content.map((data, index) => {
              return (
                <div className="mt-[10px]">
                  <p className="mt-[5px] text-[23px] text-[#000040]">
                    {data.link === "" ? (
                      <span className="font-bold">{data.title}</span>
                    ) : (
                      <a href={data.link}>
                        <span className="font-bold">{data.title}</span>
                      </a>
                    )}
                  </p>
                  <p className="text-[#888888] text-[13px]">{data.timeline}</p>
                  {props.title === "References" ? (
                    <pre className="font-sans">{data.description}</pre>
                  ) : (
                    <p>{data.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default ResumeComponent;
