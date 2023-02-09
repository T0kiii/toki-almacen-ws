import express from "express";
import { borraCasaCtrl, creaCasaCtrl } from "../controller/casa";

export const router = express.Router();

// GET read
// POST create
// PUT update
// DELETE delete

router.post('/casa', creaCasaCtrl);
router.delete('/casa', borraCasaCtrl);
