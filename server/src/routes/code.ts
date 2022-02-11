import express from 'express';

import * as codeController from '@src/controllers/codeController';
import { authMiddleware } from '@src/middlewares/auth';
import languageMiddleware from '@src/middlewares/language';
import storage from '@src/middlewares/storage';

const router = express.Router();

router.get(
  '/default/:language',
  authMiddleware,
  languageMiddleware,
  codeController.getDefaultCode,
);

router.post(
  '/execute/:language',
  authMiddleware,
  languageMiddleware,
  storage.save.single('code-file'),
  codeController.execute,
);

export { router };
