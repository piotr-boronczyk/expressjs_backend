import express from 'express'
import * as postController from '../controllers/postController'

const router  = express.Router()

router.get('/post', postController.newPost)
router.get('/post/:uuid', postController.getPost)
router.post('/post', postController.createPost)

export default router