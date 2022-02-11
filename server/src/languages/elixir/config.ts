import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'elixir {path}'],
  language: 'elixir' as Language,
  archiveName: 'input.ex',
  extension: 'ex',
};
