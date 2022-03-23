import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'rhino {path}'],
  language: 'javascriptrhino' as Language,
  archiveName: 'input.js',
  extension: 'js',
};
