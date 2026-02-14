export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0b0f14] to-black text-white px-6 py-20">

            {/* HERO */}
            <section className="max-w-5xl mx-auto text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    About <span className="text-indigo-400">De-CODE</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                    De-CODE is an AI-powered code review platform built to help developers
                    write cleaner, faster, and more reliable software — without the guesswork.
                </p>
            </section>

            {/* MISSION + VISION */}
            <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-24">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
                        🚀 Our Mission
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Our mission is to simplify code understanding and improve software
                        quality using AI-driven insights. We aim to reduce debugging time,
                        highlight hidden issues, and help developers focus on building — not fixing.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
                        🌌 Our Vision
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We envision a future where every developer — beginner or expert —
                        has access to intelligent code feedback, making high-quality software
                        the default, not the exception.
                    </p>
                </div>
            </section>

            {/* WHY DE-CODE */}
            <section className="max-w-6xl mx-auto mb-24">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why <span className="text-indigo-400">De-CODE</span>?
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "AI-Driven Reviews",
                            desc: "Advanced Gen-AI analyzes logic, structure, and complexity — not just syntax."
                        },
                        {
                            title: "Developer-First",
                            desc: "Built for modern workflows with GitHub repos, file uploads, and raw code."
                        },
                        {
                            title: "Instant Insights",
                            desc: "Get meaningful feedback in seconds, without manual reviews or setup."
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/40 transition"
                        >
                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TECH STACK */}
            <section className="max-w-6xl mx-auto mb-24">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Built With Modern Tech
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        "React",
                        "Node.js",
                        "Express",
                        "AI APIs",
                        "Monaco Editor",
                        "Tailwind CSS"
                    ].map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/10 rounded-2xl p-10">
                    <h2 className="text-3xl font-bold mb-4">
                        Make Your Code Smarter
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Start analyzing your code with AI and ship better software today.
                    </p>
                    <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 transition rounded-lg font-semibold">
                        Analyze Code
                    </button>
                </div>
            </section>

        </div>
    );
}
