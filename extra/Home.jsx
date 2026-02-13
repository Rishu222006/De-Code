// import React from "react";
// import { Search, BrainCircuit, Clock, Sparkles, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Sparkle } from "lucide-react";

// export default function Home() {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white font-sans selection:bg-cyan-500/30 overflow-hidden relative">


//             <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 flex flex-col items-center">

//                 {/* Hero */}
//                 <section className="text-center mb-20">
//                     <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-4">
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 via-slate-500 to-slate-200">
//                             De-CODE
//                         </span>
//                     </h1>
//                     <p className="text-slate-300 text-lg">
//                         AI-Powered Code Analysis
//                     </p>
//                 </section>

//                 {/* Features */}
//                 <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-24">
//                     <FeatureCard
//                         icon={<Search className="text-cyan-400" />}
//                         title="SPOT ERRORS"
//                         description="Detect bugs, logic flaws, and inefficiencies instantly."
//                     />
//                     <FeatureCard
//                         icon={<BrainCircuit className="text-purple-400" />}
//                         title="SMARTER"
//                         description="Understand code with clean AI explanations."
//                     />
//                     <FeatureCard
//                         icon={<Clock className="text-blue-400" />}
//                         title="FASTER"
//                         description="Instant reviews without manual effort."
//                     />
//                 </section>

//                 {/* Editor Preview */}
//                 <section className="w-full max-w-4xl mb-24">
//                     <div className="bg-[#0f1117] border border-slate-800/60 rounded-xl overflow-hidden">

//                         {/* Window Bar */}
//                         <div className="flex justify-between items-center px-4 py-3 bg-[#161b22] border-b border-slate-800/60">
//                             <div className="flex gap-2">
//                                 <span className="w-3 h-3 bg-red-500 rounded-full" />
//                                 <span className="w-3 h-3 bg-yellow-500 rounded-full" />
//                                 <span className="w-3 h-3 bg-green-500 rounded-full" />
//                             </div>
//                             <span className="text-xs text-slate-400 font-mono">
//                                 main.js — Analysis
//                             </span>
//                             <X size={14} className="text-slate-500" />
//                         </div>

//                         {/* Code */}
//                         <div className="p-4 font-mono text-sm space-y-1">
//                             <CodeLine color="text-pink-400" text="function analyze(code) {" />
//                             <CodeLine indent={1} color="text-slate-300" text="if (code = null) {" />
//                             <CodeLine indent={2} color="text-blue-300" text="throw new Error();" />
//                             <CodeLine indent={1} color="text-yellow-300" text="}" />
//                             <CodeLine color="text-pink-400" text="}" />
//                         </div>

//                         {/* CTA */}
//                         <div className="flex justify-center pb-6">
//                             <Link to={"/analyze"} className="bg-indigo-700 px-8 py-2 rounded-md font-semibold shadow-md hover:scale-105 transition">
//                                 Analyze Code
//                             </Link>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Footer */}
//                 <p className="text-slate-500 text-sm tracking-widest uppercase">
//                     Make your code smarter
//                 </p>

//             </div>
//         </div>
//     );
// }

// /* ---------- Components ---------- */

// const FeatureCard = ({ icon, title, description }) => (
//     <div className=" p-6 rounded-2xl border border-zinc-800 bg-zinc-900">
//         <div className="flex justify-between mb-3">
//             <h3 className="font-bold text-slate-100">{title}</h3>
//             {icon}
//         </div>
//         <p className="text-slate-400 text-sm">{description}</p>
//     </div>
// );

// const CodeLine = ({ text, color, indent = 0 }) => (
//     <div className={color} style={{ paddingLeft: `${indent}rem` }}>
//         {text}
//     </div>
// );