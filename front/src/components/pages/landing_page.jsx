import React from "react";
import {
    Search,
    BrainCircuit,
    Clock,
    Sparkles,
    X
} from "lucide-react";

const Home = () => {
    return (
        <div className="min-h-screen bg-[#050810] text-white font-sans selection:bg-cyan-500/30 overflow-hidden relative">

            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl flex flex-col items-center">

                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                            De-CODE
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg">
                        AI-Powered Code Analysis
                    </p>
                </header>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">
                    <FeatureCard
                        icon={<Search className="w-6 h-6 text-cyan-400" />}
                        title="SPOT ERRORS"
                        description="Spot errors, fix logic, and clear inefficiencies with AI."
                    />
                    <FeatureCard
                        icon={<BrainCircuit className="w-6 h-6 text-purple-400" />}
                        title="SMARTER"
                        description="Simple explanations and best practices."
                    />
                    <FeatureCard
                        icon={<Clock className="w-6 h-6 text-blue-400" />}
                        title="FASTER"
                        description="Instant AI-powered code reviews."
                    />
                </div>

                {/* Editor Mock */}
                <div className="w-full max-w-4xl relative">
                    <div className="bg-[#1e222e] rounded-xl border border-slate-700/50 overflow-hidden">

                        {/* Title Bar */}
                        <div className="bg-[#151922] px-4 py-3 flex justify-between border-b border-slate-700/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="text-xs font-mono text-slate-500">
                                main.js — Analysis
                            </div>
                            <X size={14} className="text-slate-500" />
                        </div>

                        {/* Code */}
                        <div className="p-4 font-mono text-sm">
                            <CodeLine color="text-pink-400" text="function calculateData(input) {" />
                            <CodeLine indent={1} color="text-slate-300" text="const threshold = 100;" />
                            <CodeLine indent={1} color="text-slate-300" text="if (input = threshold) {" />
                            <CodeLine indent={2} color="text-blue-300" text="return true;" />
                            <CodeLine indent={1} color="text-yellow-300" text="}" />
                            <CodeLine color="text-pink-400" text="}" />
                        </div>

                        {/* Analyze Button */}
                        <div className="flex justify-center pb-6">
                            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-2 rounded font-bold">
                                Analyze Code
                            </button>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <p className="mt-16 text-slate-500 text-sm tracking-widest uppercase">
                    Let’s make code smarter
                </p>
            </div>
        </div>
    );
};

/* ---------- Helper Components ---------- */

const FeatureCard = ({ title, description, icon }) => (
    <div className="bg-[#10141d]/80 border border-slate-800 p-6 rounded-2xl">
        <div className="flex justify-between mb-3">
            <h3 className="font-bold">{title}</h3>
            {icon}
        </div>
        <p className="text-slate-400 text-sm">{description}</p>
    </div>
);

const CodeLine = ({ text, color, indent = 0 }) => (
    <div className={color} style={{ paddingLeft: `${indent}rem` }}>
        {text}
    </div>
);

export default Home;
