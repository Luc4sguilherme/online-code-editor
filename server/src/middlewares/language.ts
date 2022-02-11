import { Request, Response, NextFunction } from 'express';

import { Language } from '~/types/language';

import languages from '@src/languages';

type Params = {
  language: Language;
};

export default (req: Request, res: Response, next: NextFunction) => {
  const { language } = req.params as Params;

  if (!languages[language]?.archiveName) {
    res.status(400).send({ error: 'Invalid programming language!' });
    return;
  }

  next();
};
