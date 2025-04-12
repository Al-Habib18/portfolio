/** @format */
"use client";
// import { useState } from "react";

export default function Portfolio() {
    // const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="bg-black text-white min-h-screen font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-700 py-4 px-6 md:px-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-white w-6 h-1 rounded-full" />
                    <div className="bg-white w-4 h-1 rounded-full" />
                    <span className="text-lg font-bold tracking-wide">
                        STACK LEARNER{" "}
                        <span className="text-xs bg-gray-600 px-2 py-0.5 rounded ml-1">
                            BETA
                        </span>
                    </span>
                </div>
                <ul className="hidden lg:flex gap-6 text-sm">
                    <li>
                        <a href="#about" className="hover:text-gray-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-gray-300">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-gray-300">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="hidden lg:flex gap-4">
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded">
                        Register
                    </button>
                    <button className="bg-white text-black px-4 py-1 rounded">
                        Login
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="pt-24 bg-gradient-to-r from-[#0f0f0f] via-[#1a0f1f] to-[#061e22] text-white py-20 px-6 md:px-16"
            >
                <div className="max-w-7xl mx-auto flex flex-col gap-10">
                    <div className="bg-gray-800 w-fit px-4 py-1 rounded-full text-sm text-gray-300">
                        ✨ Welcome to Stack Learner
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Empower Your <br /> Passion, <br /> Redefine Your Limits
                    </h1>
                    <p className="text-lg text-gray-400 max-w-xl">
                        Join a dynamic learning ecosystem that fosters boldness,
                        charm, joy, and a deep craving for knowledge. Transform
                        your learning journey today.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <button className="bg-white text-black font-medium py-2 px-5 rounded-md flex items-center gap-2 hover:bg-gray-200">
                            Upcoming Workshops →
                        </button>
                        <button className="bg-black border border-white text-white font-medium py-2 px-5 rounded-md hover:bg-gray-900">
                            Browse Library
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="px-6 md:px-16 py-20 bg-black text-white"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>
                    <p className="text-gray-300 mb-4">
                        Hi, I’m Rafi — a passionate Software Developer with a
                        strong focus on frontend development. My journey began
                        with curiosity, transformed into passion, and continues
                        as a career fueled by creativity and impact.
                    </p>
                    <p className="text-gray-400 mb-4">
                        I specialize in building modern, scalable web
                        applications using React.js, Next.js, Tailwind CSS, and
                        TypeScript. I also enjoy working with backend
                        technologies like Node.js and Express. I value clean,
                        maintainable code and meaningful user experiences.
                    </p>
                    <p className="text-gray-500">
                        Outside of code, I’m into tech blogging, sketching, and
                        solving brain teasers. Currently, I’m seeking
                        opportunities to grow, contribute, and collaborate on
                        impactful tech projects.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className="px-6 md:px-16 py-20 bg-gray-950 text-white"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">
                                Portfolio Website
                            </h3>
                            <p className="text-gray-400">
                                A personal portfolio built using Next.js,
                                showcasing my projects, skills, and contact
                                details. Fully responsive and accessible.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">
                                Task Manager App
                            </h3>
                            <p className="text-gray-400">
                                Full-stack MERN app that allows users to manage
                                tasks, set deadlines, and track productivity
                                with authentication support.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">
                                Blog Platform
                            </h3>
                            <p className="text-gray-400">
                                A simple blogging platform using React and
                                Firebase where users can read, write, and
                                comment on blogs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section
                id="skills"
                className="px-6 md:px-16 py-20 bg-black text-white"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Skills</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript</li>
                        <li>React.js / Next.js</li>
                        <li>Node.js / Express.js</li>
                        <li>MongoDB / Firebase</li>
                        <li>Tailwind CSS / SCSS</li>
                        <li>REST APIs / Axios</li>
                        <li>Git & GitHub</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="px-6 md:px-16 py-20 bg-gray-950 text-white"
            >
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-gray-400 mb-6">
                        Feel free to reach out for collaborations, freelance
                        opportunities, or just a friendly chat.
                    </p>
                    <form className="flex flex-col gap-4">
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
                        <button className="bg-white text-black py-3 px-6 rounded-md font-semibold hover:bg-gray-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-center py-6 text-gray-500 text-sm">
                &copy; 2025 Rafi | Built with ❤️ using Next.js & Tailwind CSS
            </footer>
        </div>
    );
}
