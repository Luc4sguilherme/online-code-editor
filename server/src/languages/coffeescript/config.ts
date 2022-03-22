import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'coffee {path}'],
  language: 'coffeescript' as Language,
  archiveName: 'input.coffee',
  extension: 'coffee',
};
