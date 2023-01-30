import { Request, Response } from 'express'
import * as postRepo from '../repos/post'

export const newPost = (_req: Request, res: Response) => {
    res.json({message: 'POST new tea'})
}

export const getPost = async (req: Request, res: Response) => {
    const post = await postRepo.getPost(req.params.uuid)
    if (post) {
        res.json(await postRepo.getPost(req.params.uuid))
    }
}