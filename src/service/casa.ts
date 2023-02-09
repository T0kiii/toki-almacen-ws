import { borraCasaDao, creaCasaDao } from '../dao/casa'
import { formateaError } from '../db/db'
import { Casa } from '../types/casa'

export async function creaCasaServ(casaDto: Casa): Promise<Respuesta> {
  let respuesta: Respuesta = {
    exito: false,
  }
  try {
    const creados = await creaCasaDao(casaDto.nombreCasa, casaDto.descCasa)

    if (creados.length > 0) {
      respuesta.exito = true
    }

    return respuesta
  } catch (error) {
    console.error('Fallo al crear casa');
    formateaError(error, respuesta);

    return respuesta
  }
}

export async function borraCasaServ(casaDto: Casa): Promise<Respuesta> {
  let respuesta: Respuesta = {
    exito: false,
  }
  try {
    const borrados = await borraCasaDao(casaDto.nombreCasa)

    if (borrados > 0) {
      respuesta.exito = true
    }

    return respuesta
  } catch (error) {
    console.error('Fallo al crear casa');
    formateaError(error, respuesta);

    return respuesta
  }
}
