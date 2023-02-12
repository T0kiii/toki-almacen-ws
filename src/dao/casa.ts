import { db } from "../db/db"
import { Casa, getCasaOuputType } from "../types/casa";


// DAO: data access object

export async function getCasaDao(casa: Casa): Promise<getCasaOuputType> {
  let respuesta: Respuesta = {exito: false}
  let getCasaOuput: getCasaOuputType = { respuesta }

  const rows = await db('CASA').select()
    .where("cas_nombre", casa.nombreCasa);
  
  if (rows.length === 1 ) {
    const casaRecuperada: Casa = {
      idCasa: rows[0].cas_id,
      nombreCasa: rows[0].cas_nombre,
      descCasa: rows[0].cas_desc
    };

    respuesta.exito = true;
    getCasaOuput = { casa: casaRecuperada, respuesta }

  } else if (rows.length === 0){
    respuesta.mensaje = `No existe la casa ${casa.nombreCasa}`;

  } else if (rows.length > 1) { 
    respuesta.mensaje = `Existen varias casas ${casa.nombreCasa} y no debería`;
  }

  return getCasaOuput;
  }


export async function actualizaCasaDao(casa: Casa):
  Promise<number> {
  const actualizados = await db('CASA')
  .where("cas_nombre", casa.nombreCasa)
  .update({
    cas_nombre: casa.nombreCasa,
    cas_desc: casa.descCasa
  });

  // VERSIÓN CON COMPROBACIÓN PROPIA
  // No la pongo porque prefiero dar más información desde el service
  // si hay algún error
  
  // let actualizados = 0;

  // const rows = await db('CASA').select()
  //   .where("cas_nombre", casa.nombreCasa)
  //   .then(async respuesta => {
  //     if (respuesta.length = 1) {
  //       actualizados = await db('CASA')
  //         .where("cas_nombre", casa.nombreCasa)
  //         .update({
  //           cas_nombre: casa.nombreCasa,
  //           cas_desc: casa.descCasa
  //         });
  //     }
  //   }).catch(err => console.error(err));

  return actualizados;
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

