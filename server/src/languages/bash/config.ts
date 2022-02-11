import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'bash {path}'],
  language: 'bash' as Language,
  archiveName: 'input.sh',
  extension: 'sh',
};
