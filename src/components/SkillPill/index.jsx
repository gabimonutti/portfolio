export default function SkillPill ({ children, name, color }) {
    return (
        <span className={`rounded-full bg-slate-900 text-xs gap-x-2 py-1 min-w-30 px-2
                        flex items-center justify-center
                        bg-[#${color}]`}>
            { children }
            { name }
        </span>
    );
}