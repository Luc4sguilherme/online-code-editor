import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'phantomjs {path}'],
  language: 'javascriptphantomjs' as Language,
  archiveName: 'input.js',
  extension: 'js',
};
