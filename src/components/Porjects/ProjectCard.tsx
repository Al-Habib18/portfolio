/** @format */

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { VscActivateBreakpoints } from "react-icons/vsc";

type Props = {
    id: number;
    image: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
};

const ProjectCard = ({
    image,
    title,
    description,
    tech,
    github,
    live,
}: Props) => {
    return (
        <div className="bg-gray-900 max-w-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
                src={image}
                alt={title}
                width={400}
                height={400}
                className="object-cover w-full h-48 "
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, idx) => (
                        <span
                            key={idx}
                            className="text-xs font-semibold px-2 py-1 bg-gray-700 rounded text-white"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between text-sm font-semibold">
                    <div className="flex gap-1 justify-center items-center">
                        <FaGithub />
                        <a
                            href={github}
                            target="_blank"
                            className="text-blue-400 hover:underline"
                        >
                            GitHub
                        </a>
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                        <VscActivateBreakpoints />
                        <a
                            href={live}
                            target="_blank"
                            className="text-blue-400 hover:underline"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
