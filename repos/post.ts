import { PostReq } from '../types/post'
import { v4 as uuidv4 } from 'uuid'
import { db } from './dbConnection'

export const getPosts = async () => {
    const resp = await db.selectFrom('post').selectAll().execute()
    return resp
}

export const getPost = async (postUUID: string) => {
    const resp = await db.selectFrom('post').selectAll().where('post.uuid', '=', postUUID).executeTakeFirst()
    return resp
}

export const getLatestPosts = async (numberOfPosts: number) => {
    return await db.selectFrom('post').selectAll().orderBy('post.created_dt', 'desc').limit(numberOfPosts).execute()
}

export const createPost = (post: PostReq) => {
    return db
        .insertInto('post')
        .values({ uuid: uuidv4(), content: post.content, title: post.title, created_dt: new Date().toUTCString()})
        .returning('uuid')
        .executeTakeFirst()
}