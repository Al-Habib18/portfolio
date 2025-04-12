/** @format */

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    id: number;
    image: string;
    url: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
}

export default function ProjectCard({
    image,
    title,
    description,
    tech,
    github,
    live,
}: ProjectCardProps) {
    return (
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <div className="relative w-full h-48">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>

            <div className="p-5">
                <h3 className="text-white text-lg font-semibold mb-2">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="bg-[#1e293b] text-white text-xs px-2 py-1 rounded"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between text-sm font-medium text-blue-400">
                    <Link
                        href={github}
                        target="_blank"
                        className="hover:underline"
                    >
                        GitHub
                    </Link>
                    <Link
                        href={live}
                        target="_blank"
                        className="hover:underline"
                    >
                        Live Demo
                    </Link>
                </div>
            </div>
        </div>
    );
}
