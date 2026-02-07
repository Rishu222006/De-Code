import { Code2 } from "lucide-react";
import { Card, CardContent } from "../ui/Card.jsx";
import { Button } from "../ui/Button.jsx";
import { Textarea } from "../ui/Textarea.jsx";
import { Select, SelectTrigger, SelectValue } from "../ui/Select.jsx";

export default function CodeInputPanel({
    code,
    onCodeChange,
    language,
    onLanguageChange,
    loading,
    onReview,
}) {
    return (
        <Card>
            <CardContent>
                <div className="mb-3 flex justify-between">
                    <h3 className="flex items-center gap-2 font-semibold">
                        <Code2 className="text-indigo-400" /> Paste your code
                    </h3>

                    <Select value={language} onValueChange={onLanguageChange}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                    </Select>
                </div>

                <Textarea
                    value={code}
                    onChange={(e) => onCodeChange(e.target.value)}
                    placeholder="// Paste your code here"
                    className="h-64"
                />

                <Button
                    className="mt-4 w-full"
                    onClick={onReview}
                    disabled={!code || loading}
                >
                    {loading ? "Analyzing…" : "Review Code"}
                </Button>
            </CardContent>
        </Card>
    );
}
