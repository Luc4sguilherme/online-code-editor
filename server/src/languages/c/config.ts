import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'g++ -o compiled {path} && ./compiled'],
  language: 'c' as Language,
  archiveName: 'input.c',
  extension: 'c',
};
