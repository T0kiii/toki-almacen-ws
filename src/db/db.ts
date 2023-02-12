import Knex from 'knex';

import { Database } from '../Config'


/* TODO: en producción, usar dependency injection para crear una
* instancia knex y así poder mockearla para test */

export const db = Knex({
  client: 'mysql',
  connection: {
    user: Database.user,
    password: Database.password,
    host: Database.host,
    port: Database.port,
    database: Database.database
  },
  pool: {
    min: Database.poolMin,
    max: Database.poolMax,
    idleTimeoutMillis: Database.poolIdle
  },
  acquireConnectionTimeout: 2000
})

export async function comprobarConexion() {
  try {
    await db.raw('SELECT now()');

    console.log('Hay conexión con la base de datos');

  } catch (error) {
    throw new Error('No se ha podido conectar con la MariaDB via Knex.');
  }
}

export default { db }

export function formateaError(err: unknown, respuesta: Respuesta) {
  console.error(respuesta.mensaje);
  respuesta.exito = false;
  respuesta.mensaje = `Error: ${err}`;

  // TODO: Mirar a ver cómo formatear los errores de Knex. Me saltan los tipos.
  /* if (err instanceof Error) {
    console.error("Error ", err.name, " : ", err.message);

    const numError: number = err.errno;
    const codError: string = err.code;

    switch (numError) {
      case -4078: {
        console.error("No se ha podido conectar con la base de datos");
        res.mensaje = "No se ha podido conectar con la base de datos";
        break;
      }
      default: {
        console.error("Error no identificado");
        res.mensaje = `Error no identificado. \n\tNúmero error: ${numError}\n\tCódigo: ${codError}`;
        break;
      }
    }
  } */
}
