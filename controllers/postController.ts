import { Request, Response } from 'express'
import * as postService from '../services/post'
import { PostReq } from '../types/post'
import { catchAsync } from '../utils/catchAsync'
import { TypedRequestBody } from '../utils/request'
import { R } from '../utils/response'

export const getLastestPosts = catchAsync(async (req: Request, res: Response) => {
    const numberOfPosts = req.params.numberOfPosts
    const posts = await postService.getLatestPosts(numberOfPosts)
    res.json(new R({posts}))
})

export const getPost = catchAsync(async (req: Request, res: Response) => {
    const post = await postService.getPost(req.params.uuid)
    if (post) {
        res.json(new R({post}))
    }
})

export const createPost = catchAsync(async (req: TypedRequestBody<PostReq>, res: Response) => {
    const postUUID = await postService.createPost(req.body)
    res.json(new R({postUUID}))
})