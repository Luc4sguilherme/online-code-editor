import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'groovy {path}'],
  language: 'groovy' as Language,
  archiveName: 'input.groovy',
  extension: 'groovy',
};
