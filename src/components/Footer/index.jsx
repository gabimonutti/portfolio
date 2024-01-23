import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";
import Gmail from "../Icons/Gmail";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer class="rounded-lg shadow bg-black/20 backdrop-blur-lg w-full lg:w-[1120px] mx-auto">
            <div class="w-full mx-auto max-w-screen-xl px-8 p-4 flex items-center justify-between">
                <span class="text-sm sm:text-center text-yellow-200">
                © {currentYear} Gabriel Monutti
                </span>
                <ul class="flex flex-wrap items-center gap-x-4">
                    <li>
                        <a href="https://www.linkedin.com/in/gabriel-monutti/" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <LinkedIn className="size-6 hover:scale-125 transition" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/gabimonutti" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <GitHub className="size-6 hover:scale-125 transition" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:gabimonutti1@gmail.com" 
                        target="_blank"
                        rel="noopener noreferrer">
                            <Gmail className="size-6 hover:scale-125 transition" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
