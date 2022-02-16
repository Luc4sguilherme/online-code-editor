import type { Language } from '~/types/language';

export default {
  cmd: [
    'sh',
    '-c',
    'nasm -f elf32 {path} -o ./input.o && ld -m elf_i386 input.o -o input && ./input',
  ],
  language: 'assembly32bit' as Language,
  archiveName: 'input.asm',
  extension: 'asm',
};
