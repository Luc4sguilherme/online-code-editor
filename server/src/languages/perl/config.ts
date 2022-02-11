import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'perl {path}'],
  language: 'perl' as Language,
  archiveName: 'input.pl',
  extension: 'pl',
};
