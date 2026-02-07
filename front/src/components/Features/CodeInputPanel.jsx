import { Code2 } from "lucide-react";
import { Card, CardContent } from "../ui/Card.jsx";
import { Button } from "../ui/Button.jsx";
import { Textarea } from "../ui/Textarea.jsx";

export default function CodeInputPanel({
    code,
    onCodeChange,
    loading,
    onAnalyze,
}) {
    return (
        <Card>
            <CardContent>
                {/* Header */}
                <div className="mb-3 flex items-center gap-2">
                    <Code2 className="text-indigo-400" />
                    <h3 className="font-semibold">Paste your code</h3>
                </div>

                {/* Context */}
                <p className="mb-4 text-sm text-zinc-400">
                    The AI will analyze this code for scalability risks, bugs, and
                    long-term technical debt assuming 100k+ users.
                </p>

                {/* Input */}
                <Textarea
                    value={code}
                    onChange={(e) => onCodeChange(e.target.value)}
                    placeholder={`// Paste real-world, production-ready code here`}
                    className="h-52"
                />

                {/* Action */}
                <Button
                    className="mt-4 w-full"
                    onClick={onAnalyze}
                    disabled={!code.trim() || loading}
                >
                    {loading ? "Analyzing code…" : "Analyze Code"}
                </Button>
            </CardContent>
        </Card>
    );
}
