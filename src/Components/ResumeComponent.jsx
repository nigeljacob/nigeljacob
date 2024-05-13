import React, { useEffect, useRef } from "react";
import "../Sections/Resume/Resume.css";
import { IoMdArrowDropright } from "react-icons/io";
import { motion, useAnimation, useInView } from "framer-motion";

const ResumeComponent = (props) => {
  const ref = useRef(null);

  const isVisible = useInView(ref, { once: true });

  const mainControlls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      mainControlls.start("visible");
    } else {
      mainControlls.start("hidden");
    }
  }, [isVisible]);

  var borderCustom = null;

  switch (props.title) {
    case "Summary":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[46%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "Education":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[46%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "Projects":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[46%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "Certifications":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[46%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "Achievements & Compertitions":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[46%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "References":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[46%] mt-[30px] min-h-[250px] text-black relative";
      break;
    case "Links":
      borderCustom =
        "component rounded-[10px] p-[20px] bg-white w-[46%] mt-[30px] min-h-[250px] text-black relative";
      break;
    default:
      break;
  }

  if (props.type === "summary") {
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControlls}
        transition={{ duration: 0.3 }}
        // className="w-full h-full p-[5px] flex resumeComponent_left"
        className="w-full h-full p-[5px] flex"
      >
        <div className={borderCustom}>
          <h2 className="text-[25px]">{props.title.toUpperCase()}</h2>

          <IoMdArrowDropright className="h-8 w-8 mr-[-40px] absolute right-0 text-[#A7A7A7]" />

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
      </motion.div>
    );
  } else {
    return props.side === "right" ? (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControlls}
        transition={{ duration: 0.3 }}
        // className="w-full h-full flex flex-col justify-center items-end resumeComponent_right"
        className="w-full h-full flex flex-col justify-center items-end"
      >
        <div className={borderCustom}>
          <h2 className="text-[25px]">{props.title.toUpperCase()}</h2>
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
      </motion.div>
    ) : (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControlls}
        transition={{ duration: 0.3 }}
        // className="w-full h-full flex flex-col justify-center items-start resumeComponent_left"
        className="w-full h-full flex flex-col justify-center items-start "
      >
        <div className={borderCustom}>
          <h2 className="text-[25px]">{props.title.toUpperCase()}</h2>
          <IoMdArrowDropright className="h-8 w-8 mr-[-40px] absolute right-0 text-[#A7A7A7]" />

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
      </motion.div>
    );
  }
};

export default ResumeComponent;
