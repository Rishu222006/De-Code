const TECH = [
    "React",
    "Node.js",
    "Express",
    "Gemini-Flash-2.5",
    "Tailwind CSS"
];

export default function TechStack() {
    return (
        <section className="max-w-6xl mx-auto mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">
                Built With Modern Tech
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
                {TECH.map((tech) => (
                    <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </section>
    );
}
