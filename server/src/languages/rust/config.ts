import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'rustc {path} && ./input'],
  language: 'rust' as Language,
  archiveName: 'input.rs',
  extension: 'rs',
};
