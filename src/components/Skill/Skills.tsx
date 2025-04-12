/** @format */

import React from "react";
import { skillsData } from "../../Data/data";
import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-gradient-to-r from-[#1b1b1b] via-[#0f0f0f] to-[#212222] text-white py-20 px-4 md:px-12"
        >
            <div className=" mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-white">
                    Tech Stack & Tools
                </h2>
                <p className="text-gray-400 mb-6 max-w-2xl">
                    These are the technologies I use to build scalable,
                    performant, and user-centric web applications.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-white">
                    {skillsData.map(({ title, image }) => (
                        <SkillCard key={title} skill={{ title, image }} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
