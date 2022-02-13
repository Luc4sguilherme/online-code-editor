import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'ocaml {path}'],
  language: 'ocaml' as Language,
  archiveName: 'input.ml',
  extension: 'ml',
};
