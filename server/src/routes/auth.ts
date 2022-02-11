import express from 'express';

import * as authController from '@src/controllers/authController';
const router = express.Router();

router.post('/register', authController.register);
router.post('/authenticate', authController.authenticate);

export { router };
