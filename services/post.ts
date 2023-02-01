import * as postRepository from '../repos/post'
import { PostReq } from '../types/post'

export const getPost = (postUUID: string) => {
    return postRepository.getPost(postUUID)
}

export const createPost = async (post: PostReq) => {
    const insertedPostUUID = await postRepository.createPost(post)
    if (insertedPostUUID?.uuid) {
        return insertedPostUUID.uuid
    } else {
        throw Error('Something went wrong when adding a post')
    }
}