import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'octave --no-window-system {path}'],
  language: 'octave' as Language,
  archiveName: 'input.oct',
  extension: 'oct',
};
