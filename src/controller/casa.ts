import { Request, Response } from 'express'
import { crearCasaServ } from '../service/casa'


export async function creaCasaCtrl(req: Request, res: Response): Promise<Response> {
  try {
    const exito = await crearCasaServ(req.body)
    res.status(201).json(exito)

    if (exito!) {
      console.log('No se ha podido crear la casa')
    }

  } catch (error) {
    console.error(error);
    console.error('Error de la app en crearCasaCtrl');
  }

  return res;
}


