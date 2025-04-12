/** @format */

import Image from "next/image";
import React from "react";
import { BaseInfo } from "@/Data/data";

const Hero = () => {
    return (
        <section
            id="home"
            className="bg-gradient-to-r from-[#0f0f0f] via-[#110a14] to-[#061113] text-white py-20 px-4 md:px-12"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-center gap-12">
                <div>
                    <h1 className="text-5xl font-extrabold text-white leading-tight">
                        Hi, I&apos;m{" "}
                        <span className="text-pink-500">Al Habib</span>
                        <br />
                        Full Stack Web Developer
                    </h1>
                    <p className="mt-4 text-lg text-gray-200 max-w-xl">
                        Crafting high-performance, scalable, and delightful web
                        experiences with modern technologies. Passionate about
                        clean code, elegant design, and impactful solutions.
                    </p>
                </div>
                <div className="mx-auto pt-2 hidden lg:block rounded-md border-blue-300 overflow-hidden">
                    <Image
                        src={BaseInfo.profilePic}
                        alt={BaseInfo.name}
                        width={250}
                        height={250}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
