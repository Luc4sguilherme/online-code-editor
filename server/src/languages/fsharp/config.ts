import type { Language } from '~/types/language';

export default {
  cmd: [
    'sh',
    '-c',
    'fsharpc --nologo --out:input.exe {path} && mono input.exe',
  ],
  language: 'fsharp' as Language,
  archiveName: 'input.fs',
  extension: 'fs',
};
