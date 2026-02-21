function Card({ title, icon, children }) {
    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8
                        transition-transform duration-300 ease-out hover:scale-[1.03] cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
                {icon} {title}
            </h2>
            <p className="text-gray-300 leading-relaxed">{children}</p>
        </div>
    );
}

export default function MissionVision() {
    return (
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-24">
            <Card title="Our Mission" icon="🚀">
                Our mission is to simplify code understanding and improve software
                quality using AI-driven insights. We aim to reduce debugging time,
                highlight hidden issues, and help developers focus on building — not fixing.
            </Card>

            <Card title="Our Vision" icon="🌌">
                We envision a future where every developer — beginner or expert —
                has access to intelligent code feedback, making high-quality software
                the default, not the exception.
            </Card>
        </section>
    );
}
