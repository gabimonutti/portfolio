export default function SkillItem ({ children, name }) {
    return (
        <div className="rounded-lg bg-slate-900 py-2 min-w-32 px-4
                        flex flex-col items-center justify-center">
            { children }
            <h1 className="mt-2 text-yellow-200">
                { name }
            </h1>
        </div>
    );
}