import express, { Request, Response } from "express";
import router from "./routes/leagues";
import record_router from "./routes/record";
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Define a route handler for GET requests to the home route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the FootLegacy!");
});

// Define a route handler for GET requests to /teams
app.get("/teams", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://mcdnqbhwzywrupgxogol.supabase.co/rest/v1/esp_teams_hist?select=g_a&team=eq.Real+Madrid+23%2F24&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZG5xYmh3enl3cnVwZ3hvZ29sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMTY1MDksImV4cCI6MjAzMjU5MjUwOX0.p1J5s4nPaO6uOQa4TycQdbBnB42FcMsVMtXRYJjfyVg"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.use("/api", router);
app.use("/api", record_router);

app.get("*", async (req: Request, res: Response) => {
  console.log(`Received request for: ${req.originalUrl}`);
  res.status(404).send("Not Found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});
