/** @format */

import React from "react";
import Image from "next/image";

type Props = {
    skill: { image: string; title: string };
};

const SkillCard = ({ skill: { image, title } }: Props) => {
    return (
        <div
            key={title}
            className="flex flex-col items-center justify-center  bg-gradient-to-r from-gray-800 to-gray-900  backdrop-blur-sm p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        >
            <Image src={image} alt={title} width={40} height={40} />
            <p className="mt-2 font-medium">{title}</p>
        </div>
    );
};

export default SkillCard;
