import { Link } from "react-router-dom";

export default function AboutCTA() {
    return (
        <section className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/10 rounded-2xl p-10">
                <h2 className="text-3xl font-bold mb-4">
                    Make Your Code Smarter
                </h2>
                <p className="text-gray-300 mb-6">
                    Start analyzing your code with AI and ship better software today.
                </p>
                <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 transition rounded-lg font-semibold">
                    <Link to={'/analyze'}>
                        Analyze Code
                    </Link>
                </button>
            </div>
        </section>
    );
}
