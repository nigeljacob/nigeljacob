/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SkillProjects = () => {

    const {skillName} = useParams();
    const [skill, setSkill] = useState("");

    useEffect(() => {
        const list = skillName.split("-")
        let tempSkillName = ""
        for(let i = 0; i < list.length; i++){
            tempSkillName += list[i].charAt(0).toUpperCase() + list[i].slice(1) + " "
        }
        setSkill(tempSkillName);
    }, [skillName])

    console.log(skill);

  return (
    <div className='w-screen h-screen bg-[#171717]'>
        {skill != "" && (
            <div>
                
            </div>
        )}
    </div>
  )
}

export default SkillProjects
