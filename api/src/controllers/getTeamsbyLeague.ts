import { Request, Response } from "express";
import axios from "axios";

export const getEPLteams = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://mcdnqbhwzywrupgxogol.supabase.co/rest/v1/football_teams?select=team_name,logo&league_id=eq.1&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZG5xYmh3enl3cnVwZ3hvZ29sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMTY1MDksImV4cCI6MjAzMjU5MjUwOX0.p1J5s4nPaO6uOQa4TycQdbBnB42FcMsVMtXRYJjfyVg"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getESPteams = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://mcdnqbhwzywrupgxogol.supabase.co/rest/v1/football_teams?select=team_name,logo&league_id=eq.2&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZG5xYmh3enl3cnVwZ3hvZ29sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMTY1MDksImV4cCI6MjAzMjU5MjUwOX0.p1J5s4nPaO6uOQa4TycQdbBnB42FcMsVMtXRYJjfyVg"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getITAteams = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://mcdnqbhwzywrupgxogol.supabase.co/rest/v1/football_teams?select=team_name,logo&league_id=eq.4&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZG5xYmh3enl3cnVwZ3hvZ29sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMTY1MDksImV4cCI6MjAzMjU5MjUwOX0.p1J5s4nPaO6uOQa4TycQdbBnB42FcMsVMtXRYJjfyVg"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getGERteams = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://mcdnqbhwzywrupgxogol.supabase.co/rest/v1/football_teams?select=team_name,logo&league_id=eq.3&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZG5xYmh3enl3cnVwZ3hvZ29sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMTY1MDksImV4cCI6MjAzMjU5MjUwOX0.p1J5s4nPaO6uOQa4TycQdbBnB42FcMsVMtXRYJjfyVg"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};
