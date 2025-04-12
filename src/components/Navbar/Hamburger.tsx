/** @format */
"use client";
import React, { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";

import { navLinks } from "@/constant/constant";
import Link from "next/link";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden items-end text-left">
            {/* Hamburger Icon */}
            <button
                onClick={toggleMenu}
                className="text-white text-3xl hover:bg-gray-700 p-1.5 rounded-md duration-300 focus:outline-none"
            >
                {isOpen ? <HiXMark /> : <GiHamburgerMenu />}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul
                    className={`absolute top-16  bg-black rounded-lg shadow-md p-6 w-full h-screen z-auto right-0.5 space-y-4 text-white`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            onClick={toggleMenu}
                        >
                            <p className="font-semibold py-2 px-4 border-b-1 border-gray-800  hover:bg-gray-700 rounded-sm">
                                {link.title}
                            </p>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Hamburger;
