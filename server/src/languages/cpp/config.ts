import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'g++ -o compiled {path} && ./compiled'],
  language: 'cpp' as Language,
  archiveName: 'input.cpp',
  extension: 'cpp',
};
