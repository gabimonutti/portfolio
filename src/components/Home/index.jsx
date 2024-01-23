import { Analytics } from '@vercel/analytics/react';
import About from "../About";
import Experience from "../Experience";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import Projects from "../Projects";

export default function Home () {
    return (
        <div class="top-0 z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <div className="relative h-full w-full">
                <Header />
                <Main />
                <About />
                <Experience />
                <Projects />
                <Footer />
            </div>
            <Analytics />
        </div>
    );
}