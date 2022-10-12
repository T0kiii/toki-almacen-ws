require('ts-node/register'); // Necesario para que knexfile.ts funcione

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.TOKIDBIP,
      port: process.env.TOKIDBPORT,
      user: process.env.TOKIDBUSER,
      password: process.env.TOKIDBPASSWORD,
      database: process.env.TOKIDB
    },
    pool: { // valores por defecto: min: 2, max: 10 para MYSQL. Min a 0 para all idle connections can be terminated.
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  prodution: {
    client: 'mysql',
    connection: {
      host: process.env.TOKIDBIP,
      port: process.env.TOKIDBPORT,
      user: process.env.TOKIDBUSER,
      password: process.env.TOKIDBPASSWORD,
      database: process.env.TOKIDB
    },
    pool: { // valores por defecto: min: 2, max: 10 para MYSQL. Min a 0 para all idle connections can be terminated.
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
