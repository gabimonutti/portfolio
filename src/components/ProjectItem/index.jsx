import GitHub from "../Icons/GitHub";
import Web from "../Icons/Web";
import SocialPill from "../SocialPill";

export default function ProjectItem ({ title, description, img, web, github, children }) {
    return (
        <div className="border border-[#A6B1E1] rounded-md p-6 mb-6
                        flex flex-col lg:flex-row">
            <div className="lg:w-1/2 pr-8
                            flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-yellow-200">
                        { title }
                    </h3>
                    <p className="text-pretty">
                        { description }
                    </p>
                    <nav className="flex items-center justify-start gap-4 gap-y-2 mt-4 flex-wrap pb-2">
                        { github && 
                        <SocialPill
                            title='View the source code'
                            href={github}
                        >
                            <GitHub className="size-4 md:size-6" />
                        </SocialPill> }
                        { web && 
                        <SocialPill
                            title='Visit the web'
                            href={web}
                        >
                            <Web className="size-4 md:size-6" />
                        </SocialPill> }
                    </nav>
                </div>
                <nav className="flex items-center justify-start gap-2 mt-4 flex-wrap pb-4">
                    { children }
                </nav>
            </div>
            <a
                className="lg:w-1/2 flex items-center"
                href={web}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="rounded-lg hover:scale-105 transition"
                    src={img}
                />
            </a>
        </div>
    );
}