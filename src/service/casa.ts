import { actualizaCasaDao, borraCasaDao, creaCasaDao, getCasaDao } from '../dao/casa'
import { formateaError } from '../db/db'
import { Casa } from '../types/casa'

export async function getCasaServ(casa: Casa): Promise<Casa | Respuesta> {
  let respuesta: Respuesta = { exito: false }
  try {
    const consulta = await getCasaDao(casa);

    if (consulta.respuesta.exito){
      return consulta.casa!;
    } 
    else {
      respuesta = consulta.respuesta;
    } 

  } catch (error) {
    formateaError(error, respuesta);
    return respuesta;
  }

  return respuesta
}

export async function actualizaCasaServ(casaInput: Casa): Promise<Respuesta> {
  let respuesta: Respuesta = { exito: false }
  try {
    // Comprobamos si ya existe previamente la casa
    const consulta = await getCasaDao(casaInput);

    let actualizados = 0;

    // Si existe casa previa, se actualiza
    if (consulta.casa) {
      const casaPrevia: Casa = consulta.casa!;
      const nuevaCasa = compararaCasas(casaInput, casaPrevia)

      if (nuevaCasa !== undefined){
        actualizados = await actualizaCasaDao(nuevaCasa);
      }else {
        respuesta.mensaje = `No hay cambios nuevos para la casa ${casaInput.nombreCasa}`;
        return respuesta
      }
    } else {
      respuesta.mensaje = `No existe la casa ${casaInput.nombreCasa}`;
      return respuesta
    }

    if (actualizados === 1) {
      respuesta.exito = true;
      respuesta.mensaje = `Se ha actualizado la casa ${casaInput.nombreCasa}`;
      return respuesta
    }

    if (actualizados > 1) {
      respuesta.exito = true;
      respuesta.mensaje = `Se han actualizado varias casas ${casaInput.nombreCasa} y no debería`;
      return respuesta
    }

    respuesta.mensaje = `Error inesperado al actualizar ${casaInput.nombreCasa}`;
    return respuesta

  } catch (error) {
    formateaError(error, respuesta);
    return respuesta;
  }
}

export async function creaCasaServ(casa: Casa): Promise<Respuesta> {
  let respuesta: Respuesta = { exito: false }
  try {
    // Comprobamos si ya existe previamente la casa
    const consulta = await getCasaDao(casa);

    let creados = [];

    // Si no existe casa previa, se crea la nueva
    if (consulta.casa === undefined) {
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

    if (creados.length > 1) {
      respuesta.exito = true;
      respuesta.mensaje = `Se han creado varias casas ${casa.nombreCasa} y no debería`;
      return respuesta
    }

    respuesta.mensaje = `Error inesperado al crear ${casa.nombreCasa}`;
    return respuesta

  } catch (error) {
    formateaError(error, respuesta);
    return respuesta;
  }
}

export async function borraCasaServ(casa: Casa): Promise<Respuesta> {
  let respuesta: Respuesta = { exito: false }
  try {
    // Comprobamos si ya existe previamente la casa
    const consulta = await getCasaDao(casa);

    let borrados = 0;

    if (consulta.casa) {
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

    if (borrados > 1) {
      respuesta.exito = true;
      respuesta.mensaje = `Se han borrado varias casas ${casa.nombreCasa} y no debería`;
      return respuesta
    }

    respuesta.mensaje = `Error inesperado al borrar ${casa.nombreCasa}`;
    return respuesta

  } catch (error) {
    formateaError(error, respuesta);
    return respuesta;
  }
}


function compararaCasas(casaNueva: Casa, casaAntigua: Casa) {
  // Recuperamos los campos de la nueva casa a actualizar porque pueden variar en número
  const camposCasaNueva = Object.keys(casaNueva);
  // Eliminamos que se pueda modificar la clave primaria que no maneja el usuario
  camposCasaNueva.filter(campo => campo != 'idCasa');

  const casaActualizar = casaAntigua;
  let seActualiza = false;

  const keysCasaNueva: Array<keyof Casa> = Object.keys(casaNueva) as Array<keyof Casa>;
  keysCasaNueva.forEach(key => {
    if (casaNueva[key] !== undefined && key != 'idCasa' && casaAntigua[key] !== casaNueva[key]) {
      // @ts-ignore
      casaActualizar[key] = casaNueva[key];
      seActualiza = true;
    }
  });

  return (seActualiza? casaActualizar : undefined);
}
