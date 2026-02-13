import { Search, BrainCircuit, Clock } from "lucide-react";

export const FEATURES = [
    {
        title: "SPOT ERRORS",
        description: "Detect bugs, logic flaws, and inefficiencies instantly.",
        icon: Search,
        color: "text-cyan-400",
    },
    {
        title: "SMARTER",
        description: "Understand code with clean AI explanations.",
        icon: BrainCircuit,
        color: "text-purple-400",
    },
    {
        title: "FASTER",
        description: "Instant reviews without manual effort.",
        icon: Clock,
        color: "text-blue-400",
    },
];

export const CODE_LINES = [
    { text: "function analyze(code) {", color: "text-pink-400" },
    { text: "if (code = null) {", color: "text-slate-300", indent: 1 },
    { text: "throw new Error();", color: "text-blue-300", indent: 2 },
    { text: "}", color: "text-yellow-300", indent: 1 },
    { text: "}", color: "text-pink-400" },
];
