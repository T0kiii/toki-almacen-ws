import { Request, Response } from 'express'
import { borraCasaServ, creaCasaServ } from '../service/casa'


export async function creaCasaCtrl(req: Request, res: Response): Promise<Response> {
  try {
    const resServicio = await creaCasaServ(req.body)
    res.status(201).json(resServicio);

  } catch (error) {
    console.error(error);
    console.error('No se ha podido crear la casa');
  }

  return res;
}

export async function borraCasaCtrl(req: Request, res: Response): Promise<Response> {
  try {
    const resServicio = await borraCasaServ(req.body)
    res.status(201).json(resServicio);

  } catch (error) {
    console.error(error);
    console.error('No se ha podido borrar la casa');
  }

  return res;
}
