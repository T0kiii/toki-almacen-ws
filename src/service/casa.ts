import { crearCasaDao } from '../dao/casa'
import { Casa, CasaResponse } from '../types/casa'

export async function crearCasaServ(casaDto: Casa): Promise<CasaResponse> {
  let respuesta: CasaResponse = {
    exito: false,
  }
  try {
    const creados = await crearCasaDao(casaDto.nombreCasa, casaDto.nombreCasa)

    if (creados.length > 0) {
      respuesta.exito = true
    }

    return respuesta
  } catch (error) {
    console.error('Fallo al crear casa')
    respuesta.exito = false
    respuesta.mensaje = 'Fallo de la aplicación al crear la casa';

    return respuesta
  }
}
