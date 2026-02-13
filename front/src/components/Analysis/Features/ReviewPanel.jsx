import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui/Card.jsx";

function RiskBadge({ risk }) {
    const colors = {
        Low: "bg-green-600",
        Medium: "bg-yellow-600",
        High: "bg-red-600",
        Unknown: "bg-zinc-600",
    };

    return (
        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${colors[risk] || colors.Unknown}`}
        >
            {risk}
        </span>
    );
}

function IssueCard({ issue }) {
    const severityColors = {
        Low: "border-green-500",
        Medium: "border-yellow-500",
        High: "border-red-500",
    };

    return (
        <div
            className={`rounded-md border-l-4 p-3 text-sm bg-zinc-950 ${severityColors[issue.severity]}`}
        >
            <div className="flex justify-between mb-1">
                <h4 className="font-semibold">{issue.title}</h4>
                <span className="text-xs text-zinc-400">{issue.category}</span>
            </div>

            <p className="text-zinc-300 mb-1">{issue.explanation}</p>
            <p className="text-xs text-zinc-500 italic">
                {issue.failure_condition}
            </p>

            <div className="mt-2 text-xs text-zinc-400">
                Severity: <span className="font-medium">{issue.severity}</span>
            </div>
        </div>
    );
}

export default function ReviewPanel({ loading, analysis, error }) {
    return (
        <Card>
            <CardContent>
                <h3 className="mb-3 flex items-center gap-2 font-semibold">
                    <Zap className="text-green-400" /> AI Review
                </h3>

                {/* Loading */}
                {loading && (
                    <motion.p
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                        className="text-sm text-zinc-400"
                    >
                        🧪 Analyzing code…
                    </motion.p>
                )}

                {/* Error */}
                {!loading && error && (
                    <p className="text-sm text-red-400">{error}</p>
                )}

                {/* Empty */}
                {!loading && !analysis && !error && (
                    <p className="text-sm text-zinc-500">
                        Paste code and click “Review Code”.
                    </p>
                )}

                {/* Results */}
                {!loading && analysis && (
                    <div className="flex max-h-72 flex-col gap-4">
                        {/* Static summary */}
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-zinc-400">
                                Detected Language:{" "}
                                <span className="text-white">
                                    {analysis.detected_language || "Unknown"}
                                </span>
                            </div>
                            <RiskBadge risk={analysis.overall_risk} />
                        </div>

                        {/* Scrollable issues */}
                        <div className="flex-1 overflow-y-auto no-scrollbar space-y-3 pr-2">
                            {analysis.issues.length === 0 ? (
                                <p className="text-sm text-zinc-400">
                                    No issues detected 🎉
                                </p>
                            ) : (
                                analysis.issues.map((issue, idx) => (
                                    <IssueCard key={idx} issue={issue} />
                                ))
                            )}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
