/** @format */

import React from "react";

export default function ContactForm() {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6 ">
                Get in touch with me
            </h1>{" "}
            <p>
                Let &apos;s connect! Whether you are looking to collaborate,
                need a developer for your next big idea, or just want to say
                hello — feel free to reach out. I &apos;m always open to
                meaningful conversations and exciting opportunities.
            </p>
            <form className="flex flex-col gap-4 pt-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-800 p-3 rounded-md text-white placeholder-gray-400"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-800 p-3 rounded-md text-white placeholder-gray-400"
                />
                <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="bg-gray-800 p-3 rounded-md text-white placeholder-gray-400"
                ></textarea>
                <button className="bg-blue-400 hover:bg-blue-600 duration-300 text-black py-3 px-6 rounded-md font-semibold ">
                    Send Message
                </button>
            </form>
        </div>
    );
}
