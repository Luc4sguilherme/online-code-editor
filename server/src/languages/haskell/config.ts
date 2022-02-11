import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'runghc {path}'],
  language: 'haskell' as Language,
  archiveName: 'input.hs',
  extension: 'hs',
};
