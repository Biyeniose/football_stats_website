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
