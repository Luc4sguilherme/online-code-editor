import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'Rscript {path}'],
  language: 'r' as Language,
  archiveName: 'input.R',
  extension: 'R',
};
