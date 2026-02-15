export default function AboutHero() {
    return (
        <section className="max-w-5xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-700 via-slate-500 to-zinc-500">
                    De-CODE
                </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                De-CODE is an AI-powered code review platform built to help developers
                write cleaner, faster, and more reliable software — without the guesswork.
            </p>
        </section>
    );
}
