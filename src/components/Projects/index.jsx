import Bulb from "../Icons/Bulb";
import React from "../Icons/React";
import ProjectItem from "../ProjectItem";
import SkillPill from "../SkillPill";

export default function Projects () {
    return (
        <section id='projects' className="w-full mx-auto md:w-[750px] lg:w-[1000px] px-6 pb-24 py-32 min-h-dvh">
            <h2
                className="text-2xl font-bold mb-6 flex gap-x-3 items-center text-[#A6B1E1]"
            >
                <Bulb className="size-7" />
                MY PROJECTS
            </h2>
            <ProjectItem
                title='Dev Tools'
                description='Web application where you can discover the finest development resources and tools to accelerate website creation, ensuring a seamless and efficient development experience.'
                img='/dev-tools.png'
                web='https://tools-4-devs.vercel.app'
                github='https://github.com/gabimonutti/dev-tools'
            >
                <SkillPill
                    name='React'
                    color='0C4767'
                >
                    <React className="size-4" />
                </SkillPill>
            </ProjectItem>
        </section>
    );
}