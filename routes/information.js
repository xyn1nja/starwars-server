// import necessary package (express)
import express from "express";

// instantiate router
const router = express.Router();

// import showAttack controller function
import { showAttack } from "../controllers/starwars.js";

// API endpoint that returns the desired attack information
router.get("/information", showAttack);

export const infoRoute = router;
