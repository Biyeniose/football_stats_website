import express, { Request, Response } from "express";

import { getMUFC_recent, getLIV_recent } from "../controllers/getRecordsbyTeam";

const record_router = express.Router();

record_router.get("/stats/mufc", getMUFC_recent);

record_router.get("/stats/liv", getLIV_recent);

export default record_router;
