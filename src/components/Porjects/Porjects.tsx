/** @format */

import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/Data/data";

function Porjects() {
    return (
        <section
            id="projects"
            className="bg-gradient-to-r from-[#0f0f0f] via-[#110a14] to-[#061113] flex flex-col justify-center items-center text-white py-20 px-4 md:px-12"
        >
            <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    A small selection of my projects
                </h1>
            </div>
            <div className="grid grid-cols-1 mx-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectData.map((proj, i) => (
                    <ProjectCard key={i} {...proj} />
                ))}
            </div>
        </section>
    );
}

export default Porjects;
