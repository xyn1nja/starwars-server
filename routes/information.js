import express from "express";
const router = express.Router();
import { showAttack } from "../controllers/starwars.js";

router.get("/information", showAttack);

export const infoRoute = router;
