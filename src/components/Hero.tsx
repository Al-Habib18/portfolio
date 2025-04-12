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
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                <div className="max-w-7xl mx-auto flex flex-col gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Hi, I&apos;m{" "}
                        <span className="text-pink-500">{BaseInfo.name}</span>
                        <br />
                        <span className="text-pink-500">
                            {BaseInfo.position}
                        </span>{" "}
                    </h1>
                    <p className="text-gray-400">{BaseInfo.description}</p>
                </div>
                <div className="mx-auto hidden lg:block rounded-md border-blue-300 overflow-hidden">
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
