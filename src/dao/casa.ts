import { db } from "../db/db"


// DAO: data access object
export async function crearCasaDao(nombreCasa: string, descCasa: string | undefined):
  Promise<Array<string>> {
  const id: string[] = await db('CASA').insert({
    cas_nombre: nombreCasa,
    cas_desc: descCasa

  });
  // Quito el returning por aviso: .returning() is not supported by mysql and will not have any effect
  // .returning('id');

  return id;
}
