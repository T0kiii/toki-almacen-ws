import express from "express";
import { borraCasaCtrl, creaCasaCtrl, getCasaCtrl } from "../controller/casa";

export const router = express.Router();

// GET read
// POST create
// PUT update
// DELETE delete

router.get('/casa', getCasaCtrl);
router.post('/casa', creaCasaCtrl);
router.delete('/casa', borraCasaCtrl);
