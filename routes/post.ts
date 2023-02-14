import express from 'express'
import * as postController from '../controllers/postController'

const router  = express.Router()

router.get('/lastest/:numberOfPosts', postController.getLastestPosts)
router.get('/:uuid', postController.getPost)
router.post('/', postController.createPost)

export default router