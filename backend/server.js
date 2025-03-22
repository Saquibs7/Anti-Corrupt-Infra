const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");  // ✅ Import dotenv

dotenv.config();  // ✅ Load .env variables

const app = express();
app.use(express.json());
app.use(cors());

const aiInsightsRoutes = require("./routes/aiInsights");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/auth", require("./routes/auth"));
app.use("/api/ai-insights", aiInsightsRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
