import { borraCasaDao, creaCasaDao, getCasaDao } from '../dao/casa'
import { formateaError } from '../db/db'
import { Casa } from '../types/casa'

export async function getCasaServ(casa: Casa): Promise<Casa | Respuesta> {
  let respuesta: Respuesta = { exito: false }
  try {
    const casaRecuperada = await getCasaDao(casa);

    return casaRecuperada;
  } catch (error) {
    respuesta.mensaje = `No existe la casa ${casa.nombreCasa}`;
    console.error(respuesta.mensaje);
    formateaError(error, respuesta);

    return respuesta;
  }
}

export async function creaCasaServ(casa: Casa): Promise<Respuesta> {
  let respuesta: Respuesta = { exito: false }
  try {
    const creados = await creaCasaDao(casa.nombreCasa, casa.descCasa);

    if (creados.length > 0) {respuesta.exito = true;}

    return respuesta
  } catch (error) {
    respuesta.mensaje = `Fallo al crear la casa ${casa.nombreCasa}`;
    console.error(respuesta.mensaje);
    formateaError(error, respuesta);

    return respuesta;
  }
}

export async function borraCasaServ(casa: Casa): Promise<Respuesta> {
  let respuesta: Respuesta = { exito: false }
  try {
    const borrados = await borraCasaDao(casa.nombreCasa);

    if (borrados > 0) {respuesta.exito = true;}

    return respuesta
  } catch (error) {
    respuesta.mensaje = `Fallo al borrar la casa ${casa.nombreCasa}`;
    console.error(respuesta.mensaje);
    formateaError(error, respuesta);

    return respuesta;
  }
}
