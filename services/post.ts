import httpStatus from 'http-status'
import * as postRepository from '../repos/post'
import { PostReq } from '../types/post'
import { ApiError } from '../utils/ApiError'

export const getPost = (postUUID: string) => {
    return postRepository.getPost(postUUID)
}

export const getLatestPosts = async (numberOfPosts: string) => {
    const parsedString = Number(numberOfPosts)
    if(isNaN(parsedString)) {
        throw new ApiError(400, 'Parameter is not a number')
    }
    if(parsedString > 10) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Cannot get more than 10 posts')
    }
    return await postRepository.getLatestPosts(parsedString)
}

export const createPost = async (post: PostReq) => {
    const insertedPostUUID = await postRepository.createPost(post)
    if (insertedPostUUID?.uuid) {
        return insertedPostUUID.uuid
    } else {
        throw Error('Something went wrong when adding a post')
    }
}