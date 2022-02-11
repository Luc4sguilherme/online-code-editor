import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'php {path}'],
  language: 'php' as Language,
  archiveName: 'input.php',
  extension: 'php',
};
