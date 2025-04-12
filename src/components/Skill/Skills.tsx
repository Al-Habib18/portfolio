/** @format */

import React from "react";
import { skillsData } from "../../Data/data";
import SkillCard from "./SkillCard";
/* import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi"; */

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-gradient-to-r from-[#1b1b1b] via-[#0f0f0f] to-[#212222] text-white py-20 px-4 md:px-12"
        >
            <div className=" mx-auto">
                <h2 className="text-3xl font-bold mb-6">My Skills</h2>
                <div className="grid grid-cols-2 mx-2 my-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="flex items-center">
                            <SkillCard skill={skill} />
                        </div>
                    ))}
                </div>
            </div>
            {/*             <div className="">
                <FaJsSquare className="text-4xl md:text-6xl text-yellow-400 " />
            </div>
            <div>
                <BiLogoTypescript className="text-4xl md:text-6xl text-yellow-400 " />
            </div> */}
        </section>
    );
};

export default Skills;
