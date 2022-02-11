import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'node {path}'],
  language: 'nodejs' as Language,
  archiveName: 'input.js',
  extension: 'js',
};
