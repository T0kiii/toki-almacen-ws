import express from "express";
import { creaCasaCtrl } from "../controller/casa";

export const router = express.Router();

router.post('/casa', creaCasaCtrl);
