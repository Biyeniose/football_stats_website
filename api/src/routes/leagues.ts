import express from "express";

import {
  getEPLteams,
  getESPteams,
  getITAteams,
  getGERteams,
  getAllLeagues,
  getTeamsbyLeagueId,
} from "../controllers/getTeamsbyLeague";

const router = express.Router();

router.get("/teams/eng", getEPLteams);

router.get("/teams/esp", getESPteams);

router.get("/teams/ita", getITAteams);

router.get("/teams/ger", getGERteams);

router.get("/leagues", getAllLeagues);

router.get("/teams/:id", getTeamsbyLeagueId);

export default router;
