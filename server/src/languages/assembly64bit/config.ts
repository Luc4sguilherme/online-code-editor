import type { Language } from '~/types/language';

export default {
  cmd: [
    'sh',
    '-c',
    'nasm -f elf64 {path} -o ./input.o && ld input.o -o input && ./input',
  ],
  language: 'assembly64bit' as Language,
  archiveName: 'input.asm',
  extension: 'asm',
};
