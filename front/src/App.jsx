import Editor from "@monaco-editor/react"
import { useState } from "react";

export default function CodeInput() {
  const [code, setCode] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeCode = async () => {
    setLoading(true);
    setAnalysis(null);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
      });

      if (!res.ok) {
        throw new Error("Failed to analyze code");
      }

      const data = await res.json();
      setAnalysis(data); // 👈 THIS is the key line
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Editor
        height="60vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
      />

      <button onClick={analyzeCode}>
        Analyze
      </button>
      {loading && <p>Analyzing code…</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {analysis && (
        <div style={{ color: "white", marginTop: "20px" }}>
          <h3>Detected Language: {analysis.detected_language}</h3>
          <h4>Overall Risk: {analysis.overall_risk}</h4>

          {analysis.issues.map((issue, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #444",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "6px"
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

    </>
  );
};