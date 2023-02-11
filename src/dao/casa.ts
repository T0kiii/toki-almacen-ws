import { db } from "../db/db"
import { Casa, getCasaOuputType } from "../types/casa";


// DAO: data access object

export async function getCasaDao(casa: Casa):
  Promise<getCasaOuputType> {
  const rows = await db('CASA').select()
    .where("cas_nombre", casa.nombreCasa);
  
  const casaRecuperada = rows as unknown as Casa

  const respuesta: getCasaOuputType = { casa: casaRecuperada, numResultados: rows.length }
  
  return respuesta;
  }

export async function creaCasaDao(nombreCasa: string, descCasa: string | undefined):
  Promise<Array<string>> {
  const id: string[] = await db('CASA').insert({
    cas_nombre: nombreCasa,
    cas_desc: descCasa
  });
  // Quito el returning por aviso: .returning() is not supported by mysql and will not have any effect
  // .returning('id');

  return id;
}

export async function borraCasaDao(nombreCasa: string):
  Promise<number> {
  const id: number = await db('CASA')
  .delete()
  .where("cas_nombre", nombreCasa)

  return id;
}

