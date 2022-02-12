import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'clojure -M {path}'],
  language: 'clojure' as Language,
  archiveName: 'input.clj',
  extension: 'clj',
};
