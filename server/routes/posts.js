import express from 'express';

import { getPosts, createPost, getPost, updatePost, deletePost,  likePost, requestPost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// router.get('/', getPosts);
// router.post('/', auth, createPost);
// router.patch('/:id',auth, updatePost);
// router.delete('/:id',auth, deletePost);
// router.patch('/:id/likePost',auth, likePost);

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.patch('/:id/requestPost', requestPost);


export default router;