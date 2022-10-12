import knex from 'knex';

const knexfile = require('./knexfile');

/* TODO: en producción, usar dependency injection para crear una
* instancia knex y así poder mockearla para test */

// TODO: en producción no accedas a knexfile.development directamente.
// Usa .env.
export const db = knex(knexfile.development);
