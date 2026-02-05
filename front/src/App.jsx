{/*import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function CodeInput() {
  const [code, setCode] = useState("");
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [githubUrl, setGithubUrl] = useState("");

  // Analyze code from editor
  const analyzeCode = async () => {
    if (!code.trim()) {
      setError("Code cannot be empty");
      return;
    }

    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
      });

      if (!res.ok) throw new Error("Failed to analyze code");

      const data = await res.json();
      setAnalysis(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Analyze uploaded file
  const analyzeFile = async () => {
    if (!file) {
      setError("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const res = await fetch("http://localhost:5000/file", {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error("Failed to analyze file");

      const data = await res.json();
      setAnalysis(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  // Analyze uploaded github repo url
  const analyzeGithubRepo = async () => {
    if (!githubUrl.trim()) return setError("GitHub URL required");

    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const res = await fetch("http://localhost:5000/analyze-github-repo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: githubUrl })
      });

      if (!res.ok) throw new Error("Failed to analyze GitHub repo");
      setAnalysis(await res.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const IssueCard = ({ issue }) => (
    <div
      style={{
        border: "1px solid #64748b",
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "6px",
        background: "#020617"
      }}
    >
      <h4>{issue.title}</h4>
      <p><strong>Category:</strong> {issue.category}</p>
      <p><strong>Severity:</strong> {issue.severity}</p>
      <p>{issue.explanation}</p>
      <p><em>{issue.failure_condition}</em></p>
    </div>
  );


  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", padding: "20px" }}>
      <h2 style={{ color: "white", marginBottom: "10px" }}>
        AI Code Reviewer
      </h2>

      {/* Monaco Editor */}
{/*  <Editor
        height="60vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
      />

      {/* Controls */}
{/*  <div style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
        <button onClick={analyzeCode} disabled={loading}>
          {loading ? "Analyzing..." : "Analyze Code"}
        </button>

        <input
          type="file"
          accept=".js,.py,.java,.cpp,.ts,.jsx,.tsx"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={analyzeFile} disabled={loading || !file}>
          Analyze File
        </button>
      </div>

      {/* GitHub Repo */}
{/* <div style={{ marginTop: "16px", display: "flex", gap: "10px" }}>
        <input
          placeholder="Paste GitHub repository URL"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
            background: "#020617",
            color: "white",
            border: "1px solid #64748b",
            borderRadius: "4px"
          }}
        />
        <button onClick={analyzeGithubRepo} disabled={loading}>
          Analyze GitHub Repo
        </button>
      </div>

      {/* States */}
{/* {loading && <p style={{ color: "white" }}>Analyzing…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Output */}
{/* {analysis && (
        <div style={{ marginTop: "20px", color: "white" }}>
          {/* Single file / editor analysis */}
{/* {analysis.issues && (
            <>
              <h3>Detected Language: {analysis.detected_language || "Unknown"}</h3>
              <h4>Overall Risk: {analysis.overall_risk}</h4>

              {analysis.issues.map((issue, index) => (
                <IssueCard key={index} issue={issue} />
              ))}
            </>
          )}
*/}
          {/* GitHub repo analysis */}
          {/* {analysis.files && (
            <>
              <h3>Repository: {analysis.repo}</h3>

              {analysis.files.map((file, i) => (
                <div key={i} style={{ marginBottom: "20px" }}>
                  <h4 style={{ color: "#38bdf8" }}>📄 {file.file}</h4>

                  {file.analysis.issues.map((issue, idx) => (
                    <IssueCard key={idx} issue={issue} />
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      )}

    </div>
  );
}
*/}
{/*added by prnv*/}
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles, Code2, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function DecodeUI() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);

  const handleReview = () => {
    if (!code) return;

    setLoading(true);
    setScore(null);

    setTimeout(() => {
      setScore(Math.floor(Math.random() * 40) + 60);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white p-6">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-12"
      >
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Sparkles className="text-indigo-400" /> de-code
        </h1>
        <Button variant="secondary">Try Demo</Button>
      </motion.header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          Write Better Code. Faster. Smarter.
        </h2>
        <p className="text-zinc-400 text-lg">
          A Gen-AI powered code reviewer that analyzes quality, complexity,
          and best practices.
        </p>
      </motion.section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Input */}
        <Card className="bg-zinc-900 border-zinc-800 rounded-2xl">
          <CardContent className="p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="flex items-center gap-2 font-semibold">
                <Code2 className="text-indigo-400" /> Paste your code
              </h3>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-32 bg-zinc-950 border-zinc-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cpp">C++</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="// Paste your code here…"
              className="h-64 bg-zinc-950 border-zinc-800 text-sm"
            />

            <Button
              onClick={handleReview}
              disabled={!code || loading}
              className="mt-4 w-full"
            >
              {loading ? "Analyzing…" : "Review Code"}
            </Button>
          </CardContent>
        </Card>

        {/* Output */}
        <Card className="bg-zinc-900 border-zinc-800 rounded-2xl">
          <CardContent className="p-5">
            <h3 className="flex items-center gap-2 font-semibold mb-3">
              <Zap className="text-green-400" /> AI Suggestions
            </h3>

            {loading ? (
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-zinc-400 text-sm"
              >
                🧪 Analyzing code…
              </motion.p>
            ) : score ? (
              <div className="space-y-5">
                <QualityMeter score={score} />
                <Suggestion type="bug" text="Unused variable detected" />
                <Suggestion
                  type="warning"
                  text="Loop complexity can be optimized"
                />
                <Suggestion
                  type="suggestion"
                  text="Rename function for clarity"
                />
              </div>
            ) : (
              <p className="text-sm text-zinc-500">
                Paste code and click “Review Code”.
              </p>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
        <Feature
          icon={<ShieldCheck className="text-blue-400" />}
          title="Secure"
          desc="Detects vulnerabilities and unsafe patterns."
        />
        <Feature
          icon={<Zap className="text-green-400" />}
          title="Fast"
          desc="Instant AI-powered feedback."
        />
        <Feature
          icon={<Code2 className="text-indigo-400" />}
          title="Smart"
          desc="Understands context, not just syntax."
        />
      </section>
    </div>
  );
}

/* ---------- Components ---------- */

function QualityMeter({ score }) {
  const color =
    score >= 80 ? "bg-green-500" : score >= 60 ? "bg-yellow-500" : "bg-red-500";

  const label =
    score >= 80
      ? "Low Complexity"
      : score >= 60
      ? "Medium Complexity"
      : "High Complexity";

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>Code Quality Score</span>
        <span className="font-semibold">{score}/100</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.8 }}
          className={`h-full ${color}`}
        />
      </div>
      <p className="text-xs text-zinc-400 mt-1">{label}</p>
    </div>
  );
}

function Suggestion({ type, text }) {
  const styles = {
    bug: "text-red-400 bg-red-500/10 border-red-500/30",
    warning: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    suggestion: "text-green-400 bg-green-500/10 border-green-500/30",
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={`px-2 py-0.5 border rounded-full ${styles[type]}`}>
        {type.toUpperCase()}
      </span>
      <span className="text-zinc-300">{text}</span>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 rounded-2xl">
      <CardContent className="p-6">
        <div className="mb-3">{icon}</div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-zinc-400">{desc}</p>
      </CardContent>
    </Card>
  );
}
