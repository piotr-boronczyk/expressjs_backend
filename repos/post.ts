import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'
import { DB } from 'kysely-codegen'
import { PostReq } from '../types/post'
import { v4 as uuidv4 } from 'uuid'

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

export const createPost = (post: PostReq) => {
    return db
        .insertInto('post')
        .values({ uuid: uuidv4(), content: post.content, title: post.title})
        .returning('uuid')
        .executeTakeFirst()
}