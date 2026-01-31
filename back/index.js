import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/analyze", async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: "Code is required" });
    }

    try {
        const analysis = await analyzeCodeWithAI(code);
        res.json(analysis);
    } catch (err) {
        res.status(500).json({ error: "AI analysis failed" });
    }
});

async function analyzeCodeWithAI(code) {
    const prompt = `You are a senior software architect.

    Analyze the following code and identify:
    1. Scalability risks
    2. Logical bugs or fragile assumptions
    3. Technical debt that will cause issues in 6-12 months

    For EACH issue, return:
    - title
    - category (Scalability | Bug | Technical Debt)
    - explanation
    - failure_condition
    - severity (Low | Medium | High)

    Assume this code will be used by 100k+ users.

    Return ONLY JSON. Do NOT include explanations, code fences, or extra text.

    Return ONLY valid JSON in this format:

    {
        "overall_risk": "Low | Medium | High",
        "issues": [{
        "title": "",
        "category": "",
        "explanation": "",
        "failure_condition": "",
        "severity": ""
        }]
    }

    CODE:
    ${code} `


    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY1}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [
                    {
                        role: "user",
                        parts: [{ text: prompt }]
                    }
                ]
            })
        }
    );


    const data = await response.json();

    try {
        if (!data.candidates || data.candidates.length === 0) {
            console.error("AI response missing candidates:", data);
            return {
                overall_risk: "Unknown",
                issues: [],
                error: "AI did not return any candidates"
            };
        }

        const textResponse = data.candidates[0].content.parts[0].text;

        const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("No JSON found");

        return JSON.parse(jsonMatch[0]);
    } catch (err) {
        console.error("Failed to parse AI response:", err);
        return {
            overall_risk: "Unknown",
            issues: [],
            error: "AI response was not valid JSON"
        };
    }
};

app.listen(5000, () => console.log(`${process.env.CHECK}`));