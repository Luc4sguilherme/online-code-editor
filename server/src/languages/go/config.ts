import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'go run {path}'],
  language: 'go' as Language,
  archiveName: 'input.go',
  extension: 'go',
};
