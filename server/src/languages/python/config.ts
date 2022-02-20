import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'python {path}'],
  language: 'python' as Language,
  archiveName: 'input.py',
  extension: 'py',
};
