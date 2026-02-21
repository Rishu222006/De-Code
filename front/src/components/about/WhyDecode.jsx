const FEATURES = [
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
];

export default function WhyDecode() {
    return (
        <section className="max-w-6xl mx-auto mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">
                Why{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-700 via-slate-500 to-zinc-500">
                    De-CODE
                </span>
                ?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {FEATURES.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-xl p-6 transition-transform duration-300 ease-out shadow-xl hover:shadow-indigo-300/10"
                    >
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
