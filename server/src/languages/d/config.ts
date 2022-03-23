import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'gdc -o compiled {path} && ./compiled'],
  language: 'd' as Language,
  archiveName: 'input.d',
  extension: 'd',
};
