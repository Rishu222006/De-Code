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
{/* GitHub repo analysis */ }
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

{/*import Home from "./landing_page.jsx";*/ }
import Analysis from "../analysis.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/*<Route path='/' element={<Home />} />*/}
          <Route path='/analyze' element={<Analysis />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
