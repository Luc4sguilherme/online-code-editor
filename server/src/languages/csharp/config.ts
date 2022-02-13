import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'mcs -out:input.exe {path} && mono input.exe'],
  language: 'csharp' as Language,
  archiveName: 'input.cs',
  extension: 'cs',
};
