export default function Header() {
  return (
    <header
      className={`
                flex justify-center items-center
                mx-auto
                py-5
                fixed top-0
                w-full
                z-10
            `}
    >
      <nav
        className={`
                border border-[#A6B1E1] rounded-full
                px-3 py-1
                flex flex-row items-center
                bg-[#00091d]
                backdrop-blur-2xl
                `}
      >
        <a className="hover:bg-white/10 hover:text-yellow-200 rounded-full px-3 transition" href="/#home">
          Home
        </a>
        <a
          className="hover:bg-white/10 hover:text-yellow-200 rounded-full px-3 transition"
          href="/#about-me"
        >
          About Me
        </a>
        <a
          className="hover:bg-white/10 hover:text-yellow-200 rounded-full px-3 transition"
          href="/#experience"
        >
          Experience
        </a>
        <a
          className="hover:bg-white/10 hover:text-yellow-200 rounded-full px-3 transition"
          href="/#projects"
        >
          Projects
        </a>
      </nav>
    </header>
  );
}
