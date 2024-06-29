import express, { Request, Response } from "express";
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Define a route handler for GET requests to the home route
// had to specify the types of the req, res arguments
// Request and Response are types provided by the express.js library to describe
// objects representing HTTP reqs, resps
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the FootLegacy!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});
