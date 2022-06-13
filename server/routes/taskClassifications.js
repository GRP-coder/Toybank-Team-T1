import express from 'express';

import { getTaskClassifications} from '../controllers/taskClassification.js';


const router = express.Router();

router.get('/', getTaskClassifications);

export default router;