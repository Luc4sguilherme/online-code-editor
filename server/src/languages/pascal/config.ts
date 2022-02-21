import type { Language } from '~/types/language';

export default {
  cmd: [
    'sh',
    '-c',
    'pc -o./input {path} 2> /dev/null | grep -e Error -e Fatal; ./input',
  ],
  language: 'pascal' as Language,
  archiveName: 'input.pas',
  extension: 'pas',
};
