import React from 'react'
import { Search, BrainCircuit, Clock, Zap, Terminal, Sparkles, X, Minus, Square } from 'lucide-react';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen bg-[#050810] text-white font-sans selection:bg-cyan-500/30 overflow-hidden relative">
                {/* Background Ambient Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl flex flex-col items-center">

                    {/* Header Section */}
                    <header className="text-center mb-16">
                        <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                                De-CODE
                            </span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide">
                            AI-Powered Code Analysis
                        </p>
                    </header>

                    {/* Features Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">
                        <FeatureCard
                            icon={<Search className="w-6 h-6 text-cyan-400" />}
                            title="SPOT ERRORS"
                            description="Spot errors, fix logic, and clear inefficiencies with Generative AI for cleaner, stronger code."
                        />
                        <FeatureCard
                            icon={<BrainCircuit className="w-6 h-6 text-purple-400" />}
                            title="SMARTER & BETTER"
                            description="Smarter: Enjoy simple explanations, polished suggestions and good practices from Generative AI."
                        />
                        <FeatureCard
                            icon={<Clock className="w-6 h-6 text-blue-400" />}
                            title="FASTER"
                            description="Faster: Speed up reviews and obtain instant AI checks."
                        />
                    </div>

                    {/* Code Editor Interface Mockup */}
                    <div className="w-full max-w-4xl relative group">

                        {/* Editor Window */}
                        <div className="bg-[#1e222e] rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden relative">

                            {/* Window Controls */}
                            <div className="bg-[#151922] px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="text-slate-500 text-xs font-mono">main.js — Analysis</div>
                                <div className="flex gap-3 text-slate-500">
                                    <Search size={14} />
                                    <X size={14} />
                                </div>
                            </div>

                            {/* Editor Body */}
                            <div className="flex h-[400px]">
                                {/* Sidebar/Line Numbers */}
                                <div className="w-12 bg-[#151922] text-slate-600 font-mono text-sm pt-4 flex flex-col items-end pr-3 select-none">
                                    {Array.from({ length: 15 }).map((_, i) => (
                                        <div key={i} className="leading-6">{20 + i}</div>
                                    ))}
                                </div>

                                {/* Code Content */}
                                <div className="flex-1 p-4 font-mono text-sm relative">
                                    {/* Simulated Code Lines */}
                                    <div className="space-y-1">
                                        <CodeLine color="text-pink-400" text="function calculateData(input) {" />
                                        <CodeLine color="text-slate-300" indent={1} text="const threshold = 100;" />
                                        <CodeLine color="text-slate-300" indent={1} text="// Processing user input" />

                                        {/* Problematic Line 1 */}
                                        <div className="pl-4 py-1 bg-red-500/10 border border-red-500/30 rounded w-fit pr-2 relative group/line">
                                            <span className="text-slate-300">if (input = threshold) </span>
                                            <span className="text-yellow-300">{`{`}</span>

                                            {/* Floating Error Tooltip */}
                                            <div className="absolute left-[105%] top-1/2 -translate-y-1/2 w-64 z-20">
                                                <div className="bg-[#151922] border border-red-500/50 p-3 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.2)] flex items-start gap-3">
                                                    <div className="bg-red-500/20 p-1.5 rounded-full">
                                                        <Sparkles size={14} className="text-red-400" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-red-400 text-xs font-bold mb-1">Syntax Error: Assignment</h4>
                                                        <p className="text-slate-400 text-[10px] leading-tight">You used '=' instead of '=='. This will always result in true.</p>
                                                    </div>
                                                    {/* Connecting Line */}
                                                    <div className="absolute right-full top-1/2 w-4 h-[1px] bg-red-500/50"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <CodeLine color="text-blue-300" indent={2} text="return true;" />
                                        <CodeLine color="text-yellow-300" indent={1} text="}" />

                                        {/* Problematic Line 2 */}
                                        <div className="pl-4 mt-2 relative">
                                            <span className="text-purple-300">process.nextTick(() ={'>'} </span>
                                            <span className="text-slate-300">saveData()</span>
                                            <span className="text-purple-300">);</span>

                                            {/* Floating Logic Tooltip */}
                                            <div className="absolute left-[60%] top-8 w-64 z-20">
                                                <div className="bg-[#151922] border border-cyan-500/50 p-3 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.2)] flex items-start gap-3">
                                                    <div className="bg-cyan-500/20 p-1.5 rounded-full">
                                                        <BrainCircuit size={14} className="text-cyan-400" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-cyan-400 text-xs font-bold mb-1">Logic Flaw</h4>
                                                        <p className="text-slate-400 text-[10px] leading-tight">Uncaught promise rejection possible here.</p>
                                                    </div>
                                                    {/* Connecting Line */}
                                                    <div className="absolute bottom-full left-4 h-4 w-[1px] bg-cyan-500/50"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <CodeLine color="text-slate-300" indent={1} text="" />
                                        <CodeLine color="text-pink-400" text="}" />
                                    </div>

                                    {/* AI Insights Right Panel Badge */}
                                    <div className="absolute right-4 top-10 flex flex-col items-end gap-2">
                                        <h4 className="text-slate-400 text-xs uppercase tracking-widest mb-1">AI Insights:</h4>
                                        <button className="bg-slate-800 hover:bg-slate-700 text-purple-300 text-xs px-3 py-1.5 rounded-full border border-purple-500/30 flex items-center gap-2 transition-all">
                                            <Sparkles size={12} />
                                            Fix Syntax Bugs
                                        </button>
                                    </div>

                                </div>
                            </div>

                            {/* Analyze Button Overlay */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-2 px-8 rounded shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300">
                                    Analyze Code
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer Text */}
                    <div className="mt-16 text-center">
                        <p className="text-slate-500 text-sm tracking-[0.2em] uppercase font-medium">
                            Let's make our code smarter, better, faster
                        </p>
                    </div>

                </div>
            </div>
            );
};

            // Helper Components for cleaner code

            const FeatureCard = ({title, description, icon}) => (
            <div className="bg-[#10141d]/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex flex-col gap-4 hover:border-slate-600 transition-colors group">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white tracking-wide">{title}</h3>
                    <div className="bg-slate-800/50 p-2 rounded-lg group-hover:bg-slate-700/50 transition-colors">
                        {icon}
                    </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
            );

            const CodeLine = ({text, color, indent = 0}) => (
            <div className={`${color}`} style={{ paddingLeft: `${indent * 1}rem` }}>
                {text}
            </div>
        </div>
    )
}

export default Home;