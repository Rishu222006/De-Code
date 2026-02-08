import express from "express";
import { analyzeCodeWithAI } from "../analyze.js";
import { parseGitHubRepoUrl } from "../url_access/urlParser.js";
import { fetchFileContent } from "../url_access/file_access.js";
import { fetchRepoFiles } from "../url_access/file_list.js";

const router = express.Router();

// helper: delay to respect Gemini quota (5 req / min)
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

router.post("/analyze-github-repo", async (req, res) => {
    const { url } = req.body;

    if (!url || !url.includes("github.com")) {
        return res.status(400).json({ error: "Invalid GitHub URL" });
    }

    try {
        const { owner, repo } = parseGitHubRepoUrl(url);
        const fileUrls = await fetchRepoFiles(owner, repo);

        const results = [];

        for (let i = 0; i < fileUrls.length; i++) {
            const fileUrl = fileUrls[i];
            const fileName = fileUrl.split("/").pop();

            try {
                const code = await fetchFileContent(fileUrl);
                const analysis = await analyzeCodeWithAI(code);

                results.push({
                    file: fileName,
                    analysis
                });

                // Gemini free tier safe delay (1 request every 12s)
                if (i < fileUrls.length - 1) {
                    await sleep(12000);
                }

            } catch (fileErr) {
                console.error(`Error analyzing ${fileName}`, fileErr);

                results.push({
                    file: fileName,
                    analysis: "Analysis failed for this file."
                });
            }
        }

        return res.json({
            repo,
            totalFiles: results.length,
            files: results
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "GitHub repo analysis failed"
        });
    }
});

export default router;
