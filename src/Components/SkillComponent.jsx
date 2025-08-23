import React, { useEffect, useRef } from "react";
import * as FAICONS from "react-icons/fa";
import * as SIIcons from "react-icons/si";
import * as RIIcons from "react-icons/ri";
import * as TBIcons from "react-icons/tb";
import * as DIIcons from "react-icons/di";
import * as IOIcons from "react-icons/io5";
import * as GIIcons from "react-icons/gi";
import * as MDIcons from "react-icons/md";
import AnimateOnView from "./AnimateOnView";

const SkillComponent = (props) => {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "FaReact":
        return <FAICONS.FaReact className="icon text-[#61DBFB]" />;
      case "FaHtml5":
        return <FAICONS.FaHtml5 className="icon text-[#e34c26]" />;
      case "FaCss3":
        return <FAICONS.FaCss3 className="icon text-[#264de4]" />;
      case "SiNextdotjs":
        return <SIIcons.SiNextdotjs className="icon text-[#fff]" />;
      case "SiElectron":
        return <SIIcons.SiElectron className="icon text-[#47848f]" />;
      case "FaAngular":
        return <FAICONS.FaAngular className="icon text-[#A6120D]" />;
      case "FaAndroid":
        return <FAICONS.FaAndroid className="icon text-[#3DDC84]" />;
      case "SiFlutter":
        return <SIIcons.SiFlutter className="icon text-[#42A5F5]" />;
      case "RiJavascriptFill":
        return <RIIcons.RiJavascriptFill className="icon text-[#f0db4f]" />;
      case "Node.js":
        return <FAICONS.FaNodeJs className="icon text-[#68A063]" />;
      case "SiTypescript":
        return <SIIcons.SiTypescript className="icon text-[#007acc]" />;
      case "ASP.NET":
        return <SIIcons.SiDotnet className="icon text-[#512BD4]" />;
      case "C#":
        return <SIIcons.SiCsharp className="icon text-[#239120]" />;
      case "Supabase":
        return <SIIcons.SiSupabase className="icon text-[#3ECF8E]" />;
      case "Python":
        return <FAICONS.FaPython className="icon text-[#FFE783]" />;
      case "Java":
        return <FAICONS.FaJava className="icon text-[#007396]" />;
      case "Swift":
        return <FAICONS.FaSwift className="icon text-[#CC342D]" />;
      case "Kotlin":
        return <TBIcons.TbBrandKotlin className="icon text-[#B125EA]" />;
      case "Dart":
        return <DIIcons.DiDart className="icon text-[#42A5F5]" />;
      case "Spring Boot":
        return <SIIcons.SiSpringboot className="icon text-[#43e456]" />;
      case "Express":
        return <SIIcons.SiExpress className="icon text-[#68A063]" />;
      case "Flask":
        return <SIIcons.SiFlask className="icon text-[#ffffff]" />;
      case "Go":
        return <SIIcons.SiGo className="icon text-[#00ADD8]" />;
      case "MongoDB":
        return <DIIcons.DiMongodb className="icon text-[#4DB33D]" />;
      case "MySQL":
        return <DIIcons.DiMysql className="icon text-[#00758F]" />;
      case "Firebase":
        return <SIIcons.SiFirebase className="icon text-[#FFA611]" />;
      case "SQLite":
        return <DIIcons.DiSqllite className="icon text-[#003B57]" />;
      case "Figma":
        return <IOIcons.IoLogoFigma className="icon text-[#AE4DFF]" />;
      case "XD":
        return <SIIcons.SiAdobexd className="icon text-[#BE24AA]" />;
      case "Photoshop":
        return (
          <SIIcons.SiAdobephotoshop className="icon text-[#001e36] bg-[#707894] rounded-[11px] p-[3px]" />
        );
      case "Illustrator":
        return (
          <SIIcons.SiAdobeillustrator className="icon text-[#3c240c] bg-[#f8a829] rounded-[11px] p-[3px]" />
        );
      case "After Effects":
        return (
          <SIIcons.SiAdobeaftereffects className="icon text-[#393665] bg-[#cf9dfd] rounded-[11px] p-[3px]" />
        );
      case "Premiere Pro":
        return (
          <SIIcons.SiAdobepremierepro className="icon text-[#330D3E] bg-[#E298F2] rounded-[11px] p-[3px]" />
        );
      case "TeamWork":
        return (
          <RIIcons.RiTeamFill className="icon text-[#ffffff] bg-[#2a5b84] rounded-[11px] p-[3px]" />
        );
      case "Problem Solving":
        return <GIIcons.GiBrain className="icon text-[#ff4a4a]" />;
      case "Communication":
        return <GIIcons.GiSpeaker className="icon text-[#4affa5]" />;
      case "Time Management":
        return <IOIcons.IoTime className="icon text-[#ffe032]" />;
      case "Adaptability":
        return (
          <RIIcons.RiBrainFill className="icon text-[#330D3E] bg-[#E298F2] rounded-[11px] p-[3px]" />
        );
      case "Creativity":
        return (
          <MDIcons.MdDesignServices className="icon text-[#3af5ff] bg-[#000000] rounded-[11px] p-[3px]" />
        );
      case "PostgreSQL":
        return <SIIcons.SiPostgresql className="icon text-[#336791]" />;
      case "Fast":
        return <SIIcons.SiFastapi className="icon text-[#009688]" />;
      default:
        return null;
    }
  };

  return (
    <AnimateOnView>
      <div className="w-[150px] h-[150px] min-h-[150px] min-w-[150px] bg-[#111111] flex flex-col justify-center items-center gridElement rounded-[10px]">
        {renderIcon(props.icon)}
        <h3 className="mt-[20px] text-[18px] font-sans">{props.name}</h3>
      </div>
    </AnimateOnView>
  );
};

export default SkillComponent;
