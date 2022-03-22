import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'clisp {path}'],
  language: 'commonlisp' as Language,
  archiveName: 'input.lisp',
  extension: 'lisp',
};
