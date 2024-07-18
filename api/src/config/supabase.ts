import dotenv from "dotenv";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

dotenv.config(); // Load environment variables from .env file

const supabaseUrl: string = process.env.SUPABASE_URL || "your-supabase-url";
const supabaseKey: string = process.env.SUPABASE_KEY || "your-supabase-key";

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
