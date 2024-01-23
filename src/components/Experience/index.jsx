import Briefcase from "../Icons/Briefcase";
import { Timeline } from 'flowbite-react';
import TimelineItem from "../TimelineItem";
import Education from "../Icons/Education";

export default function Experience () {
    return (
        <section id='experience' className="w-full mx-auto md:w-[600px] lg:w-[740px] px-6 pb-24 py-32 min-h-dvh">
            <section>
                <h2
                    className="text-2xl font-bold mb-6 flex gap-x-3 items-center text-[#A6B1E1]"
                >
                    <Briefcase className="size-7" />
                    PROFESSIONAL EXPERIENCE
                </h2>
                <Timeline className="relative border-s border-gray-200 ml-3">
                    <TimelineItem 
                        date='Apr 2023 - Present'
                        title='Full Stack Developer Intern'
                        description='
                        Currently, I am involved in the development of web applications, undertaking tasks for both the Backend, using Node.js, and the Frontend, utilizing Vue.js.-I am engaged in the development of an accounting management system, overseeing transactions and projects with multiple states. In this role, I have implemented the storage of various file types to facilitate the recording and tracking of transactions.-Additionally, I am working on a system for recording academic records and generating student certificates, along with other functionalities such as storing this information on the blockchain to ensure its security and integrity. '
                    />
                </Timeline>
            </section>
            <section>
                <h2
                    className="mt-14 text-2xl font-bold mb-6 flex gap-x-3 items-center text-[#A6B1E1]"
                >
                    <Education className="size-7" />
                    EDUCATION
                </h2>
                <Timeline className="relative border-s border-gray-200 ml-3">
                    <TimelineItem 
                        date='2020 - Present'
                        title='Information Systems Engineering'
                        description='Currently studying my fifth and last year of the career with 90% of the subjects approved.-Current average: 8.95'
                    />
                </Timeline>
            </section>
        </section>
    );
}