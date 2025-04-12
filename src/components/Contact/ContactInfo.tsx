/** @format */

"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BaseInfo } from "@/Data/data";

export default function ContactInfo() {
    return (
        <section className=" text-white ">
            <div className=" py-20  bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]max-w-4xl mx-auto text-center px-6 md:px-8 rounded-2xl shadow-xl overflow-hidden">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Let’s Connect
                </h2>
                <p className="text-gray-300 mb-8 text-lg md:text-xl leading-relaxed">
                    I am always open to collaborations, exciting projects, or
                    even a simple chat. Feel free to drop me a message!
                </p>
                <div className="flex justify-center gap-8 mb-12">
                    <a href={BaseInfo.github} target="_blank" rel="noreferrer">
                        <FaGithub className="text-3xl hover:text-blue-500 transition-colors duration-300" />
                    </a>
                    <a
                        href={BaseInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin className="text-3xl hover:text-blue-500 transition-colors duration-300" />
                    </a>
                    <a href={BaseInfo.x} target="_blank" rel="noreferrer">
                        <FaSquareXTwitter className="text-3xl hover:text-blue-500 transition-colors duration-300" />
                    </a>
                    <a
                        href={BaseInfo.facebook}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebook className="text-3xl hover:text-blue-500 transition-colors duration-300" />
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Phone
                        </h3>
                        <p className="text-gray-400 text-lg">
                            {BaseInfo.phone}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Email
                        </h3>
                        <p className="text-gray-400 text-lg">
                            {BaseInfo.email}
                        </p>
                    </div>
                    {/*                     <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Address
                        </h3>
                        <p className="text-gray-400 text-lg">
                            {BaseInfo.address}
                        </p>
                    </div> */}
                </div>
            </div>
            <div className="mt-16 text-center">
                <h1 className="text-x l md:text-2xl font-semibold font-serif text-gray-300">
                    Great software is built through clean code, clear
                    communication, and constant curiosity
                </h1>
            </div>
        </section>
    );
}
