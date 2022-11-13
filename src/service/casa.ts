import { crearCasaDao } from '../dao/casa'
import { formateaError } from '../db/db'
import { Casa } from '../types/casa'

export async function crearCasaServ(casaDto: Casa): Promise<Respuesta> {
  let respuesta: Respuesta = {
    exito: false,
  }
  try {
    const creados = await crearCasaDao(casaDto.nombreCasa, casaDto.descCasa)

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
