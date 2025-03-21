const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// AI Insights API Route
router.post("/generate", async (req, res) => {
  const { projectName, riskFactors } = req.body;

  const prompt = `Analyze the project: ${projectName}.
  The following risk factors exist: ${riskFactors.join(", ")}.
  Predict possible risks and project insights.`;

  try {
    const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
    }, {
      headers: { Authorization: `Bearer ${OPENROUTER_API_KEY}` }
    });

    res.json({ aiInsights: response.data.choices[0].message.content });
  } catch (error) {
    console.error("AI API Error:", error);
    res.status(500).json({ error: "AI Analysis Failed" });
  }
});

module.exports = router;  // ✅ Fix: Use module.exports instead of export default
