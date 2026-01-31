import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("analyze", async (req, res) => {
    const { code, language } = req.body;

    res.json({
        scalibilityRisk: "High",
        bugRisk: "Medium",
        techDebt: "High",
        explanation: "This is a placeholder"
    });
});

app.listen(5000, () => console.log("Server Running"));