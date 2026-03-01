export function buildPrompt(code, detectedLanguage, retrievedRules) {

  const knowledgeContext = retrievedRules
    .map(r => `Rule: ${r.content}`)
    .join("\n");

  return `
You are a senior software architect reviewing production-grade systems.

Detected Language: ${detectedLanguage}

Apply the following engineering principles during analysis:

${knowledgeContext || "Use general software engineering best practices."}

Analyze the code and identify:

1. Scalability risks
2. Logical bugs or fragile assumptions
3. Technical debt that will cause issues in 6-12 months

Assume this system must support 100k+ users.

Return ONLY valid JSON in this exact format:

{
  "overall_risk": "Low | Medium | High",
  "issues": [{
    "title": "",
    "category": "Bug | Scalability | Technical Debt",
    "explanation": "",
    "failure_condition": "",
    "severity": "Low | Medium | High"
  }],
  "detected_language": "${detectedLanguage}"
}

CODE:
${code}
`;
}