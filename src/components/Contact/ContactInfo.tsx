/** @format */

import React from "react";
// import { socialMedia } from "@/Data/data";
/* import Image from "next/image"; */
import { BaseInfo } from "@/Data/data";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ContactInfo() {
    return (
        <div className="mx-2">
            <div className="text-2xl md:text-3xl font-bold mb-4">
                Connect with me
            </div>
            <div className="flex gap-4 my-6 ">
                <a href={BaseInfo.github} target="_blank" rel="noreferrer">
                    <FaGithub className="text-2xl md:text-3xl " />
                </a>
                <a href={BaseInfo.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin className="text-2xl md:text-3xl " />
                </a>
                <a href={BaseInfo.x} target="_blank" rel="noreferrer">
                    <FaSquareXTwitter className="text-2xl md:text-3xl" />
                </a>
                <a href={BaseInfo.facebook} target="_blank" rel="noreferrer">
                    <FaFacebook className="text-2xl md:text-3xl" />
                </a>
            </div>
            <div className="my-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Phone</h2>
                <p className="text-gray-400 font-semibold mb-4">
                    {BaseInfo.phone}
                </p>
            </div>
            <div className="my-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Email</h2>
                <p className="text-gray-400 font-semibold mb-4">
                    {BaseInfo.email}
                </p>
            </div>
            <div className="my-6">
                <h2 className="text-xl md:text-2xl font-bold mb-1">Address</h2>
                <p className="text-gray-400 font-semibold mb-4">
                    {BaseInfo.address}
                </p>
            </div>
        </div>
    );
}
