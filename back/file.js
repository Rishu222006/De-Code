import multer from "multer";
const upload = multer();

app.post("/analyze-file", upload.single("file"), async (req, res) => {
    const code = req.file.buffer.toString("utf-8");
    const analysis = await analyzeCodeWithAI(code);
    res.json(analysis);
});
