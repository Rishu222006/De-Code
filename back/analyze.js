import { detectLanguage, retrieveRelevantRules } from './utils/RAGRetriever.js';
import { buildPrompt } from './utils/promptBuilder.js';
import { callGemini } from './utils/APICall.js';

export async function analyzeCodeWithAI(code) {
    try {
        const detectedLanguage = detectLanguage(code);

        const retrievedRules = retrieveRelevantRules(code);

        const prompt = buildPrompt(code, detectedLanguage, retrievedRules);

        const airesponse = await callGemini(prompt);

        return airesponse;
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