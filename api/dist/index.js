"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const app = (0, express_1.default)();
const port = 8080;
app.use(cors());
app.use(express_1.default.json()); // Middleware to parse JSON bodies
// Define a route handler for GET requests to the home route
app.get("/", (req, res) => {
    res.send("Welcome to the FootLegacy!");
});
app.get("/teams", (req, res) => {
    res.send("Welcome to the FootLegacy!");
});
// Start the server
app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});
