import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'
import { DB } from 'kysely-codegen'

export const db = new Kysely<DB>({
    dialect: new PostgresDialect({
        pool: new Pool({
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT),
            database: process.env.DATABASE_DB,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD
        })
    })
})