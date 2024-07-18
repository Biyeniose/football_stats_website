import { Request, Response } from "express";
import axios from "axios";
import supabase from "../config/supabase";

export const getEPLteams = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("football_teams")
      .select(
        `
    team_name,
    team_id,
    logo
    `
      )
      .eq("league_id", 1);
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getESPteams = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("football_teams")
      .select(
        `
  team_name,
  team_id,
  logo
  `
      )
      .eq("league_id", 2);
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getITAteams = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("football_teams")
      .select(
        `
  team_name,
  team_id,
  logo
  `
      )
      .eq("league_id", 4);
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getGERteams = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("football_teams")
      .select(
        `
  team_name,
  team_id,
  logo
  `
      )
      .eq("league_id", 3);
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllLeagues = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from("football_leagues").select(
      `
    league_name,
    league_id,
    league_logo
    `
    );
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getTeamsbyLeagueId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { data, error } = await supabase
      .from("football_teams")
      .select(
        `
    team_id,
    team_name,
    logo
    `
      )
      .eq("league_id", id);
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
