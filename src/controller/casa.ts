import { Request, Response } from 'express'
import { borraCasaServ, creaCasaServ, getCasaServ } from '../service/casa'


export async function getCasaCtrl(req: Request, res: Response) {
  const resServicio = await getCasaServ(req.body);
  res.status(201).json(resServicio);

  return res;
}

export async function creaCasaCtrl(req: Request, res: Response): Promise<Response> {
  const resServicio = await creaCasaServ(req.body);
  res.status(201).json(resServicio);

  return res;
}

export async function borraCasaCtrl(req: Request, res: Response): Promise<Response> {
  const resServicio = await borraCasaServ(req.body);
  res.status(201).json(resServicio);

  return res;
}
