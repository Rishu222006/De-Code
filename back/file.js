import multer from "multer";
const upload = multer();
import express, { Router } from "express";
const router = express.Router();

router.post("/file", upload.single("file"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const code = req.file.buffer.toString("utf-8");

    try {
        const analysis = await analyzeCodeWithAI(code);
        res.json(analysis);
    } catch (err) {
        res.status(500).json({ error: "AI analysis failed" });
    }
})

export default router;