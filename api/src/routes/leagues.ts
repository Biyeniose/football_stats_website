import express, { Request, Response } from "express";

import {
  getEPLteams,
  getESPteams,
  getITAteams,
  getGERteams,
  getAllLeagues,
} from "../controllers/getTeamsbyLeague";

const router = express.Router();

router.get("/teams/eng", getEPLteams);

router.get("/teams/esp", getESPteams);

router.get("/teams/ita", getITAteams);

router.get("/teams/ger", getGERteams);

router.get("/leagues", getAllLeagues);

export default router;
