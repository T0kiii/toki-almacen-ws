import dotenv from 'dotenv'

dotenv.config();

export namespace Database {
  export const schema = 'api'
  export const database = process.env.TOKIDB || 'tokibd'
  export const user = process.env.TOKIDBUSER || 'desa'
  // export const name = config
  // export const user = config
  export const password = process.env.TOKIDBPASSWORD || 'rrollo'
  // export const hostname = config
  export const host = process.env.TOKIDBIP || '172.17.0.2'
  export const port = Number(process.env.TOKIDBPORT || '3306')
  export const poolMin = Number(process.env.DATABASE_POOL_MIN || '0')
  export const poolMax = Number(process.env.DATABASE_POOL_MAX || '10')
  export const poolIdle = Number(process.env.DATABASE_POOL_IDLE || '10000')
}

export namespace Server {
  export const port = Number(process.env.PORT || '3000')
  export const bodyLimit = '100kb'
  export const corsHeaders = ['Link']
  export const isDev = process.env.NODE_ENV === 'development'
}

export namespace Knex {
  export const config = {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOSTNAME || Database.host,
      database: process.env.DATABASE_NAME || Database.database,
      user: process.env.DATABASE_USERNAME || Database.user,
      password: process.env.DATABASE_PASSWORD || Database.password,
      port: process.env.DATABASE_PORT || Database.port,
    },
    pool: {
      min: process.env.DATABASE_POOL_MIN,
      max: process.env.DATABASE_POOL_MAX,
      idle: process.env.DATABASE_POOL_IDLE,
    },
    migrations: {
      tableName: 'KnexMigrations',
    },
  }
}

export default {Database, Server, Knex}
