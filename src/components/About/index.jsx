import Code from '../Icons/Code';
import Expressjs from '../Icons/Express';
import Nodejs from '../Icons/Node';
import Profile from '../Icons/Profile';
import React from '../Icons/React';
import JavaScript from '../Icons/Javascript';
import SkillItem from '../SkillItem';
import Css from '../Icons/Css';
import Html from '../Icons/Html';
import Tailwind from '../Icons/Tailwind';
import Postgre from '../Icons/Postgre';
import Git from '../Icons/Git';
import Vue from '../Icons/Vue';

export default function About () {
    return (
        <section id='about-me' className="w-full mx-auto md:w-[750px] lg:w-[1000px] px-6 pb-24 py-32 min-h-dvh">
            <div className="border border-[#A6B1E1] rounded-md p-8 pt-0
                            flex flex-col lg:flex-row justify-center">
                <section className="lg:w-3/5">
                    <h2 className="text-2xl font-bold pt-8 pb-4 text-[#A6B1E1] flex gap-x-2">
                        <Profile className="size-7 pt-1" />
                        ABOUT ME
                    </h2>
                    <div className="lg:pr-16 [&>p]:mb-4">
                        <p>
                            As a full stack developer I have experience in the comprehensive creation of applications, covering both frontend and backend. My primary expertise lies in developing<span className='text-yellow-200'> RESTful APIs using Node.js and Express</span>. Additionally, I possess the ability to <span className='text-yellow-200'>design intuitive and appealing interfaces</span> to ensure an exceptional user experience.
                        </p>
                        <p>
                            I am passionate about <span className='text-yellow-200'>staying up-to-date </span>with the latest trends and industry practices, enabling me to deliver innovative and valuable solutions to my clients. My continuous commitment to improvement and problem-solving drives me to <span className='text-yellow-200'>create unique software</span> that can provide maximum value to stakeholders.
                        </p>
                    </div>
                </section>
                <section className="lg:w-3/5">
                    <h2 className="text-2xl font-bold pt-8 pb-4 text-[#A6B1E1] flex gap-x-2">
                        <Code className="size-7 pt-1" />
                        SKILLS
                    </h2>
                    <div className="flex flex-wrap items-center justify-start gap-4">
                        <SkillItem name='Node.js'>
                            <Nodejs className="size-16" />
                        </SkillItem>
                        <SkillItem name='Express'>
                            <Expressjs className="size-16" />
                        </SkillItem>
                        <SkillItem name='React'>
                            <React className="size-16" />
                        </SkillItem>
                        <SkillItem name='JavaScript'>
                            <JavaScript className="size-16" />
                        </SkillItem>
                        <SkillItem name='Tailwind'>
                            <Tailwind className="size-16" />
                        </SkillItem>
                        <SkillItem name='HTML'>
                            <Html className="size-16" />
                        </SkillItem>
                        <SkillItem name='CSS'>
                            <Css className="size-16" />
                        </SkillItem>
                        <SkillItem name='Vue.js'>
                            <Vue className="size-16" />
                        </SkillItem>
                        <SkillItem name='PostgreSQL'>
                            <Postgre className="size-16" />
                        </SkillItem>
                        <SkillItem name='Git'>
                            <Git className="size-16" />
                        </SkillItem>
                    </div>
                </section>
            </div>
        </section>
    );
}