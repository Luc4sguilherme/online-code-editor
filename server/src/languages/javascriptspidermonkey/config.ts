import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'js {path}'],
  language: 'javascriptspidermonkey' as Language,
  archiveName: 'input.js',
  extension: 'js',
};
