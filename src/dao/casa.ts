import { db } from "../db/db"
import { Casa } from "../types/casa";


// DAO: data access object

export async function getCasaDao(casa: Casa):
  Promise<Casa> {
  const casaRecuperada = await db('CASA').select()
    .where("cas_nombre", casa.nombreCasa);
  
  return casaRecuperada as unknown as Casa;
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

