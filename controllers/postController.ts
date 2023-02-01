import { Request, Response } from 'express'
import * as postService from '../services/post'
import { PostReq } from '../types/post'
import { TypedRequestBody } from '../utils/request'

export const newPost = (_req: Request, res: Response) => {
    res.json({message: 'POST new tea'})
}

export const getPost = async (req: Request, res: Response) => {
    const post = await postService.getPost(req.params.uuid)
    if (post) {
        res.json(post)
    }
}

export const createPost = async (req: TypedRequestBody<PostReq>, res: Response) => {
    const postUUID = await postService.createPost(req.body)
    res.json({ postUUID })
}