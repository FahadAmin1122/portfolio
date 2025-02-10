
import express from "express";
import { connectDB } from "./db";
import { registerRoutes } from "./routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
connectDB().then(() => {
  const server = registerRoutes(app);
  const port = process.env.PORT || 3000;

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
