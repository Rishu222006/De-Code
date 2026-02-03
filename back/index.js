import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeFile from "./routes/file.js";
import { analyzeCodeWithAI } from "./analyze.js";
import analyzeRepo from "./routes/repo.js";

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

app.use("/", analyzeFile);
app.use("/", analyzeRepo);


// code for running the server.
app.listen(5000, () => console.log(`${process.env.CHECK}`));