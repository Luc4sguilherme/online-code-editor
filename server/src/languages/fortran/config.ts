import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'gfortran -o compiled {path} && ./compiled'],
  language: 'fortran' as Language,
  archiveName: 'input.f',
  extension: 'f',
};
