import express from "express";
import { log } from "./vite";
import { connectDB } from "./db";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Connect to MongoDB
connectDB().then(() => {
  const server = registerRoutes(app);
  const port = process.env.PORT || 3000;

  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    // throw err; // Removed to prevent unhandled promise rejection in production
  });


  server.listen(port, "0.0.0.0", () => {
    log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error("Failed to start server:", err);
  process.exit(1);
});