/** @format */

import React from "react";

const About = () => {
    return (
        <section id="about" className="px-6 md:px-16 py-20 bg-black text-white">
            <div className="ml-12 md:ml-16 lg:ml-20">
                <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                <p className="text-gray-300 mb-4">
                    I&apos;m <strong>Al Habib</strong>, a passionate Full Stack
                    Developer with a strong focus on frontend excellence and a
                    love for backend architecture. My journey started with
                    curiosity and turned into a purpose-driven career committed
                    to building impactful digital products.
                </p>
                <p className="text-gray-400 mb-4">
                    I specialize in technologies like{" "}
                    <strong>React.js, Next.js, Tailwind CSS, TypeScript</strong>{" "}
                    for the frontend, and{" "}
                    <strong>Node.js, Express, PostgreSQL</strong> for the
                    backend. I care deeply about performance, maintainability,
                    and user experience.
                </p>
                <p className="text-gray-500">
                    Outside of coding, I enjoy blogging, sketching, and solving
                    logic puzzles. I’m currently looking for exciting
                    opportunities where I can learn, contribute, and grow
                    alongside a talented team.
                </p>
            </div>
        </section>
    );
};

export default About;
