import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'
import { DB } from 'kysely-codegen'

const db = new Kysely<DB>({
    dialect: new PostgresDialect({
        pool: new Pool({
            host: 'localhost',
            port: 5432,
            database: 'blog',
            user: 'postgres',
            password: 'changeme'
        })
    })
})

export const getPosts = async () => {
    const resp = await db.selectFrom('post').selectAll().execute()
    return resp
}

export const getPost = async (postUUID: string) => {
    const resp = await db.selectFrom('post').selectAll().where('post.uuid', '=', postUUID).executeTakeFirst()
    return resp
}