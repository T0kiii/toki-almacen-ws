import express from "express";
import { actualizaCasaCtrl, borraCasaCtrl, creaCasaCtrl, getCasaCtrl } from "../controller/casa";

export const router = express.Router();

// GET read
// POST create
// PUT update
// DELETE delete

router.get('/casa', getCasaCtrl);
router.put('/casa', actualizaCasaCtrl);
router.post('/casa', creaCasaCtrl);
router.delete('/casa', borraCasaCtrl);
