/** @format */

import React from "react";
import Image from "next/image";

type Props = {
    skill: { image: string; title: string };
};

const SkillCard = ({ skill: { image, title } }: Props) => {
    return (
        <div className="w-90 h-25 px-6 flex gap-2 lg:gap-4  mx-auto duration-400 transition-all cursor-pointer text-center rounded-lg bg-gray-800 hover:bg-gray-600  items-center justify-center">
            <Image
                src={image}
                alt={title}
                width={40}
                height={40}
                className="object-contain"
            />
            <p className="text-xl mt-4 text-white font-semibold">{title}</p>
        </div>
    );
};

export default SkillCard;
