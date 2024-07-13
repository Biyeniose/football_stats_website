import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

//dotenv.config({ path: ".//config/.env" });

const supabase_url = process.env.SUPABASE_URL;
const supabase_key = process.env.SUPABASE_KEY;

export const getMUFC_recent = async (req: Request, res: Response) => {
  const query =
    "/rest/v1/eng_teams_hist?select=top_apps&team=eq.Manchester+United+23%2F24";
  const api_url = supabase_url + query + "&apikey=" + supabase_key;

  try {
    const response = await axios.get(api_url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getLIV_recent = async (req: Request, res: Response) => {
  const query =
    "/rest/v1/eng_teams_hist?select=top_apps&team=eq.Arsenal+FC+23%2F24";
  const api_url = supabase_url + query + "&apikey=" + supabase_key;

  try {
    const response = await axios.get(api_url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};
