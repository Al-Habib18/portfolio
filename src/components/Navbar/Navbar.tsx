/** @format */
"use client";

import { navLinks } from "@/constant/constant";
// import { useState } from "react";

import Link from "next/link";
import React from "react";
import Hamburger from "./Hamburger";

const Navbar = () => {
    // const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="bg-black text-white min-w-screen">
            <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur border-b border-gray-700 flex items-center justify-between px-6 md:px-16 py-4">
                <div className="text-xl font-bold rounded-full bg-white text-red-500 p-2">
                    AH
                </div>
                <div className=" hidden md:flex items-center  space-x-2">
                    {navLinks.map((link) => (
                        <Link key={link.id} href={link.url}>
                            <p className="hover:bg-gray-700 px-4 py-1 rounded-sm">
                                {link.title}
                            </p>
                        </Link>
                    ))}
                </div>
                <Hamburger />
            </nav>
        </div>
    );
};

export default Navbar;
