const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

router.post("/generate", async (req, res) => {
  const { projectName, riskFactors } = req.body;

  // ✅ Ensure required data is provided
  if (!projectName || !riskFactors || !Array.isArray(riskFactors)) {
    return res.status(400).json({ error: "Missing or invalid project name or risk factors" });
  }

  const prompt = `Analyze the project: ${projectName}. The following risk factors exist: ${riskFactors.join(", ")}. Predict possible risks and insights.`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: prompt }],
      },
      {
        headers: { Authorization: `Bearer ${OPENROUTER_API_KEY}` },
      }
    );

    // ✅ Check if AI response contains valid data
    if (!response.data || !response.data.choices || response.data.choices.length === 0) {
      console.error("❌ AI API Error: Invalid response format", response.data);
      return res.status(500).json({ error: "Invalid AI response format", details: response.data });
    }

    res.json({ aiInsights: response.data.choices[0].message.content });
  } catch (error) {
    console.error("❌ AI API Error:", error.response?.data || error.message);
    res.status(500).json({
      error: "AI Analysis Failed",
      details: error.response?.data || error.message,
    });
  }
});

module.exports = router;
