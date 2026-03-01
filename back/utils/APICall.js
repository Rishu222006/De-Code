export async function callGemini(prompt) {
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
                ],
                generationConfig: {
                    responseMimeType: "application/json"
                }
            })
        }
    );

    const data = await response.json();

    if (!data.candidates || data.candidates.length === 0) {
        throw new Error("No AI candidates returned");
    }

    return JSON.parse(
        data.candidates[0].content.parts[0].text
    );
}