import { db } from "../db/db"


// DAO: data access object
export async function crearCasaDao(nombreCasa: string, descCasa: string):
  Promise<Array<string>> {
  const id: string[] = await db('CASA').insert({
    cas_nombre: nombreCasa,
    cas_desc: descCasa

  }).returning('id');

  return id;
}
