import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'scala {path}'],
  language: 'scala' as Language,
  archiveName: 'input.scala',
  extension: 'scala',
};
