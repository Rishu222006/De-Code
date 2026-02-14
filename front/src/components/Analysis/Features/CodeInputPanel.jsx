import { Code2, Upload, Link } from "lucide-react";
import { Card, CardContent } from "../../ui/Card.jsx";
import { Button } from "../../ui/Button.jsx";
import { Textarea } from "../../ui/Textarea.jsx";

export default function CodeInputPanel({
    code,
    onCodeChange,
    file,
    onFileChange,
    githubUrl,
    onGithubUrlChange,
    loading,
    onAnalyze,
}) {
    const isDisabled =
        loading && !code.trim() && !file && !githubUrl;

    return (
        <Card>
            <CardContent>
                {/* Header */}
                <div className="mb-3 flex items-center gap-2">
                    <Code2 className="text-indigo-400" />
                    <h3 className="font-semibold">Input Source</h3>
                </div>

                {/* Context */}
                <p className="mb-4 text-sm text-zinc-400">
                    Paste code, upload a file, or provide a GitHub repository URL
                    for AI-powered review.
                </p>

                {/* File + URL */}
                <div className="mb-3 space-y-2">
                    {/* File Upload */}
                    <label className="flex cursor-pointer items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-400 hover:bg-zinc-900">
                        <Upload size={16} />
                        <span>
                            {file ? file.name : "Upload a code file"}
                        </span>
                        <input
                            type="file"
                            accept=".js,.ts,.jsx,.tsx,.py,.java,.cpp,.c"
                            hidden
                            onChange={(e) =>
                                onFileChange(e.target.files[0])
                            }
                        />
                    </label>

                    {/* GitHub URL */}
                    <div className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2">
                        <Link size={16} className="text-zinc-400" />
                        <input
                            type="text"
                            placeholder="GitHub repo URL"
                            value={githubUrl}
                            onChange={(e) =>
                                onGithubUrlChange(e.target.value)
                            }
                            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Code Input */}
                <Textarea
                    value={code}
                    onChange={(e) => onCodeChange(e.target.value)}
                    placeholder="// Or paste production-ready code here"
                    className="h-32"
                />

                {/* Action */}
                <Button
                    className="mt-4 w-full"
                    onClick={onAnalyze}
                    disabled={
                        loading ||
                        (!code.trim() && !file && !githubUrl)
                    }
                >
                    {loading ? "Analyzing…" : "Analyze Code"}
                </Button>
            </CardContent>
        </Card>
    );
}
