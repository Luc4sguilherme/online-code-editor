import type { Language } from '~/types/language';

export default {
  cmd: ['sh', '-c', 'vbc -nologo -out:input.exe {path} && mono input.exe'],

  language: 'visualbasic' as Language,
  archiveName: 'input.vb',
  extension: 'vb',
};
