import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { CODE_LINES } from "../../../utility/HomeData.js";
import CodeBlock from "./CodeBlock.jsx";

export default function EditorPreview() {
    return (
        <section className="w-full max-w-4xl mb-24">
            <div className="bg-[#0f1117] border border-slate-800/60 rounded-xl overflow-hidden">

                <div className="flex justify-between items-center px-4 py-3 bg-[#161b22] border-b border-slate-800/60">
                    <div className="flex gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full" />
                        <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <span className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                        main.js — Analysis
                    </span>
                    <X size={14} className="text-slate-500" />
                </div>

                <CodeBlock lines={CODE_LINES} />

                <div className="flex justify-center pb-6">
                    <Link
                        to="/analyze"
                        className="bg-indigo-700 px-8 py-2 rounded-md font-semibold shadow-md hover:scale-105 transition"
                    >
                        Analyze Code
                    </Link>
                </div>
            </div>
        </section>
    );
}
