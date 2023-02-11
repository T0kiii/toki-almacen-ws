import { borraCasaDao, creaCasaDao, getCasaDao } from '../dao/casa'
import { formateaError } from '../db/db'
import { Casa } from '../types/casa'

export async function getCasaServ(casa: Casa): Promise<Casa | undefined | Respuesta> {
  let respuesta: Respuesta = { exito: false }
  try {
    const consulta = await getCasaDao(casa);

    if (consulta.numResultados === 1){
      return consulta.casa!;
    } 
    else if (consulta.numResultados === 0){
      respuesta.mensaje = `No existe la casa ${casa.nombreCasa}`;
      console.error(respuesta.mensaje);
      return respuesta;
    } 
    else if (consulta.numResultados > 1) {
      respuesta.mensaje = `Existen varias casas ${casa.nombreCasa} y no debería`;
      console.error(respuesta.mensaje);
      return respuesta;
    }

  } catch (error) {
    console.error(respuesta.mensaje);
    formateaError(error, respuesta);

    return respuesta;
  }
}

export async function creaCasaServ(casa: Casa): Promise<Respuesta> {
  let respuesta: Respuesta = { exito: false }
  try {
    // Comprobamos si ya existe previamente la casa
    const casaPrevia = await getCasaDao(casa);

    let creados = [];

    // Si no existe casa previa, se crea la nueva
    if (casaPrevia.numResultados === 0) {
      creados = await creaCasaDao(casa.nombreCasa, casa.descCasa);
    } else {
      respuesta.mensaje = `Ya existe la casa ${casa.nombreCasa}`;
      return respuesta
    }

    if (creados.length === 1) {
      respuesta.exito = true;
      respuesta.mensaje = `La casa ${casa.nombreCasa} ha sido creada`;
      return respuesta
    }

    if (creados.length >= 1) {
      respuesta.exito = true;
      respuesta.mensaje = `Se han creado varias casas ${casa.nombreCasa} y no debería`;
      return respuesta
    }

    respuesta.mensaje = `Error inesperado al crear ${casa.nombreCasa}`;

    return respuesta
  } catch (error) {
    console.error(respuesta.mensaje);
    formateaError(error, respuesta);

    return respuesta;
  }
}

export async function borraCasaServ(casa: Casa): Promise<Respuesta> {
  let respuesta: Respuesta = { exito: false }
  try {
    // Comprobamos si ya existe previamente la casa
    const casaPrevia = await getCasaDao(casa);

    let borrados = 0;

    if (casaPrevia.numResultados === 1) {
      borrados = await borraCasaDao(casa.nombreCasa);
    } else {
      respuesta.mensaje = `No existe la casa ${casa.nombreCasa}`;
      return respuesta
    }

    if (borrados === 1) {
      respuesta.exito = true;
      respuesta.mensaje = `Se ha borrado la casa ${casa.nombreCasa}`;
      return respuesta
    }

    if (borrados >= 1) {
      respuesta.exito = true;
      respuesta.mensaje = `Se han borrado varias casas ${casa.nombreCasa} y no debería`;
      return respuesta
    }

    respuesta.mensaje = `Error inesperado al borrar ${casa.nombreCasa}`;

    return respuesta
  } catch (error) {
    console.error(respuesta.mensaje);
    formateaError(error, respuesta);

    return respuesta;
  }
}
