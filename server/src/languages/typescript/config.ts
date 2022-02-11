import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'ts-node {path}'],
  language: 'typescript' as Language,
  archiveName: 'input.ts',
  extension: 'ts',
};
