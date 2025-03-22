import React, { useState } from "react";
import axios from "axios";

interface Project {
  name: string;
  aiInsights: {
    riskFactors: string[];
  };
}

const AIInsights = ({ project }: { project: Project }) => {
  const [aiResponse, setAiResponse] = useState("");

  async function getAIInsights() {
    try {
      const { data } = await axios.post("http://localhost:5000/api/ai-insights/generate", {
        projectName: project.name,
        riskFactors: project.aiInsights.riskFactors,
      });
      setAiResponse(data.aiInsights);
    } catch (error) {
      console.error("AI Error:", error);
    }
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold">AI Insights</h3>
      <button onClick={getAIInsights} className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded mt-2">
        Generate AI Analysis
      </button>
      {aiResponse && <p className="mt-2 text-gray-500">{aiResponse}</p>}
    </div>
  );
};

export default AIInsights;
