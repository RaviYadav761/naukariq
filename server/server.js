import express from "express";
import cors from "cors";

import transcriptRoutes from "./routes/transcript.routes.js";

const app = express();

const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://naukriq.me",
  "https://www.naukriq.me",
];

const isAllowedOrigin = (origin) => {
  if (!origin) return true;

  if (allowedOrigins.includes(origin)) return true;

  if (/^https:\/\/.*\.vercel\.app$/i.test(origin)) return true;
  if (/^https:\/\/.*\.netlify\.app$/i.test(origin)) return true;

  return false;
};

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      if (isAllowedOrigin(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
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