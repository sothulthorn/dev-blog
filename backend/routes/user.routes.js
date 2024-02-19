import express from 'express';
import { getTest } from '../controller/user.controller.js';

const router = express.Router();

router.get('/test', getTest);

export default router;
