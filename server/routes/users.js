import express from 'express';

import { signin, signup, getUser, verifyUser} from '../controllers/user.js';

const router = express.Router();

router.get('/', getUser);
router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/:id', verifyUser);

export default router;