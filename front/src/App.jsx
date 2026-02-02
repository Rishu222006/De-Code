import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function CodeInput() {
  const [code, setCode] = useState("");
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔍 Analyze code from editor
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

  // 📂 Analyze uploaded file
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

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", padding: "20px" }}>
      <h2 style={{ color: "white", marginBottom: "10px" }}>
        AI Code Reviewer
      </h2>

      {/* Monaco Editor */}
      <Editor
        height="60vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
      />

      {/* Controls */}
      <div style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
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

      {/* States */}
      {loading && <p style={{ color: "white" }}>Analyzing…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Output */}
      {analysis && (
        <div style={{ marginTop: "20px", color: "white" }}>
          <h3>Detected Language: {analysis.detected_language || "Unknown"}</h3>
          <h4>Overall Risk: {analysis.overall_risk}</h4>

          {analysis.issues.map((issue, index) => (
            <div
              key={index}
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
          ))}
        </div>
      )}
    </div>
  );
}
