import type { Language } from '~/types/language';

export default {
  cmd: [
    'sh',
    '-c',
    'kotlinc {path} -include-runtime -d input.jar && java -jar input.jar',
  ],
  language: 'kotlin' as Language,
  archiveName: 'input.kt',
  extension: 'kt',
};
