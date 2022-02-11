import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'python3 {path}'],
  language: 'python' as Language,
  archiveName: 'input.py',
  extension: 'py',
};
