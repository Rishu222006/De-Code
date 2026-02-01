import multer from "multer";
const upload = multer();
import express from "express";
import cors from "cors";

const app = express();   // setting up express
app.use(cors());         // setting up middlewares
app.use(express.json());
app.post("/analyze-file", upload.single("file"), async (req, res) => {
    const code = req.file.buffer.toString("utf-8");
    const analysis = await analyzeCodeWithAI(code);
    res.json(analysis);
});
