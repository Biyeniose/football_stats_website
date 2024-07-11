import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

//dotenv.config({ path: ".//config/.env" });

const supabase_url = process.env.SUPABASE_URL;
const supabase_key = process.env.SUPABASE_KEY;

export const getEPLteams = async (req: Request, res: Response) => {
  const query =
    "/rest/v1/football_teams?select=team_name,team_id,logo&league_id=eq.1";
  const api_url = supabase_url + query + "&apikey=" + supabase_key;

  try {
    const response = await axios.get(api_url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getESPteams = async (req: Request, res: Response) => {
  const query =
    "/rest/v1/football_teams?select=team_name,team_id,logo&league_id=eq.2";
  const api_url = supabase_url + query + "&apikey=" + supabase_key;

  try {
    const response = await axios.get(api_url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getITAteams = async (req: Request, res: Response) => {
  const query =
    "/rest/v1/football_teams?select=team_name,team_id,logo&league_id=eq.4";
  const api_url = supabase_url + query + "&apikey=" + supabase_key;

  try {
    const response = await axios.get(api_url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getGERteams = async (req: Request, res: Response) => {
  const query =
    "/rest/v1/football_teams?select=team_name,team_id,logo&league_id=eq.3";
  const api_url = supabase_url + query + "&apikey=" + supabase_key;

  try {
    const response = await axios.get(api_url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllLeagues = async (req: Request, res: Response) => {
  const query =
    "/rest/v1/football_leagues?select=league_name,league_logo,league_id";
  const api_url = supabase_url + query + "&apikey=" + supabase_key;

  try {
    const response = await axios.get(api_url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};
