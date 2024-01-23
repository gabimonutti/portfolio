import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";
import Mail from "../Icons/Mail";
import SocialPill from "../SocialPill";

export default function Main () {
    return (
        <section id='home' className="w-full mx-auto lg:w-[740px] px-6 pb-24 py-36
                            flex flex-col items-center justify-center min-h-dvh">
            <img
                className="rounded-full size-48 lg:size-60 mb-4"
                src="/gm_pic.png"
                alt="Gabriel Monutti"
            />
            <h1 className="mt-5 mb-2 text-4xl md:text-4xl lg:text-6xl font-bold text-[#A6B1E1]">
                Gabriel Monutti
            </h1>
            <h2 className="text-xl lg:text-xl text-balance max-w-[700px] text-center text-black dark:text-white">
                <span>Full Stack Web Developer with <span className="text-yellow-200">+1 years of professional experience.</span> </span>
                <br />
                <span>Passionate about technology, programming, and creating unique solutions.</span>
            </h2>
            <nav className="flex items-center justify-center gap-4 mt-8 flex-wrap">
                <SocialPill
                    title='LinkedIn'
                    href='https://www.linkedin.com/in/gabriel-monutti/'
                >
                    <LinkedIn className="size-4 md:size-6" />
                </SocialPill>
                <SocialPill
                    title='GitHub'
                    href='https://github.com/gabimonutti'
                >
                    <GitHub className="size-4 md:size-6" />
                </SocialPill>
                <SocialPill
                    title='gabimonutti1@gmail.com'
                    href='mailto:gabimonutti1@gmail.com'
                >
                    <Mail className="size-4 md:size-6" />
                </SocialPill>
            </nav>
        </section>
    );
}