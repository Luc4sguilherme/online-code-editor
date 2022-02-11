import { Request } from 'express';
import fs from 'fs';
import multer from 'multer';
import os from 'os';
import { join, resolve } from 'path';

import { Language } from '~/types/language';

import languages from '@src/languages';

type Params = {
  language: Language;
};

interface AuthRequest extends Request {
  context?: {
    userId?: string;
  };
}

const storage = multer.diskStorage({
  destination: function (req: AuthRequest, file, cb) {
    const { language } = req.params as Params;
    const userId = req.context?.userId;
    const appPrefix = 'code-runner';
    const defaultFolder = join(os.tmpdir(), appPrefix);
    const path = resolve(defaultFolder, `user-${userId}`, `${language}`);

    fs.mkdirSync(path, { recursive: true });

    cb(null, path);
  },
  filename: function (req, _, cb) {
    const { language } = req.params as Params;

    cb(null, languages[language].archiveName);
  },
});

const save = multer({ storage: storage });

export default { save };
