import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoutes from "./file.js";

dotenv.config();    // configuring dotenv for accessing API key.

const app = express();   // setting up express
app.use(cors());         // setting up middlewares
app.use(express.json());


// post method for analyzing the code
app.post("/analyze", async (req, res) => {
    const { code } = req.body;  // receives code from the iser

    if (!code) {
        return res.status(400).json({ error: "Code is required" });
    }       // error handling if no code is received.

    // core functioning of the analysis with error handling.
    try {
        const analysis = await analyzeCodeWithAI(code);
        res.json(analysis);
    } catch (err) {
        res.status(500).json({ error: "AI analysis failed" });
    }
});

app.use("/", analyzeRoutes);

async function analyzeCodeWithAI(code) {
    // prompt guiding the usage instructions to AI call.
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
        }],
        "detected_language" : ""
    }

    CODE:
    ${code} `

    // receiving API response.
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

    // converting response json to data.
    const data = await response.json();

    // providing the the converted data
    try {
        // error handling if the data candidate(s) is/are missing.
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
        // error handling for parsing issue.
        console.error("Failed to parse AI response:", err);
        return {
            overall_risk: "Unknown",
            issues: [],
            error: "AI response was not valid JSON"
        };
    }
};


// code for running the server.
app.listen(5000, () => console.log(`${process.env.CHECK}`));