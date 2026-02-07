import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/Card";

function QualityMeter({ score }) {
    const color =
        score >= 80 ? "bg-green-500" : score >= 60 ? "bg-yellow-500" : "bg-red-500";

    return (
        <div className="mb-4">
            <div className="mb-1 flex justify-between text-sm">
                <span>Code Quality</span>
                <span>{score}/100</span>
            </div>
            <div className="h-2 rounded-full bg-zinc-800">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    className={`h-full rounded-full ${color}`}
                />
            </div>
        </div>
    );
}

function Suggestion({ type, text }) {
    const colors = {
        bug: "text-red-400",
        warning: "text-yellow-400",
        suggestion: "text-green-400",
    };

    return <p className={`text-sm ${colors[type]}`}>• {text}</p>;
}

export default function ReviewPanel({ loading, score }) {
    return (
        <Card>
            <CardContent>
                <h3 className="mb-3 flex items-center gap-2 font-semibold">
                    <Zap className="text-green-400" /> AI Suggestions
                </h3>

                {loading ? (
                    <motion.p
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                        className="text-sm text-zinc-400"
                    >
                        🧪 Analyzing code…
                    </motion.p>
                ) : score ? (
                    <>
                        <QualityMeter score={score} />
                        <Suggestion type="bug" text="Unused variable detected" />
                        <Suggestion type="warning" text="Loop complexity can be optimized" />
                        <Suggestion type="suggestion" text="Rename function for clarity" />
                    </>
                ) : (
                    <p className="text-sm text-zinc-500">
                        Paste code and click “Review Code”.
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
