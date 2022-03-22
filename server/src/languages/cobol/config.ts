import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'cobc -x -o compiled {path} && ./compiled'],
  language: 'cobol' as Language,
  archiveName: 'input.cob',
  extension: 'cob',
};
