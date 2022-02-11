import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'swift {path}'],
  language: 'swift' as Language,
  archiveName: 'input.swift',
  extension: 'swift',
};
