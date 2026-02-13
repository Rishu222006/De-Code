import { useState } from "react";

import Header from "./layout/LayouHeader.jsx";
import Hero from "./layout/Hero.jsx";
import CodeInputPanel from "./Features/CodeInputPanel.jsx";
import ReviewPanel from "./Features/ReviewPanel.jsx";
import FeaturesSection from "./Features/FeaturesSection.jsx";
import PageWrapper from "./layout/PageWrapper.jsx";

export default function Analysis() {

    const [code, setCode] = useState("");
    const [file, setFile] = useState(null);
    const [githubUrl, setGithubUrl] = useState("");

    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
                body: JSON.stringify({ code }),
            });

            if (!res.ok) throw new Error("Failed to analyze code");
            setAnalysis(await res.json());
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageWrapper>
            <Header />
            <Hero />

            <main className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                <CodeInputPanel
                    code={code}
                    onCodeChange={setCode}
                    loading={loading}
                    onAnalyze={analyzeCode}
                />

                <ReviewPanel loading={loading} analysis={analysis} error={error} />
            </main>

            <FeaturesSection />
        </PageWrapper>
    );
}
