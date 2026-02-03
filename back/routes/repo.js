import express from "express";
import { analyzeCodeWithAI } from "../analyze.js";
import { parseGitHubRepoUrl } from "../url_access/urlParser.js";
import { fetchFileContent } from "../url_access/file_access.js";
import { fetchRepoFiles } from "../url_access/file_list.js";

const router = express.Router();

router.post("/analyze-github-repo", async (req, res) => {
    const { url } = req.body;
    if (!url || !url.includes("github.com")) return res.status(400).json({ error: "Invalid URL" });

    try {
        const { owner, repo } = parseGitHubRepoUrl(url);
        const fileUrls = await fetchRepoFiles(owner, repo);

        const results = await Promise.allSettled(
            fileUrls.slice(0, 20).map(async (fileUrl) => {
                const code = await fetchFileContent(fileUrl);
                const analysis = await analyzeCodeWithAI(code);
                return { file: fileUrl.split("/").pop(), analysis };
            })
        );

        res.json({ repo, files: results });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "GitHub repo analysis failed" });
    }
});

export default router;
