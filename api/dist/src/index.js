"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supabase_1 = __importDefault(require("../config/supabase")); // Adjusted import path
const cors = require("cors");
const app = (0, express_1.default)();
const port = 8080;
app.use(cors());
app.use(express_1.default.json()); // Middleware to parse JSON bodies
const getMUFC = async (req, res) => {
    try {
        const { data, error } = await supabase_1.default
            .from("eng_teams_hist")
            .select("top_apps")
            .eq("team", "Manchester United 10/11");
        if (error) {
            throw error;
        }
        return res.json(data);
    }
    catch (error) {
        return res.status(500).json({ error: "error.message" });
    }
};
// Define a route handler for GET requests to the home route
app.get("/", (req, res) => {
    res.send("Welcome to the FootLegacy!");
});
app.get("/teams", getMUFC);
// Start the server
app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});
