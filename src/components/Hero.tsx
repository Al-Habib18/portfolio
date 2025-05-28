/** @format */

import Image from "next/image";
import React from "react";
import { BaseInfo } from "@/Data/data";

const Hero = () => {
    return (
        <section
            id="home"
            className="bg-gradient-to-r from-[#0f0f0f] via-[#110a14] to-[#061113] text-white py-20 px-6 md:px-12"
        >
            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="font-extrabold leading-tight text-[clamp(2.2rem,5vw,3.5rem)] text-white">
                        Hi, I&apos;m{" "}
                        <span className="text-pink-500">Al Habib</span>
                        <br />
                        Full Stack Web Developer
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
                        Crafting high-performance, scalable, and delightful web
                        experiences with modern technologies. Passionate about
                        clean code, elegant design, and impactful solutions.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-5">
                        {/* Download Resume Button */}
                        <a
                            href="/resume.pdf"
                            download="Al_Habib_Resume.pdf"
                            aria-label="Download Resume"
                            className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-pink-700 px-7 py-3 text-sm md:text-base font-semibold text-white shadow-lg transition duration-300 hover:from-pink-600 hover:to-pink-800"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                📄 Download Resume
                            </span>
                            <span className="absolute inset-0 w-full h-full bg-pink-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></span>
                        </a>

                        {/* Hire Me Button */}
                        <a
                            href="#contact"
                            aria-label="Hire Me"
                            className="group relative inline-flex items-center justify-center rounded-xl border border-pink-600 px-7 py-3 text-sm md:text-base font-semibold text-pink-600 transition duration-300 hover:bg-pink-600 hover:text-white shadow-lg"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                💼 Hire Me
                            </span>
                            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></span>
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="w-full max-w-xs md:max-w-sm mx-auto md:mx-0 mb-6 md:mb-0">
                    <Image
                        src={BaseInfo.profilePic}
                        alt={`${BaseInfo.name} Profile Picture`}
                        width={300}
                        height={300}
                        className="rounded-xl border border-pink-400 shadow-xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
