import express from "express";
import cors from "cors";

import transcriptRoutes from "./routes/transcript.routes.js";

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/transcript", transcriptRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "NaukriQ backend is running",
  });
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});