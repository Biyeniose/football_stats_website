import express, { Request, Response } from "express";

const app = express();
const port = 2020;

app.use(express.json()); // Middleware to parse JSON bodies

// Define a route handler for GET requests to the home route
// had to specify the types of the req, res arguments
// Request and Response are types provided by the express.js library to describe
// objects representing HTTP reqs, resps
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the FootLegacy API");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
