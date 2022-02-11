import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'java {path}'],
  language: 'java' as Language,
  archiveName: 'input.java',
  extension: 'java',
};
