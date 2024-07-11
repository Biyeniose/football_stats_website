"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
// Ensure the correct path to your .env file
dotenv_1.default.config({ path: "./config/.env" });
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
if (!supabaseUrl) {
    throw new Error("SUPABASE_URL is not defined in the environment variables.");
}
if (!supabaseKey) {
    throw new Error("SUPABASE_KEY is not defined in the environment variables.");
}
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey, {
    db: { schema: "public" },
});
exports.default = supabase;
