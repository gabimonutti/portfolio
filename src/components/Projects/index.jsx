import Bulb from "../Icons/Bulb";
import Postgre from "../Icons/Postgre";
import React from "../Icons/React";
import Node from "../Icons/Node";
import Tailwind from "../Icons/Tailwind";
import ProjectItem from "../ProjectItem";
import SkillPill from "../SkillPill";
import Expressjs from "../Icons/Express";

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
                title='FilmStar'
                description="Web application where you can explore, share, and discover films on the platform. Create personalized lists, and dive deep into each movie's details, from cast members to where to watch, and more!"
                img='/filmstar.png'
                web='https://filmstar.vercel.app'
            >
                <SkillPill
                    name='React'
                    color='0C4767'
                >
                    <React className="size-4" />
                </SkillPill>
                <SkillPill
                    name='NodeJs'
                    color='0C4767'
                >
                    <Node className="size-4" />
                </SkillPill>
                <SkillPill
                    name='Express'
                    color='0C4767'
                >
                    <Expressjs className="size-4" />
                </SkillPill>
                <SkillPill
                    name='Tailwind'
                    color='0C4767'
                >
                    <Tailwind className="size-4" />
                </SkillPill>
                <SkillPill
                    name='PostgreSQL'
                    color='0C4767'
                >
                    <Postgre className="size-4" />
                </SkillPill>
            </ProjectItem>
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