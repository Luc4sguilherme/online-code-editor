import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'crystal {path}'],
  language: 'crystal' as Language,
  archiveName: 'input.cr',
  extension: 'cr',
};
